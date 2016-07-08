
/// <reference path="../../../typings/index.d.ts" />
import * as React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import NavigationTabView from './NavigationTabView';
import AppRouter from '../AppRouter';
import TabBar from '../tabbar/TabBar';

const Tab_Bar_Height = 50;

export interface NavigationViewProps extends React.Props<NavigationView> {
  router?(props: any /* undocumented on 0.27 */): JSX.Element;
  navigationState?: any;
  switchTab?: Function;
  onNavigate?(action: Object): boolean;
}

/**
 * NavigationView
 */
export default class NavigationView extends React.Component<NavigationViewProps, any> {

  public render() {
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