import React, { Component } from 'react';
import { SearchBar, List } from 'antd-mobile-rn';
import {
  Image,
  View,
  Text
} from 'react-native';
import {get} from '../config/request';
const Item = List.Item;
const Brief=Item.Brief;
const Circle = (props:any) => {
    const size = props.size || 40;
    var img = {
        uri: props.img,
      };
    const style = {
      borderRadius: size / 2,
      width: size,
      height: size,
    };
    return <View style={{paddingRight:10}}><Image style={style} source={img}></Image></View>;
  };

export default class MessageList extends Component{  
    constructor(props){  
        super(props);  
        this.state={
          messages:[]
        }
    }  
    
    componentDidMount(){  
      get("/messages")
      .then((jsonData) => {
          if (jsonData.meta && jsonData.meta.success) {
              this.setState({
                  messages: jsonData.data
              })
              //console.log(jsonData.data);
          }else{
              // message.warning(jsonData.meta.message);
          }
      });
    } 

    render(){
    //   var data =this.state.messages;
    //   var list1 = [];
    //   var list2= [];
    //   if(data.length>0){
    //     alert(data.length);
    //   for(var i in data){
        
    //     var item =( 
    //       <Item key={i} thumb={<Circle img={data[i].image}/>}
    //             multipleLine
    //             extra={data[i].fromWho}
    //             onClick={() => {}}>{}
    //             <Brief>{data[i].title}</Brief>
    //             </Item>);
    //      if(i % 2===0){//模拟已读和未读
    //         list1.push(item);
    //      }else{
    //         list2.push(item);
    //      }
    //   }
    // }
      
  // return (<Text>123</Text>);
    const showList = this.state.messages.length?
    this.state.messages.map((item,index)=>(
          <Item key={index} thumb={<Circle img={item.image}/>}
            multipleLine
            extra={item.fromWho}
            onClick={() => {}}>{}
            <Brief>{item.title}</Brief>
            </Item>
    )):null;
      return (
      <View>
          <SearchBar
              placeholder="Search"
              showCancelButton
              onChange={() => {}}>
           </SearchBar>
           <List renderHeader={() => '消息'}>
              {showList}
           </List>
      </View>
      );
     } 
} 
    