import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
 import {get} from '../config/request';
 
//单元格组件
class Item extends Component {
   render() {
     return (
       <View style={styles.item}>
         <TouchableOpacity onPress={this.props.press}>
           <ImageBackground resizeMode="contain" style={styles.img}
             source={{uri:this.props.url}}>
               <Text numberOfLines={1} style={styles.item_text}>{this.props.title}</Text>
           </ImageBackground>
         </TouchableOpacity>
       </View>
     );
   }
}
 
//列表组件
export default class List extends Component {

constructor(){
    super();
    this.state={
      scriptData:[]
    }
  }

componentDidMount(){
    get('/scripts/preference')
       .then((jsonData)=> {
         this.setState({
           scriptData:jsonData.data,
        })
       });
   }


   render() {
     var data =this.state.scriptData;
     var list = [];
     for(var i in data){
       if(i % 3 === 0){
         var row = (
           <View key={i} style={styles.row}>
             <Item url={data[i].scriptPicture}
               title={data[i].scriptName}
               press={this.press.bind(this, data[i])}></Item>
             <Item
               url={data[parseInt(i)+1].scriptPicture}
               title={data[parseInt(i)+1].scriptName}
               press={this.press.bind(this,  data[parseInt(i)+1])}></Item>
           <Item
               url={data[parseInt(i)+2].scriptPicture}
               title={data[parseInt(i)+2].scriptName}
               press={this.press.bind(this,  data[parseInt(i)+2])}></Item>
           </View>);
         list.push(row);
       }
     }
 
     return (
       <ScrollView style={{marginTop:20}}>
         {list}
       </ScrollView>
     );
   }
 
   press(data) {
     alert("您选择了："+data.scriptName);
   }
}
 
//主应用
class Main extends Component {
   render() {
     return (
       <View style={styles.flex,{marginTop:20}}>
         <List goods={Goods}></List>
       </View>
     );
   }
 }
 
//样式定义
const styles = StyleSheet.create({
  flex:{
     flex:1
  },
  row:{
    flexDirection: 'row',
    marginBottom: 10,
  },
  item:{
    flex:1,
    marginLeft:5,
    borderWidth:1,
    borderColor:'#ddd',
    marginRight:5,
    height:140,
  },
  img:{
    //flex:1,
    backgroundColor: 'transparent'
  },
  item_text:{
    backgroundColor: '#000',
    opacity: 0.7,
    color:'#fff',
    height:25,
    lineHeight:18,
    textAlign:'center',
    marginTop:114
  }
});
 