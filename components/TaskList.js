import React, { Component } from 'react';
import { SearchBar, List } from 'antd-mobile-rn';
import {
  StyleSheet,
  Image,
  View,
} from 'react-native';

const Item = List.Item;
export default class TaskList extends Component{  
    constructor(props){  
        super(props);  
    }  
    
    componentWillUnmount(){  
         
    } 

    render(){
      return (
      <View>
          <SearchBar
              placeholder="Search"
              showCancelButton
              onChange={() => {}}>
           </SearchBar>
           <List renderHeader={() => '最新任务'}>
              <Item
                thumb="http://oxe3sbdn1.bkt.clouddn.com/1.png "
                onClick={() => {}}
              >
                 非凡任务
              </Item>
              <Item
               thumb="http://oxe3sbdn1.bkt.clouddn.com/1.png "
                onClick={() => {}}
              >
               
                 狂暴巨兽
              </Item>
           </List>
      </View>
      );
    } 
} 
    