import React, { Component } from 'react';
import { InputItem,Button,WingBlank,Flex,Tag, WhiteSpace,List } from 'antd-mobile-rn';
import {
  StyleSheet,
  Text,
  Image, 
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {get} from '../config/request';
export default class Detail extends Component{  
    constructor(props){  
        super(props);  
        this.state={
          scriptData:{},
          storyData:[],
        }
    }  
    
    componentWillMount(){  
         get('/scripts/outline/'+this.props.scriptId)
        .then((jsonData)=>{
            if (jsonData.meta && jsonData.meta.success) {
                this.setState({
                  scriptData:jsonData.data
                })
            }
          });

          get('/scripts/'+this.props.scriptId)
          .then((jsonData)=>{
              if (jsonData.meta && jsonData.meta.success) {
                  this.setState({
                    storyData:jsonData.data.stories 
                  })
              }
            });
    } 

    press(data){
      this.props.navigator.push({
        name:'SceneList',
        params: { 
          story:data,
        }   
      });
    }

    render(){
      const showList = this.state.storyData.length?
      this.state.storyData.map((item,index)=>(
        <View key={index} onClick={() => {}}>
          <TouchableOpacity onPress={this.press.bind(this,item)}>
             <Text style={{fontSize:20}} >{item.storyName}</Text> 
          </TouchableOpacity>
        </View>
      )):null;

      return (
        <ScrollView>
            <WhiteSpace size='sm'></WhiteSpace>
            <Flex direction='column'>
              <Image  style={{ flex:1,width:'50%',height:140 }} source={{uri:this.props.scriptImg}}></Image>
              <Text style={{fontSize:30}}>{this.state.scriptData.scriptName}</Text>   
             </Flex>
        {/* <Flex justify='start' style={{marginLeft:15,marginTop:5,height:'8%'}}> 
             <Tag style={{marginTop:2}} >创作团队</Tag>
             <Text style={{marginLeft:5,color:'#ff0000',fontSize:20}} >复仇者联盟</Text>
        </Flex> */}
        <WhiteSpace size='lg'></WhiteSpace>
        <Flex direction='column' align='start' style={{marginLeft:15}}> 
               <Tag>剧本大纲</Tag>
               <Text style={{paddingRight:5,marginLeft:5,fontSize:20}} >{this.state.scriptData.scriptIntro}</Text>
        </Flex>
        <WhiteSpace size='sm'></WhiteSpace>
        
        <WingBlank size='md'></WingBlank>
        <List renderHeader={() => '故事列表'}>
         {showList}
        </List>
      </ScrollView>
      );
    } 
} 