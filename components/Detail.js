import React, { Component } from 'react';
import { InputItem,Button,Flex,Tag, WhiteSpace } from 'antd-mobile-rn';
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
                alert("111");
                  this.setState({
                    storyData:jsonData.data.stories 
                  })
              }
            });
    } 

    press(data){
      this.props.navigator.push({
        name:'SceneDetail',
        params: { 
          scriptId:data.scriptId,
          scriptImg:data.scriptPicture,
        }   
      });
    }

    render(){
      const showList = this.state.storyData.length?
      this.state.storyData.map((item,index)=>(
        <View>
        <TouchableOpacity onPress={this.press.bind(this,item)}>
        <Text style={{fontSize:30}}>{item.storyName}</Text> 
          </TouchableOpacity>
        </View>
      )):null;

      return (
        <View>
        <Flex  direction='column' style={{height:'50%',marginTop:5}}>
             <Image  style={{ flex:1,width:'50%' }} source={{uri:this.props.scriptImg}}></Image>
             <Text style={{fontSize:30}}>{this.state.scriptData.scriptName}</Text>   
        </Flex> 
        {/* <Flex justify='start' style={{marginLeft:15,marginTop:5,height:'8%'}}> 
             <Tag style={{marginTop:2}} >创作团队</Tag>
             <Text style={{marginLeft:5,color:'#ff0000',fontSize:20}} >复仇者联盟</Text>
        </Flex> */}
        <Flex justify='start' align='start' style={{marginLeft:15,marginTop:5,height:'33%'}}> 
             <Tag style={{marginTop:2}}>剧本大纲</Tag>
             <ScrollView style={{width:'100%',marginBottom:5}}>
               <Text style={{paddingRight:5,marginLeft:5,fontSize:20}} >{this.state.scriptData.scriptIntro}</Text>
             </ScrollView>
        </Flex>

        
        
        <Button style={{width:'100%',height:'7%'}}> 故事列表</Button>
        <Flex style={{width:'80%',fontSize:20}}> 
        {showList}
        </Flex>
      </View>
      );
    } 
} 
    