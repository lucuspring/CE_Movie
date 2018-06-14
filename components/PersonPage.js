import React from 'react';
import { Image, ScrollView, View,Text,TouchableOpacity } from 'react-native';
import { List } from 'antd-mobile-rn';
import MyPic from './faceComponent';

const styles = require('../res/styles/style');

const Item = List.Item;
const Brief = Item.Brief;

export default class PersonComponent extends React.Component {
  constructor(){
    super();
    this.state={
      userToken:'',
      userName:''
    }
  }


  render() {

    return (
          <ScrollView
        style={{ flex: 1, backgroundColor: '#f5f5f9' }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >

        <List renderHeader={() => ''}>
         
         <MyPic/>

          <Item disabled extra={this.state.userToken} arrow="horizontal" onClick={() => {}}>
            性别
          </Item>
          <Item disabled extra="湖北武汉" arrow="horizontal" onClick={() => {}}>
            地址
          </Item>
          <Item disabled extra="1204510135@qq.com" arrow="horizontal" onClick={() => {}}>
            邮箱
          </Item>
        </List>
       </ScrollView>
    );
  }
}

