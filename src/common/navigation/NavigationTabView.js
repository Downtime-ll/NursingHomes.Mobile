
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
    onNavigateBack: PropTypes.func.isRequired,
    onNavigateCompleted: PropTypes.func.isRequired
  };

  readerHeader(props) {
    return (
      <Navigation.Header
        {...props}
        getTitle={state => state.key}
      />
    );
  }

  renderScene(props) {
    return (
      <Navigation.Card
        {...props}
        key={props.scene.route.key}
        renderScene={props.scene.router}
      />
    );
  }

  render() {
    return (
      <Navigation.AnimatedView
        style={{flex: 1}}
        navigationState={this.props.navigationState}
        renderOverlay={this.props.navigationState.shouldRenderHeader ? this.readerHeader : null}
        renderScene= {(props) =>
{
          return (
      <Navigation.Card
        {...props}
        key={props.scene.route.key}
        onNavigateBack={this.props.onNavigateBack}
        renderScene={this.props.router}
      />
    );
        }

        }
        onNavigate={this.props.onNavigateBack}
        applyAnimation={(pos, navState) => {
          // This is the default animation. We redefine it here to be
          // able to attach a onComplete handler
          Animated
            .spring(pos, {toValue: navState.index, bounciness: 0})
            .start(() => {
              this.props.onNavigateCompleted();
            });
        } } >
      </Navigation.AnimatedView>
    );
  }
}
