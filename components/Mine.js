import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Tabs } from 'antd-mobile-rn';
import MyPic from './faceComponent';
import { WhiteSpace, WingBlank } from 'antd-mobile-rn';
import List from './GridComponent'
import Detail from './Detail'
import TaskList from './TaskList'
import MessageList from './MessageList'
import MyTeam from './MyTeam'
import MyScript from './MyScript'

export default class Mine extends React.Component {
  render() {
    const tabs = [
      { title: '我的团队' },
      { title: '我的剧本' },
      { title: '我的消息' },
    ];
  
    const style = {
      alignItems: 'center',
      justifyContent: 'center',
      height: 150,
      backgroundColor: '#fff',
    } ;
    return (
      <ScrollView>
      <MyPic/>
      <View style={{ flex: 1 }}>
        <Tabs tabs={tabs} initialPage={1}>
          <View>
            <MyTeam/>
          </View>
          <View >
            <MyScript navigator={this.props.navigator}/>
          </View>
          <View>
            <MessageList/>
          </View>
        </Tabs>
      </View>
  </ScrollView>
    
    );
  }
}
