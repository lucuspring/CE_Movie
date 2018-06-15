import React, { Component } from 'react';
import {  List,Flex,Tag,WingBlank, WhiteSpace} from 'antd-mobile-rn';
import {
  Text,
  View,
  ScrollView
} from 'react-native';

/*const Item = (props:any) => {
    return (
        <View style={{borderBlockEnd:2}}>
            <Flex>
                <Tag >说明</Tag>
                <WingBlank size='md'></WingBlank>
                <Text>{this.props.explain}</Text>
            </Flex>
            <WhiteSpace size='md'></WhiteSpace>
            <Flex>
                <Tag >角色</Tag>
                <WingBlank size='md'></WingBlank>
                <Text>{this.props.role}</Text>
            </Flex>
            <WhiteSpace size='md'></WhiteSpace>
            <Flex>
                <Tag >台词</Tag>
                <WingBlank size='md'></WingBlank>
                <Text>{this.props.lines}</Text>
            </Flex>
            <WhiteSpace size='md'></WhiteSpace>
            <Flex>
                <Tag >动作</Tag>
                <WingBlank size='md'></WingBlank>
                <Text>{this.props.action}</Text>
            </Flex>
            <WhiteSpace size='md'></WhiteSpace>
        </View>
    );
};*/
class Item extends Component{  
  render(){
      return (
          <View style={{borderBottomWidth:1}}>
              <WhiteSpace size='md'></WhiteSpace>
              <Flex>
                  <Tag >说明</Tag>
                  <WingBlank size='md'></WingBlank>
                  <Text>{this.props.explain}</Text>
              </Flex>
              <WhiteSpace size='md'></WhiteSpace>
              <Flex>
                  <Tag >角色</Tag>
                  <WingBlank size='md'></WingBlank>
                  <Text>{this.props.role}</Text>
              </Flex>
              <WhiteSpace size='md'></WhiteSpace>
              <Flex>
                  <Tag >台词</Tag>
                  <WingBlank size='md'></WingBlank>
                  <Text>{this.props.lines}</Text>
              </Flex>
              <WhiteSpace size='md'></WhiteSpace>
              <Flex>
                  <Tag >动作</Tag>
                  <WingBlank size='md'></WingBlank>
                  <Text>{this.props.action}</Text>
              </Flex>
              <WhiteSpace size='md'></WhiteSpace>
          </View>
      );
  }
}
export default class SceneDetail extends Component{  
    constructor(props){  
        super(props);  
        this.state={
          data:this.props.scene.sceneDetails,
        }

    }  


    render(){
      var data =this.state.data;
      var list = [];
      character={
          characterName:'',
      };
      for(var i in data){
          if(data[i].character==null){
              data[i].character=character;
          }
      }

      for(var i in data){
        
        var n =( 
          <Item key={i}
                explain={data[i].dialogue}
                role={data[i].character.characterName}
                lines={data[i].speakAside}
                action={data[i].action}/>
               
          );
           list.push(n);
      }
      return (
      <View>
            <ScrollView>
           <Flex direction='column'>
               <WhiteSpace size='md'></WhiteSpace>
               <Text style={{fontSize:25}}>场景:{this.props.scene.title}</Text>
               <WhiteSpace size='md'></WhiteSpace>
               <Text style={{fontSize:20}}>地点：{this.props.scene.place}</Text>
               <WhiteSpace size='md'></WhiteSpace>
               <Text style={{fontSize:20}}>时间：{this.props.scene.sceneTime}</Text>
               <WhiteSpace size='lg'></WhiteSpace>
           </Flex>        
              {list}
           </ScrollView>
      </View>
      );
    } 
} 
    