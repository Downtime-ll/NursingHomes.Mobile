import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StatusBar, StyleSheet, Platform} from 'react-native';
import _ from 'lodash';

const stylesForAll = {
  header: {
    height: Platform.OS === 'ios' ? 64 : 44,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DDD',
    backgroundColor: '#F8F8F8'
  },
  navigationBar: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  navigationBarButton: {
    marginRight: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50
  },
  navigationBarButtonText: {
    fontSize: 16,
    color: '#666'
  // paddingLeft:3
  },
  navigationBarTitle: {
    // height:20,
    marginVertical: Platform.OS === 'ios' ? 8 : 6,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  navigationBarTitleText: {
    fontSize: 16
  }
};

const defaultStyles = StyleSheet.create(stylesForAll);

class NavBar extends Component {
  static defaultProps = {
    leftButton: '返回'
  }
  constructor(props) {
    super(props);
    this._renderNavBar = this._renderNavBar.bind(this);
  }
  _renderNavBar() {
    const {title, leftButton, rightButton, onLeftButtonClick, onRightButtonClick} = this.props;
    const styles = defaultStyles;

    const ValidElement = (text) => React.isValidElement(text) ? leftButton : null;
    let _title = (
    <View style={styles.navigationBarTitle}>
      {_.isString(title) ? <Text style={styles.navigationBarTitleText}>
                             {title}
                           </Text>
                         : ValidElement(title)}
    </View>
    );
    if (_.isFunction(title)) {
      _title = title();
    }

    let _leftButton = (
      <TouchableOpacity
        style={[styles.navigationBarButton, {marginLeft: 5}]}
        onPress={onLeftButtonClick || (() => {})}>
        {_.isString(leftButton) ? <Text style={styles.navigationBarButtonText}>
                                  {leftButton}
                                  </Text>
                                : ValidElement(leftButton) }
      </TouchableOpacity>
    );
    if (_.isFunction(leftButton)) {
      _leftButton = leftButton();
    }

    let _rightButton = (
    <TouchableOpacity
      style={[styles.navigationBarButton, {marginLeft: 5}]}
      onPress={onRightButtonClick || (() => {})}>
      { _.isString(rightButton) ? <Text style={styles.navigationBarButtonText}>
                                   {rightButton}
                                 </Text>
                                : ValidElement(rightButton)}
    </TouchableOpacity>
    );
    if (_.isFunction(rightButton)) {
      _rightButton = rightButton();
    }

    return (
    <View style={styles.navigationBar}>
      {_leftButton}
      {_title}
      {_rightButton}
    </View>
    );
  }
  render() {
    const styles = defaultStyles;
    return (
    <View style={styles.header}>
      {Platform.OS === 'ios' ? <StatusBar /> : null}

      {this._renderNavBar()}
    </View>
    );
  }
}

export default NavBar;
