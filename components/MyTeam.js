import React, { Component } from 'react';
import { Flex, List } from 'antd-mobile-rn';
import {get} from '../config/request';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';


//单元格组件
class Item extends Component {
    render() {
      return (//brief为职务 title为团队名
        <Flex direction='column' style={styles.item}>
              <Image source={{uri:this.props.url}} style={{height:120,width:'90%',marginTop:5}}></Image>
              <Text numberOfLines={1} >{this.props.title}</Text>
              <Text numberOfLines={1} >{this.props.brief}</Text>
        </Flex>
        
      );
    }
 }
  
export default class MyTeam extends Component{  
  constructor(){
    super();
    this.state={
      team:[]
    }
  }

  componentWillMount(){
    get('/enrollments/mys',this.props.history).then((jsonData) => {
        //console.log(jsonData)
        if (jsonData.meta && jsonData.meta.success) {
            this.setState({
                team:jsonData.data
            })
        } else {
            //message.error(jsonData.meta.message);
        }
    });
}


   render() {
     var data =this.state.team;
     var list = [];
     //let tail= data.length- data.length % 3;
     for(var i in data ){
       if(i % 1 === 0){
         var row = (
           <Flex key={i} style={styles.row} justify='around'>
             <Item 
               url={data[i].teamImg}
               title={data[i].teamName}
              //  brief={data[i].teamId}
               ></Item>
             {/* <Item
               url={data[parseInt(i)+1].teamImg}
               title={data[parseInt(i)+1].teamName}
               brief={data[parseInt(i)+1].teamId}
              ></Item>
           <Item
               url={data[parseInt(i)+2].teamImg}
               title={data[parseInt(i)+2].teamName}
               brief={data[parseInt(i)+2].teamId}
              ></Item> */}
           </Flex>);
         list.push(row);
       }
       
     }
 
     return (
         <ScrollView style={{marginTop:20}}>
           {list}
         </ScrollView>
     );
   }
} 

const styles = StyleSheet.create({
  
  row:{ 
    marginBottom: 10,
  },
  item:{  
    borderWidth:1,
    borderColor:'#ddd',
    margin:5, 
    width:'30%',
  },

});