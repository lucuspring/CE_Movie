import React, { Component } from 'react';
import { Flex, List } from 'antd-mobile-rn';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {get} from '../config/request';


//单元格组件
class Item extends Component {
    render() {
      return (//brief为职务 title为团队名
        <Flex  onPress={this.props.press} direction='column' style={styles.item}>
              {/* //  <TouchableOpacity onClick={this.props.press} style={styles.item}>  */}
                
                 <Image source={{uri:this.props.url}} style={{height:120,width:'90%'}} ></Image>
                 <Text numberOfLines={1} >{this.props.title}</Text>
                 <Text numberOfLines={1} >{this.props.brief}</Text>
                
              {/* //  </TouchableOpacity>   */}
        </Flex>
        
      );
    }
 }
  
export default class MyTeam extends Component{  
  constructor(){
    super();
    this.state={
      scriptData:[]
    }
  }

  componentDidMount(){
    get('/scripts/mys')
       .then((jsonData)=> {
         this.setState({
            
           scriptData:jsonData.data,
        })
       });
   }

   press(data){
    this.props.navigator.push({
      name:'Detail',
      params: { 
        scriptId:data.scriptId,
        scriptImg:data.scriptPicture,
      }   
    });
  }

   render() {
     var data =this.state.scriptData;
     var list = [];

     for(var i in data){
       var item=(
            <Item 
               key={i}
               url={data[i].scriptPicture}
               press={this.press.bind(this,data[i])}
               title={data[i].scriptName}
               ></Item>
       );
       list.push(item);
     }
     return (
         <ScrollView style={{marginTop:20}}>
           <Flex wrap='wrap'>
              {list}
           </Flex>   
         </ScrollView>
     );
   }
} 


//样式定义
const styles = StyleSheet.create({

    item:{  
    borderWidth:1,
    borderColor:'#ddd',
    margin:5, 
    width:'30%',
  },
});