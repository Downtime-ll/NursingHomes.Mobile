import React,{PropTypes} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const Icon = require('react-native-vector-icons/Ionicons');

export default class TabBarButton extends React.Component {
  static propTypes= {
    text: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired,
    iconName: PropTypes.string.isRequired
  };

  render() {
    return (
    <TouchableOpacity onPress={this.props.action} style={[styles.button, this.props.isSelected && styles.selected]}>
      <View style={styles.viewContainer}>
        <Icon name={this.props.iconName} size={20} />
        <Text>
          {this.props.text}
        </Text>
      </View>
    </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    alignItems: 'center'
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  selected: {
    backgroundColor: 'yellow'
  }
});
