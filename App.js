/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
 import {
   AppRegistry,
   StyleSheet,
   BackAndroid,
   Platform,
 } from 'react-native';

 import { Navigator } from 'react-native-deprecated-custom-components';
 import TestComponent from './components/testComponent';
 import Login from './components/Login';
 import Index from './components/Index';
 import Detail from './components/Detail';
 import TaskDetail from './components/TaskDetail';
 
 export default class NV extends Component {
   //组件初始渲染执行完毕后调用
   componentDidMount() {
     //如果当前是Android系统，则添加back键按下事件监听
     if(Platform.OS === "android") {
       BackAndroid.addEventListener('hardwareBackPress', ()=>{
         return this.handleBackAndroid(this.navigator);
       });
     }
   }
 
   //组件被卸载前会执行
   componentWillUnmount() {
     //如果当前是Android系统，则移除back键按下事件监听
     if(Platform.OS === "android") {
       BackAndroid.removeEventListener('hardwareBackPress', ()=>{});
     }
   }
 
   //back键按下事件响应
   handleBackAndroid(navigator) {
     //如果存在上一页则后退
     if(navigator.getCurrentRoutes().length > 1) {
       navigator.pop();
       return true; //接管默认行为
     }
     return false;  //使用默认行为（直接退出应用）
   }
 
   render() {
     return(
       <Navigator
         style = {{flex:1}}
         initialRoute={{name: 'Login'}}
         configureScene={this.configureScene.bind(this)}
         renderScene={this.renderScene.bind(this)}
       />
     );
   }
 
   //返回视图转换时使用的效果
   configureScene(route) {
     return Navigator.SceneConfigs.FadeAndroid;
   }
 
   //该函数用来告知Navigator模块我们希望如何挂接当前的视图
   renderScene(route, navigator) {
     this.navigator = navigator; //NV组件的navigator变量赋值
     switch(route.name) {
       case "Login":
         return <Login navigator={navigator} />
       case "Index":
         return <Index navigator={navigator} />
      case "Detail":
         return <Detail {...route.params} navigator={navigator} />
      case "TaskDetail":
         return <TaskDetail {...route.params} navigator={navigator} />
     }
   }
 }
 
 const styles = StyleSheet.create({
   flex:{
     flex: 1,
   },
 });
 


