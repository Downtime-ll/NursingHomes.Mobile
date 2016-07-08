
/// <reference path="../../../typings/index.d.ts" />
import * as React from 'react';
import {
  Animated,
  NavigationExperimental as Navigation,
  StyleSheet
} from 'react-native';

const {AnimatedView, CardStack, Header} = Navigation;

export interface NavigationTabViewProps extends React.Props<NavigationTabView> {
  router?(props: any /* undocumented on 0.27 */): JSX.Element;
  navigationState: any;
  shouldRenderHeader?: boolean ;
  onNavigate?(action: Object): boolean;
}

export default class NavigationTabView extends React.Component<NavigationTabViewProps, any> {

  private readerHeader(props: any): JSX.Element {

    return (
      <Header
        {...props}
        renderTitleComponent={(headerProps: any) => {
          return (
            <Header.Title>
              {headerProps.scene.route.title}
            </Header.Title>
          );
        } }
        />
    );
  }

  private renderScene(props: any) {
    const thisprops = this.props;
    return (
      <CardStack
        {...props}
        key ={props.scene.route.key}
        renderScene={thisprops.router}
        />

    );
  }

  public render() {
    return (
      <AnimatedView
        navigationState = {this.props.navigationState}
        renderOverlay={this.readerHeader }
        renderScene={(props: any) => {
          return (
            <CardStack
              {...props}
              key ={props.scene.route.key}
              renderScene={this.props.router}
              onNavigate={props.onNavigate}
              style={styles.stackContainer}
              />);

        } }
        onNavigate={this.props.onNavigate}
        applyAnimation = {(pos, navState: any) => {
          // This is the default animation. We redefine it here to be
          // able to attach a onComplete handler
          Animated
            .spring(pos, {
              toValue: navState.index,
              bounciness: 0
            })
            .start(() => {
              this.props.onNavigate({
                type: 'animation-completed'
              });
            });
        } }
        />
    );
  }
}

const styles = StyleSheet.create({
  stackContainer: {
    paddingTop: Header.HEIGHT,
  }});