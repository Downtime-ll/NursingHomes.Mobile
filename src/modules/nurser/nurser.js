import * as NavigationState from '../../common/navigation/actions';
import React,{PropTypes} from 'react';
import {TouchableOpacity, Text, View,TouchableHighlight,ListView,RefreshControl,Animated} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './stylesheet';
import NavBar from '../../common/components/navbar';
import Loading from '../../common/components/loading';
import Alert from '../../common/components/alert';
import Swipeout from 'react-native-swipeout';

export default class NurserList extends React.Component {
  static propTypes= {
    nurserFetching: PropTypes.bool.isRequired,
    fetchNursers: PropTypes.func.isRequired,
    deleteNurser: PropTypes.func.isRequired,
    pushRoute: PropTypes.func.isRequired
  }
  static defaultProps = {
    nurserFetching: true,
    nurserFetchingSuccess: true
  }
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
        sectionHeaderHasChanged: (s1, s2) => s1 !== s2
      }),
      refreshing: false,
      searchBarActive: false,
      modalActive: false
    };
  }

  componentDidMount() {
    this.props.fetchNursers();
  }
  componentWillReceiveProps(nextProps) {
    if (!nextProps.nurserFetching && nextProps.nurserFetchingSuccess) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.datas)
      });
    }
  }
  addHandle() {
    this.props.pushRoute({
      key: 'NurserInfo',
      title: '添加',
      index: 0,
      isNavigating: true});
  }
  handleRefresh() {
    this.props.fetchNursers('',1,10,{caching: false});
  }
  handleDel(id) {
    this._alert.alert('是否删除？','',[
                    {text: '确定',onPress: () => this.props.deleteNurser(id)},
                    {text: '取消',type: 'cancel'}
    ]);
  }
  renderRow(item) {
    var swipeoutBtns = [
      {
        text: '删除',
        backgroundColor: 'red',
        disabled: false,
        onPress: () => this.handleDel(item.id)
      }
    ];

    return (
      <Swipeout right={swipeoutBtns} close={true}>
        <TouchableOpacity >
          <Animated.View style={styles.nurserRow}>
            <View style={styles.nurserBreif}>
              <Icon name='user' size={35} color='#900' style={styles.nurserImage} />
              <Text>{item.realName}</Text>
            </View>
          </Animated.View>
        </TouchableOpacity>
      </Swipeout>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <NavBar title='护工列表'
          rightButton='添加'
          leftButton=' '
          onRightButtonClick={() => this.addHandle()} />
          {this.props.nurserFetching
                    ? <Loading />
                    : (<ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow.bind(this)}
                        enableEmptySections={true}
                        removeClippedSubviews={true}
                        onEndReachedThreshold={20}
                        initialListSize={1}
                        refreshControl={<RefreshControl
                                            refreshing={this.state.refreshing}
                                            title='加载中...'
                                            onRefresh={this.handleRefresh.bind(this)}/>
                                        }
                        />
                    )}
            <Alert ref={(view) => { this._alert = view;}}/>
      </View>
    );
  }
}
