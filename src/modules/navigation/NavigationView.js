import React,{PropTypes} from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import NavigationTabView from './NavigationTabView';
import AppRouter from '../AppRouter';
import TabBar from '../tabbar/TabBar';

const Tab_Bar_Height = 50;

/**
 * NavigationView
 */
export default class NavigationView extends React.Component {
  static propTypes: {
    router: PropTypes.func.isRequired,
    navigationState: PropTypes.object.isRequired,
    onNavigate: PropTypes.func.isRequired,
    switchTab: PropTypes.func.isRequired
  }

  render() {
    const {routes, index} = this.props.navigationState;
    const tabs = routes.map((tabState: any, tabIndex: number) => {
      return (
        <View key={'tab' + tabIndex}
              style={[styles.viewContainer, index !== tabIndex && styles.hidden]}>
          <NavigationTabView
            router={AppRouter}
            navigationState={tabState}
            onNavigate={this.props.onNavigate}
            />
        </View>
      );
    });

    return (
       <View style={styles.container}>
        {tabs}
        <TabBar
          height={Tab_Bar_Height}
          tabs={routes}
          currentTabIndex={index}
          switchTab={this.props.switchTab}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  viewContainer: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: Tab_Bar_Height
  },
  hidden: {
    overflow: 'hidden',
    width: 0,
    height: 0
  }
});
