"use strict";
var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
    }
    return t;
};
var React = require('react');
var react_native_1 = require('react-native');
var AnimatedView = react_native_1.NavigationExperimental.AnimatedView,
    CardStack = react_native_1.NavigationExperimental.CardStack,
    Header = react_native_1.NavigationExperimental.Header;
var NavigationTabView = (function(_super) {
    __extends(NavigationTabView, _super);

    function NavigationTabView() {
        _super.apply(this, arguments);
    }
    NavigationTabView.prototype.readerHeader = function() {
        return (React.createElement(Header, __assign({}, this.props, {
            renderTitleComponent: function(headerProps) {
                return (React.createElement(Header.Title, null, headerProps.scene.navigationState.key));
            }
        })));
    };
    NavigationTabView.prototype.renderScene = function(props) {
        return (React.createElement(CardStack, __assign({}, props, {
            key: props.scene.route.key,
            renderScene: this.props.router
        })));
    };
    NavigationTabView.prototype.render = function() {
        return (React.createElement(AnimatedView, {
            navigationState: this.props.navigationState,
            renderOverlay: this.props.shouldRenderHeader ? this.readerHeader : null,
            renderScene: this.renderScene,
            onNavigate: this.props.onNavigate,
            applyAnimation: function(pos, navState) {}
        }));
    };
    return NavigationTabView;
}(React.Component));
exports.NavigationTabView = NavigationTabView;
