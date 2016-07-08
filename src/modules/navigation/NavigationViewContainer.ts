/// <reference path="../../../typings/index.d.ts" />
import {
    connect
} from 'react-redux';
import {
    popRoute,
    switchTab,
    navigationCompleted
} from './actions';
import NavigationView from './NavigationView';

export default connect(
    state => {
        return { navigationState: state.get('navigation').toJS() };
    },
    dispatch => ({
        switchTab(index) {
            dispatch(switchTab(index));
        },
        onNavigate(action) {
            if (action.type === 'back' || action.type === 'BackAction') {
                dispatch(popRoute());
            } else if (action.type === 'animation-completed') {
                dispatch(navigationCompleted());
            }
        }
    })
)(NavigationView);