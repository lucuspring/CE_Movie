import React, { Component } from 'react';
import moment from 'moment'; 
import { SearchBar, List,Card, WhiteSpace, WingBlank } from 'antd-mobile-rn';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity
} from 'react-native';
import {get} from '../config/request'
const Item = List.Item;
export default class TaskList extends Component{  
    constructor(props){  
        super(props); 
        this.state={
          taskList:[],
        } 
    }  
    
    componentWillMount(){  
         get('/assignments')
         .then((jsonData) => {
          if (jsonData.meta && jsonData.meta.success) {
              this.setState({
                taskList: jsonData.data
              })
          }
      });
         
    } 

    press=(data)=>{
      this.props.navigator.push({
        name:'TaskDetail',
        params: { 
          taskTitle:data.title,
           taskImg:data.image,
           taskIdea:data.idea,
          taskMoney:data.money,
          taskDeadline:data.deadline,
        }   
      }); 
      }

    render(){
      const showList = this.state.taskList.length?
      this.state.taskList.map((item,index)=>(
        <WingBlank key={index} size="lg">
        <TouchableOpacity onPress={this.press.bind(this,item)}>
          <Card>
              <Card.Header
              title={item.title}
              extra={moment(item.deadline).format("YYYY-MM-DD")}
              thumbStyle={{ width: 100, height: 100,borderRadius:8 }}
              thumb={item.image}
              />
              <Card.Body>
              <View style={{ height: 60 }}>
                  <Text style={{ paddingLeft: 10,paddingRight: 10}}>{item.idea}</Text>
              </View>
              </Card.Body>
              <Card.Footer extra="详情->"/>
          </Card>
          </TouchableOpacity>
        </WingBlank>
      )):null;
      return (
      <View>
          <WingBlank size="md">
          <SearchBar
              placeholder="Search"
              showCancelButton
              onChange={() => {}}>
           </SearchBar>
           </WingBlank>
           <View>
                {showList}
            </View>
      </View>
      );
    } 
} 
    