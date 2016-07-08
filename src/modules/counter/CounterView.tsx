import * as CounterState from './CounterState';
import * as NavigationState from '../../modules/navigation/actions';
import * as React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Image,
    Text,
    View
} from 'react-native';

export default class CounterView extends React.Component<any, any> {
    private increment() {
        this.props.dispatch(CounterState.increment());
    }

    private reset() {
        this.props.dispatch(CounterState.reset());
    }

    private random() {
        this.props.dispatch(CounterState.random());
    }

    private bored() {
        // this.props.dispatch(NavigationState.pushRoute({ key: 'Color',title:'title',index:0,isNavigating:true }));
    }

    public render() {
        const loadingStyle = this.props.loading
            ? { backgroundColor: '#eee' }
            : null;
        return (
            <View style={styles.container as any}>
                <TouchableOpacity
                    onPress={this.increment}
                    style={[styles.counterButton, loadingStyle]}>
                    <Text style={styles.counter as any}>
                        {this.props.counter} asdf
                    </Text>
                </TouchableOpacity>

 <TouchableOpacity onPress={this.reset}>
                    <Text style={styles.linkButton as any}>
                        Reset
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.reset}>
                    <Text style={styles.linkButton as any}>
                        Reset
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.random}>
                    <Text style={styles.linkButton as any}>
                        Random
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.bored} accessible={true}>
                    <Text style={styles.linkButton as any}>
                        {'I\'m bored!'}
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const circle = {
    borderWidth: 0,
    borderRadius: 40,
    width: 80,
    height: 80
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'white'
    },
    userContainer: {
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    userProfilePhoto: {
        // alignSelf: 'center'
    },
    counterButton: {
        // ...circle,
        // backgroundColor: 'green',
        // alignItems: 'center',
        // justifyContent: 'center',
        // margin: 20
    },
    counter: {
        // color: 'white',
        // fontSize: 20,
        // textAlign: 'center'
    },
    welcome: {
        // textAlign: 'center',
        // color: 'black',
        // marginBottom: 5,
        // padding: 5
    },
    linkButton: {
        textAlign: 'center',
        color: '#CCCCCC',
        marginBottom: 10,
        padding: 5
    }
});