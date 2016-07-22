import {StyleSheet, Platform} from 'react-native';
import listview from '../../common/stylesheet/listview';

const styles = {
  ...listview,
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  nurserRow: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFF',
    flexDirection: 'column',
    height:50,

  },
  nurserImage: {
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 5
  },
  nurserBreif: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
};

const stylesForIOS = {};

const stylesForAndroid = {};

export default StyleSheet.create(Object.assign({}, styles,
  Platform.OS === 'ios' ? stylesForIOS : null,
  Platform.OS === 'android' ? stylesForAndroid : null
));
