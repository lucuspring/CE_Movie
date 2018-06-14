 import React from 'react';
import { Image, ScrollView, View,Text,TouchableOpacity } from 'react-native';
import { List } from 'antd-mobile-rn';
const styles = require('../res/styles/style');


export default class MyPic extends React.Component<any, any> {
  render() {
    return (
         
         <View style={styles.header}>
        <View style={styles.headerBgWrapper}>
          <Image style={styles.headerBgImg} source={require('../res/images/bgp.png')} />
        </View>
        <View>
          <View style={{alignItems:'center'}}>
            <Image style={styles.avatar} source={{uri:'http://206.189.170.143:8081/scriptImg/1e652f6f-2f64-24b1-9ed3-f63e6856b978.jpg'}} />
          </View>
          <Text style={{marginTop: 10, fontSize:20, color:'white', textAlign: 'center'}}>黄宝金</Text>
        </View>
      </View>
    );
  }
}