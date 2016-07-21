import React,{PropTypes} from 'react';
import {View} from 'react-native';
import NavBar from '../navbar';
import {connect} from 'react-redux';
import * as NavigationState from '../../navigation/actions';

class ModelPage extends React.Component {
  static propTypes= {
    popRoute: PropTypes.func.isRequired,
    router: PropTypes.object.isRequired
  }
  render() {
    let title = this.props.router.getTitle();
    let nav = {
      pop: this.props.popRoute
    };
    return (
      <View >
        <NavBar title={title}
          rightButton = {() => this.props.router.renderRightButton(nav)}
          onLeftButtonClick={() => this.props.popRoute()} />
          {this.props.router.renderScene(nav)}
      </View>
      );
  }
}

export default connect(
  state => {
    return {navigationState: state.get('navigation').toJS()};
  },
  dispatch => ({
    pushRoute(state) {
      dispatch(NavigationState.pushRoute(state));
    },
    popRoute() {
      dispatch(NavigationState.popRoute());
    }
  })
)(ModelPage);
