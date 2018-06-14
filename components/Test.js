import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
 
export default class List extends Component {
  render() {
    return (
      <ScrollView style={styles.flex}>
        <View style={styles.list_item}>
          <Text style={styles.list_item_font} onPress={this.goTo.bind(this)}>
            Swift - 滑块（UISlider）的用法
          </Text>
        </View>
        <View style={styles.list_item}>
          <Text style={styles.list_item_font} onPress={this.goTo.bind(this)}>
            Swift - 告警框（UIAlertView）的用法
          </Text>
        </View>
        <View style={styles.list_item}>
          <Text style={styles.list_item_font} onPress={this.goTo.bind(this)}>
            Swift - 选择框（UIPickerView）的用法
          </Text>
        </View>
      </ScrollView>
    );
  }
 
  goTo(){
    //push函数调用后，Navigator组件的renderScene函数将被调用，
    //并且push函数传入的变量成为renderScene函数的第一个参数。
    this.props.navigator.push({
      name:'detail'
    });
  }
}
 
const styles = StyleSheet.create({
  flex:{
    flex: 1,
  },
  list_item:{
    height:40,
    marginLeft:10,
    marginRight:10,
    borderBottomWidth:1,
    borderBottomColor: '#ddd',
    justifyContent: 'center'
  },
  list_item_font:{
    fontSize:16
  },
});