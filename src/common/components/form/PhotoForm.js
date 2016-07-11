import * as React from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';
import * as t from 'tcomb-form-native';
import ImagePicker from 'react-native-image-picker';

const Component = t.form.Component;
const Nil = t.Nil;

// extend the base Component
export default class MyComponent extends Component {

  selectPhotoTapped() {
    const options = {
      quality: 0.5,
      maxWidth: 300,
      maxHeight: 300,
      allowsEditing: false,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        var source;

        // You can display the image using either:
        source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

        // Or:
        // if (Platform.OS === 'android') {
        //   source = {uri: response.uri, isStatic: true}
        // } else {
        //   source = {uri: response.uri.replace('file://', ''), isStatic: true}
        // }

        this.onChange(source);
      }
    });
  }
  // this is the only required method to implement
  getTemplate() {
    // define here your custom template
    return (locals) => {
      return (
      <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
        <View>
          {!locals.value
             ? <Text>
                  '选择照片'
               </Text>
             : <Image source={locals.value} />}
        </View>
      </TouchableOpacity>
      );
    };
  }

  // you can optionally override the default getLocals method
  // it will provide the locals param to your template
  getLocals() {
    // in locals you'll find the default locals:
    // - path
    // - error
    // - hasError
    // - label
    // - onChange
    // - stylesheet
    var locals = super.getLocals();

    // add here your custom locals

    return locals;
  }

}

// as example of transformer: this is the default transformer for textboxes
MyComponent.transformer = {
  format: value => Nil.is(value) ? null : value,
  parse: value => (t.String.is(value) && value.trim() === '') || Nil.is(value) ? null : value
};
