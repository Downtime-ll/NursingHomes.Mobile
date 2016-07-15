import React,{PropTypes} from 'react';
import TabBarButton from './TabBarButton';
import {StyleSheet, View} from 'react-native';

export default class TabBar extends React.Component {
  static propTypes = {
    tabs: PropTypes.array.isRequired,
    height: PropTypes.number.isRequired,
    currentTabIndex: PropTypes.number.isRequired,
    switchTab: PropTypes.func.isRequired
  };

  render() {
    const buttons = this.props.tabs.map((tab, index) => (
      <TabBarButton
        key={'tab-bar-button-' + tab.title}
        text={tab.title}
        iconName={tab.iconName}
        action={() => this.props.switchTab(index)}
        isSelected={index === this.props.currentTabIndex} />
    ));

    return (
    <View style={[styles.navigationBar, {height: this.props.height}]}>
      {buttons}
    </View>
    );
  }
}

const styles = StyleSheet.create({
  navigationBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  buttonWrapper: {
    flex: 1,
    position: 'relative'
  }
});
