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
  Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator'
import TestComponent from './components/testComponent'
<<<<<<< HEAD
import TaskComponent from './components/TaskComponent'
import TaskDetail from './components/TaskDetail';

=======
import List from './components/GridComponent'
<<<<<<< HEAD
import PersonComponent from './components/PersonPage'
import Mine from './components/Mine'
import Login from './components/Login'
=======
>>>>>>> 0f13e0f38462a966489a1dfeb7530f67a7c57d74
>>>>>>> b80e8f29b2d6ee05e926178b439526ead234d049

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
export default class App extends Component{  
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
                        title="最热"  
                        selectedTitleStyle={{color:'#63B8FF'}}  
                        renderIcon={()=><Image style={styles.icon} source={require('./res/images/ic_me.png')}/>}
                        renderSelectedIcon={() =>  
                        <Image style={[styles.icon,{tintColor:'#63B8FF'}]} source={require('./res/images/ic_me.png')}/>}  
                        onPress={()=>this.setState({selectedTab:'pop'})}  
                    >   
                        <TestComponent/> 
                    </TabNavigator.Item>  
  
                    <TabNavigator.Item  
                        selected={this.state.selectedTab==='trending'}  
                        title="任务"  
                        selectedTitleStyle={{color:'#63B8FF'}}  
                        renderIcon={()=><Image style={styles.icon} source={require('./res/images/ic_me.png')} />}  
                        renderSelectedIcon={() =>  
                        <Image style={[styles.icon,{tintColor:'#63B8FF'}]} source={require('./res/images/ic_me.png')}/>}  
                        onPress={()=>this.setState({selectedTab:'trending'})}  
<<<<<<< HEAD
                        >
                       <PersonComponent/>   

                    </TabNavigator.Item>  
=======
                    >   
                    </TabNavigator.Item>
>>>>>>> b80e8f29b2d6ee05e926178b439526ead234d049
  
                    <TabNavigator.Item  
                        selected={this.state.selectedTab==='favorite'}  
                        title="收藏"  
                        selectedTitleStyle={{color:'#63B8FF'}}  
                        renderIcon={()=><Image style={styles.icon} source={require('./res/images/ic_me.png')} />}  
                        renderSelectedIcon={() =>  
                        <Image style={[styles.icon,{tintColor:'#63B8FF'}]} source={require('./res/images/ic_me.png')}/>}  
                        onPress={()=>this.setState({selectedTab:'favorite'})}  
                    >  
<<<<<<< HEAD
                         <Login/> 
=======
>>>>>>> b80e8f29b2d6ee05e926178b439526ead234d049
                    </TabNavigator.Item>  
  
                    <TabNavigator.Item  
                        selected={this.state.selectedTab==='my'}  
                        title="我的"  
                        selectedTitleStyle={{color:'#63B8FF'}}  
                        renderIcon={()=><Image style={styles.icon} source={require('./res/images/ic_me.png')} />}  
                        renderSelectedIcon={() =>  
                        <Image style={[styles.icon,{tintColor:'#63B8FF'}]} source={require('./res/images/ic_me.png')}/>}  
                        onPress={()=>this.setState({selectedTab:'my'})}  
                    >  
<<<<<<< HEAD
                       <Mine/> 
=======
>>>>>>> b80e8f29b2d6ee05e926178b439526ead234d049
                    </TabNavigator.Item>  
                </TabNavigator>  
            </View>   
        )
            
    }
 
  
  
} 


