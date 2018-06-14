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


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Huangbaojin
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         <Text style={styles.instructions}>
//           {instructions}
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
//   
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
                        title="趋势"  
                        selectedTitleStyle={{color:'#63B8FF'}}  
                        renderIcon={()=><Image style={styles.icon} source={require('./res/images/ic_me.png')} />}  
                        renderSelectedIcon={() =>  
                        <Image style={[styles.icon,{tintColor:'#63B8FF'}]} source={require('./res/images/ic_me.png')}/>}  
                        onPress={()=>this.setState({selectedTab:'trending'})}  
                    >   
                    </TabNavigator.Item>  
  
                    <TabNavigator.Item  
                        selected={this.state.selectedTab==='favorite'}  
                        title="收藏"  
                        selectedTitleStyle={{color:'#63B8FF'}}  
                        renderIcon={()=><Image style={styles.icon} source={require('./res/images/ic_me.png')} />}  
                        renderSelectedIcon={() =>  
                        <Image style={[styles.icon,{tintColor:'#63B8FF'}]} source={require('./res/images/ic_me.png')}/>}  
                        onPress={()=>this.setState({selectedTab:'favorite'})}  
                    >  
                         
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
                       
                    </TabNavigator.Item>  
                </TabNavigator>  
            </View>   
        )
            
    }
 
  
  
} 


