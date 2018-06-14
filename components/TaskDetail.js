import React from 'react';
import {Image, Text, View} from 'react-native'
import { Button, WhiteSpace, WingBlank, NoticeBar, Result } from 'antd-mobile-rn';
import {get} from '../config/request';
const styles = require('../res/styles/style');
export default class TaskDetail extends React.Component<any, any>{

    constructor(props){  
        super(props);  
        this.state={
          task:{},
        }
    }  

    press(){
        this.props.navigator.pop();
        }


    render(){
        return(
        <View style = {{marginTop: 10}}>
            <Text style={{ margin: 10, color: '#999' }}>任务详情</Text>
            <View style={{alignItems:'center'}}>
                <Image style={styles.avatar} source={{uri:this.props.taskImg}} />

                <Text style={{margin:10,fontSize:30}}>{this.props.taskTitle}</Text>
                <Text style={{margin:20}}>{this.props.taskIdea}</Text>
            </View>

            {/* <Result
            imgUrl={{
                uri:this.props.taskImg,
            }}
            title={this.props.taskTitle}
            message={this.props.taskIdea}
            /> */}

            <NoticeBar mode="link">任务酬劳:{this.props.taskMoney}
            </NoticeBar>
            <NoticeBar mode="link" action={<Text>去看看</Text>}>
            任务截止日期：{this.props.taskDeadline}
            </NoticeBar>
            
            <WingBlank style = {{marginTop: 20}}>
                <Button type="primary">申请任务</Button>
                <WhiteSpace />
                <Button onButtonClick={this.press.bind()}>返回</Button>
                <WhiteSpace />
            </WingBlank>
        </View>
        );
    }
}
    
