import React from 'react';
import {Image, Text, View} from 'react-native'
import { Button, WhiteSpace, WingBlank, NoticeBar, Result } from 'antd-mobile-rn';

export default class TaskDetail extends React.Component{
    render(){
        return(
        <View style = {{marginTop: 10}}>
            <Text style={{ margin: 10, color: '#999' }}>任务详情</Text>
            <Result
            imgUrl={{
                uri:
                'https://zos.alipayobjects.com/rmsportal/GcBguhrOdlYvGfnsXgrE.png',
            }}
            title="支付宝宝的诞生"
            message="&nbsp;&nbsp;传说这是一个神奇的故事，时间要追溯到50年前，那时人们交流还在通过电路交换，支付方式还是传统现金.."
            />

            <NoticeBar mode="link">任务酬劳：1000000£
            </NoticeBar>
            <NoticeBar mode="link" action={<Text>去看看</Text>}>
            任务截止日期：2018-05-01
            </NoticeBar>
            
            <WingBlank style = {{marginTop: 20}}>
                <Button type="primary">申请任务</Button>
                <WhiteSpace />
                <Button>返回</Button>
                <WhiteSpace />
            </WingBlank>
        </View>
        );
    }
}
    
