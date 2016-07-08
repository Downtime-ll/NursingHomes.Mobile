
/// <reference path="../../../typings/index.d.ts" />
import * as React from 'react';
import {
    Animated,
    NavigationExperimental as Navigation
} from 'react-native';

const {AnimatedView, CardStack, Header} = Navigation;

export interface NavigationTabViewProps extends React.Props<NavigationTabView> {
    router?(props: any /* undocumented on 0.27 */): JSX.Element;
    navigationState: any;
    shouldRenderHeader: boolean;
    onNavigate?(action: Object): boolean;
}

export class NavigationTabView extends React.Component<NavigationTabViewProps, any> {

    private readerHeader() {
        return (
            <Header
                {...this.props}
                renderTitleComponent={(headerProps: any) => {
                    return (
                        <Header.Title>
                            {headerProps.scene.navigationState.key}
                        </Header.Title>
                    );
                } }
                />
        );
    }

    private renderScene(props) {
        return (
            <CardStack
                {...props}
                key ={props.scene.route.key}
                renderScene={this.props.router}
                />

        );
    }

    public render() {
        return (
            <AnimatedView
                navigationState = {this.props.navigationState}
                renderOverlay={this.props.shouldRenderHeader ? this.readerHeader : null}
                renderScene={this.renderScene}
                onNavigate={this.props.onNavigate}
                applyAnimation = {(pos, navState) => {

                } }
                />

        );
    }
}
