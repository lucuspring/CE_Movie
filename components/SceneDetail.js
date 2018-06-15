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
    

    render(){
      var data =this.state.scriptData;
      var list = [];
      for(var i in data){
        
        var n =( 
          <Item key={i}
                explain={data[i].scriptId}
                role={data[i].scriptId}
                lines={data[i].scriptName}
                action={data[i].scriptName}/>
               
          );
           list.push(n);
      }
      return (
      <View>
           <Flex direction='column'>
               <WhiteSpace size='md'></WhiteSpace>
               <Text style={{fontSize:25}}>场景1</Text>
               <WhiteSpace size='md'></WhiteSpace>
               <Text style={{fontSize:20}}>地点：升升公寓</Text>
               <WhiteSpace size='md'></WhiteSpace>
               <Text style={{fontSize:20}}>时间：2018-06-14</Text>
               <WhiteSpace size='lg'></WhiteSpace>
           </Flex>
           <ScrollView>
              {list}
           </ScrollView>
      </View>
      );
    } 
} 
    