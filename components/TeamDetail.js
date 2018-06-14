import React, { Component } from 'react';
import { Flex, Button,List ,WhiteSpace } from 'antd-mobile-rn';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';



const Item=List.Item;
export default class TeamDetail extends Component{  
  constructor(){
    super();
    this.state={
      scriptData:[]
    }
  }

componentDidMount(){
  fetch('http://206.189.170.143:8081/scripts/preference')
  .then((res)=>res.json())
  .then((json)=>{
    this.setState({
      scriptData:json.data
    })
 
  });
   }


   render() {
    var data =this.state.scriptData;
      var list = [];
      for(var i in data){
        
        var item =( 
          <Item key={i}
                thumb={data[i].scriptPicture}
                arrow='horizontal'
                onClick={() => {}}>
                {data[i].scriptName}
          </Item>
          );
           list.push(item);
      }
 
     return (
         <Flex direction='column' justify='center' style={{height:'100%'}}>
            <WhiteSpace size="sm" />
            <Image source={require('../res/images/superman.png')} style={styles.img}></Image>
            <WhiteSpace size="lg" />
            <Text>XXX团队</Text>
            <WhiteSpace size="sm" />
            <Text style={{color:'#ff0000'}}>负责人：yyy</Text>
            <WhiteSpace size="xl" />
            <ScrollView style={styles.introduce}>
                <Text>克拉克·肯特原名卡尔-艾尔（Kal-El），出生于氪星（Krypton）。在氪星面临毁灭之际，他的父母将尚在襁褓中的卡尔用飞船送到了地球。飞船坠落在美国堪萨斯州的斯莫维尔（Smallville），卡尔被农场主肯特夫妇拾获，并以克拉克·肯特（Clark Kent）的地球名字抚养长大。 成人后，克拉克来到大都会（Metropolis），成为《星球日报》 的一名记者。他有着与生俱来的超能力和极强的正义感与同情心，每在危难时刻，便穿上蓝色紧身衣，披上红色斗蓬，化身超人挺身而出，行侠仗义，拯救世人。
克拉克·肯特原名卡尔-艾尔（Kal-El），出生于氪星（Krypton）。在氪星面临毁灭之际，他的父母将尚在襁褓中的卡尔用飞船送到了地球。飞船坠落在美国堪萨斯州的斯莫维尔（Smallville），卡尔被农场主肯特夫妇拾获，并以克拉克·肯特（Clark Kent）的地球名字抚养长大。 成人后，克拉克来到大都会（Metropolis），成为《星球日报》 的一名记者。他有着与生俱来的超能力和极强的正义感与同情心，每在危难时刻，便穿上蓝色紧身衣，披上红色斗蓬，化身超人挺身而出，行侠仗义，拯救世人。</Text>
                <WhiteSpace size="sm" />
                <List renderHeader={() => '团队成员'}>
                    {list}
               </List>
            </ScrollView>
            <WhiteSpace size="sm" />
            
            <Button type='primary' style={{width:'100%'}}>申请加入</Button>
         </Flex>
         
     );
   }
} 

const styles = StyleSheet.create({
  img:{
    height:'28%',
    width:'50%'
  },
  introduce:{
    flex:1,
    padding:10
  },
  
});