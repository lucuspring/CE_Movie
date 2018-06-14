import React, { Component } from 'react';
import { InputItem,Button,Flex,Tag, WhiteSpace } from 'antd-mobile-rn';
import {
  StyleSheet,
  Text,
  Image, 
  View,
  ScrollView
} from 'react-native';

export default class Detail extends Component{  
    constructor(props){  
        super(props);  
    }  
    
    componentWillUnmount(){  
         
    } 

    render(){
      return (
    <View>
        <Flex  direction='column' style={{height:'50%',marginTop:5}}>
             <Image  style={{ flex:1,width:'50%' }} source={{uri:'http://206.189.170.143:8081/scriptImg/1e652f6f-2f64-24b1-9ed3-f63e6856b978.jpg'}}></Image>
             <Text style={{fontSize:30}}>超人</Text>   
        </Flex> 
        <Flex justify='start' style={{marginLeft:15,marginTop:5,height:'8%'}}> 
             <Tag style={{marginTop:2}} >创作团队</Tag>
             <Text style={{marginLeft:5,color:'#ff0000',fontSize:20}} >复仇者联盟</Text>
        </Flex>
        <Flex justify='start' align='start' style={{marginLeft:15,marginTop:5,height:'33%'}}> 
             <Tag style={{marginTop:2}}>剧本大纲</Tag>
             <ScrollView style={{width:'100%',marginBottom:5}}>
               <Text style={{paddingRight:5,marginLeft:5,fontSize:20}} >克拉克·肯特原名卡尔-艾尔（Kal-El），出生于氪星（Krypton）。在氪星面临毁灭之际，他的父母将尚在襁褓中的卡尔用飞船送到了地球。飞船坠落在美国堪萨斯州的斯莫维尔（Smallville），卡尔被农场主肯特夫妇拾获，并以克拉克·肯特（Clark Kent）的地球名字抚养长大。 成人后，克拉克来到大都会（Metropolis），成为《星球日报》 的一名记者。他有着与生俱来的超能力和极强的正义感与同情心，每在危难时刻，便穿上蓝色紧身衣，披上红色斗蓬，化身超人挺身而出，行侠仗义，拯救世人。</Text>
             </ScrollView>
        </Flex>
        
        <Button style={{width:'100%',height:'7%'}}> 故事列表</Button>
    </View> 
      );
    } 
} 
    