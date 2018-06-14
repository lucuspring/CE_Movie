/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import Navigator from 'react-native-deprecated-custom-components';
import TabNavigator from 'react-native-tab-navigator';
import TestComponent from './testComponent';
import TaskComponent from './TaskComponent';
import TaskDetail from './TaskDetail';

import List from './GridComponent';
import PersonComponent from './PersonPage';
import Mine from './Mine';
import Login from './Login';
import TaskList from './TaskList';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};

const styles=StyleSheet.create({  
    container:{  
        flex:1  
    },  
    icon:{  
        width:26,  
        height:26  
    }  
});  
export default class Index extends Component{  
    constructor(props){  
        super(props);  
        this.state={  
          selectedTab:'pop', //默认选中的选项卡  
        };  
    }  

    componentWillUnmount(){  
        this.listener.remove();  
        
    } 

    render(){
      return (
        <View style={styles.container}>  
                <TabNavigator>  
                    <TabNavigator.Item  
                        selected={this.state.selectedTab==='pop'}  
                        title="剧本"  
                        selectedTitleStyle={{color:'#63B8FF'}}  
                        renderIcon={()=><Image style={styles.icon} source={require('../res/images/ic_me.png')}/>}
                        renderSelectedIcon={() =>  
                        <Image style={[styles.icon,{tintColor:'#63B8FF'}]} source={require('../res/images/ic_me.png')}/>}  
                        onPress={()=>this.setState({selectedTab:'pop'})}  
                    >   
                        <TestComponent navigator={this.props.navigator}/> 
                    </TabNavigator.Item>  
  
                    <TabNavigator.Item  
                        selected={this.state.selectedTab==='trending'}  
                        title="任务"  
                        selectedTitleStyle={{color:'#63B8FF'}}  
                        renderIcon={()=><Image style={styles.icon} source={require('../res/images/ic_me.png')} />}  
                        renderSelectedIcon={() =>  
                        <Image style={[styles.icon,{tintColor:'#63B8FF'}]} source={require('../res/images/ic_me.png')}/>}  
                        onPress={()=>this.setState({selectedTab:'trending'})}  
                        >
                        <ScrollView>
                       <TaskList navigator={this.props.navigator}/>   
                       </ScrollView>

                    </TabNavigator.Item>  
 
  
                    <TabNavigator.Item  
                        selected={this.state.selectedTab==='my'}  
                        title="我的"  
                        selectedTitleStyle={{color:'#63B8FF'}}  
                        renderIcon={()=><Image style={styles.icon} source={require('../res/images/ic_me.png')} />}  
                        renderSelectedIcon={() =>  
                        <Image style={[styles.icon,{tintColor:'#63B8FF'}]} source={require('../res/images/ic_me.png')}/>}  
                        onPress={()=>this.setState({selectedTab:'my'})}  
                    >  
                       <Mine navigator={this.props.navigator}/> 
                    </TabNavigator.Item>  
                </TabNavigator>  
            </View>   
        )
            
    }
 
  
  
} 


