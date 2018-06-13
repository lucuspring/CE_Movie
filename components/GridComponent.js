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
 
//商品数据集合
var Goods = [
  {
    title: '空气净化器',
    url: 'http://img.muji.com.cn/img/item/4547315820665_400.jpg'
  },
  {
    title: '棉不均匀染色开衫',
    url: 'http://img.muji.com.cn/img/item/4549738656746_400.jpg'
  },
  {
    title: '硅胶球形制冰器',
    url: 'http://img.muji.com.cn/img/item/4549738306771_400.jpg'
  },
  {
    title: '组合柜',
    url: 'http://img.muji.com.cn/img/item/4549337263215_400.jpg'
  },
  {
    title: '牛奶巧克力',
    url: 'http://img.muji.com.cn/img/item/4549738664512_400.jpg'
  },
  {
    title: '棉法兰绒被套 ',
    url: 'http://img.muji.com.cn/img/item/4549738391210_400.jpg'
  }
]
 
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
   render() {
    let doit = this;

     var data = Goods;
     var list = [];
     for(var i in data){
       if(i % 3 === 0){
         var row = (
           <View key={i} style={styles.row}>
             <Item url={data[i].url}
               title={data[i].title}
               press={this.press.bind(this, data[i])}></Item>
             <Item
               url={data[parseInt(i)+1].url}
               title={data[parseInt(i)+1].title}
               press={this.press.bind(this,  data[parseInt(i)+1])}></Item>
           <Item
               url={data[parseInt(i)+2].url}
               title={data[parseInt(i)+2].title}
               press={this.press.bind(this,  data[parseInt(i)+2])}></Item>
           </View>);
         list.push(row);
       }
     }
 
     return (
       <ScrollView style={{marginTop:10}}>
         {list}
       </ScrollView>
     );
   }
 
   press(data) {
     alert("您选择了："+data.title);
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
 