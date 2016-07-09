
import React, {PropTypes} from 'react';
import {
  Animated,
  NavigationExperimental as Navigation,
  StyleSheet
} from 'react-native';

export default class NavigationTabView extends React.Component {
  static propTypes = {
    router: PropTypes.func.isRequired,
    navigationState: PropTypes.object.isRequired,
    onNavigate: PropTypes.func.isRequired,
    shouldRenderHeader: PropTypes.bool
  };

  static defaultProps= {
    shouldRenderHeader: true
  };

  readerHeader(props) {
    return (
      <Navigation.Header
        { ...props }
        renderTitleComponent={(headerProps: any) => {
          return (
            <Navigation.Header.Title>
              {headerProps.scene.route.title}
            </Navigation.Header.Title>
          );
        } }
      />
    );
  }

  renderScene(props) {
    return (
      <Navigation.CardStack
        { ...props }
        key={props.scene.route.key}
        renderScene={props.scene.router}
        onNavigate={props.onNavigate}
        style={styles.stackContainer} />
    );
  }

  render() {
    return (
      <Navigation.AnimatedView
        navigationState={this.props.navigationState}
        renderOverlay={this.readerHeader}
        renderScene={(props: any) => {
          return (
            <Navigation.CardStack
              {...props}
              key ={props.scene.route.key}
              renderScene={this.props.router}
              onNavigate={props.onNavigate}
              style={styles.stackContainer}
              />);

        } }
        onNavigate={this.props.onNavigate}
        applyAnimation={(pos, navState) => {
          // This is the default animation. We redefine it here to be
          // able to attach a onComplete handler
          Animated
            .spring(pos, {toValue: navState.index, bounciness: 0})
            .start(() => {
              this.props.onNavigate({type: 'animation-completed'});
            });
        } } >
      </Navigation.AnimatedView>
    );
  }
}

const styles = StyleSheet.create({
  stackContainer: {
    paddingTop: Navigation.Header.HEIGHT
  }
});
