import React,{PropTypes} from 'react';
import {StyleSheet, View} from 'react-native';
import {GiftedForm, GiftedFormManager} from 'react-native-gifted-form';

import NavBar from '../../common/components/navbar';
import Alert from '../../common/components/alert';
import TextInputWidget from '../../common/components/form/widgets/TextInputWidget';
import ModalWidget from '../../common/components/form/widgets/ModalWidget';
import moment from 'moment';

const FormName = 'NurserInfoForm';

export default class NurserInfo extends React.Component {
  static propTypes= {
    nurserSaving: PropTypes.boolean,
    addNurser: PropTypes.func.isRequired,
    pushRoute: PropTypes.func.isRequired,
    popRoute: PropTypes.func.isRequired
  }
  static defaultProps = {
    nurserSavingSuccess: true,
    nurserSaving: false
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.nurserSaving && this.props.nurserSaving) {
      const {popRoute} = this.props;
      if (nextProps.nurserSavingSuccess) {
        this._alert.alert('保存成功','',[
                    {text: '确定',onPress: popRoute}
        ]);
      } else {
        this._alert.alert('保存失败','',[
                    {text: '确定',style: 'cancel'}
        ]);
      }
    }
  }
  add() {
    var entity = GiftedFormManager.getValues(FormName);
    console.log(entity);
    this.props.addNurser(entity);
  }
  render() {
    return (
      <View>
       <Alert ref={(view) => this._alert = view}/>
        <NavBar title='添加'
          rightButton='确定'
          onRightButtonClick={() => this.add()}
          onLeftButtonClick={() => this.props.popRoute()} />

        <View style={styles.container}>
           <GiftedForm
              formName={FormName}
              openModal={(route) => {
                this.props.pushRoute({
                  key: 'GiftedForm.ModalWidget',
                  title: '添加',
                  index: 0,
                  isNavigating: true,
                  router: route});
              }}
              clearOnClose={false}
              defaults={{
                username: 'Farid',
                'gender{M}': true,
                password: '',
                country: 'FR',
                birthday: new Date(((new Date()).getFullYear() - 18) + ''),
                address: '无',
                sex: '男'
              }} >
              <GiftedForm.SeparatorWidget />

              <TextInputWidget
                name='userName'
                title='用户名'
                clearButtonMode='while-editing' />
              <TextInputWidget
                name='password'
                title='密码'
                clearButtonMode='while-editing' />
              <TextInputWidget
                name='tel'
                title='手机号'
                clearButtonMode='while-editing' />

              <GiftedForm.SeparatorWidget />

              <TextInputWidget
                name='realName'
                title='姓名'
                clearButtonMode='while-editing' />
              <ModalWidget
                  title='性别'
                  displayValue='sex'>
                <GiftedForm.SeparatorWidget />
                <GiftedForm.SelectWidget name='sex' title='性别' multiple={false}>
                  <GiftedForm.OptionWidget title='男' value='man'/>
                  <GiftedForm.OptionWidget title='女' value='woman'/>
                </GiftedForm.SelectWidget>
              </ModalWidget>

              <ModalWidget
                  title='出生日期'
                  displayValue='birthday'
                  scrollEnabled={false} >
                  <GiftedForm.SeparatorWidget/>
                  <GiftedForm.DatePickerIOSWidget
                    name='birthday'
                    mode='date'
                    getDefaultDate={() => {
                      return new Date(((new Date()).getFullYear() - 18) + '');
                    }} />
               </ModalWidget>

               <ModalWidget
                  title='家庭地址'
                  displayValue='address'
                  onValueFormat={(value) => !value ? '空' : '详情' }
                  scrollEnabled={true} >
                  <GiftedForm.SeparatorWidget/>
                  <GiftedForm.TextAreaWidget
                    name='address'
                    autoFocus={true}
                    placeholder='Something interesting about yourself' />
                </ModalWidget>

                <ModalWidget
                  title='资历简介'
                  displayValue='introduction'
                  onValueFormat={(value) => !value ? '空' : '详情' }
                  scrollEnabled={true} >
                  <GiftedForm.SeparatorWidget/>
                  <GiftedForm.TextAreaWidget
                    name='introduction'
                    autoFocus={true} />
                </ModalWidget>
          </GiftedForm>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});
