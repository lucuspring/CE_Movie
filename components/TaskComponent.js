import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Card, WhiteSpace, WingBlank } from 'antd-mobile-rn';

export default class TaskComponent extends React.Component<any,any>{
  render() {
    return (
        <ScrollView style={{ flex: 1 }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
            <View style={{ paddingTop: 30 }}>
                <WingBlank size="lg">
                <Card>
                    <Card.Header
                    title="东方快车谋杀案"
                    thumbStyle={{ width: 80, height: 80 }}
                    thumb="http://oei91bbtj.bkt.clouddn.com/%E4%B8%9C%E6%96%B9%E5%BF%AB%E8%BD%A6%E8%B0%8B%E6%9D%80%E6%A1%88.jpg"
                    />
                    <Card.Body>
                    <View style={{ height: 60 }}>
                        <Text style={{ marginLeft: 16 }}>1934年出版的小说《东方快车谋杀案》描写了发生在著名的“东方快车”上一起离奇命案，每个人都有作案的嫌疑，比利时大侦探波洛（Hercule Poirot）经过缜密的、抽丝剥茧的逻辑分析，终于让案情大白于天下。 </Text>
                    </View>
                    </Card.Body>
                    <Card.Footer extra="详情->"/>
                </Card>
                </WingBlank>

                <WingBlank size="lg" style={{paddingTop: 16}}>
                <Card>
                    <Card.Header
                    title="巴霍巴利王 2"
                    thumbStyle={{ width: 80, height: 80 }}
                    thumb="http://oei91bbtj.bkt.clouddn.com/%E5%B7%B4%E9%9C%8D%E5%B7%B4%E5%88%A9%E7%8E%8B2.jpg"
                    />
                    <Card.Body>
                    <View style={{ height: 50 }}>
                        <Text style={{ marginLeft: 16 }}>巴霍巴利经过一个叫昆达拉的诸侯小国时，偶遇美丽绝伦、剑术高超的提婆犀那公主（安努舒卡·谢蒂饰），立刻惊为天人，无以自拔 </Text>
                    </View>
                    </Card.Body>
                    <Card.Footer extra="详情->" />
                </Card>
                </WingBlank>

                <WingBlank size="lg" style={{paddingTop: 16}}>
                <Card>
                    <Card.Header
                    title="红海行动"
                    thumbStyle={{ width: 80, height: 80 }}
                    thumb="http://oei91bbtj.bkt.clouddn.com/%E7%BA%A2%E6%B5%B7%E8%A1%8C%E5%8A%A8.jpg"
                    />
                    <Card.Body>
                    <View style={{ height: 50 }}>
                        <Text style={{ marginLeft: 16 }}>中东国家伊维亚共和国发生政变，武装冲突不断升级。刚刚在索马里执行完解救人质任务的海军护卫舰临沂号，受命前往伊维亚执行撤侨任务。 </Text>
                    </View>
                    </Card.Body>
                    <Card.Footer extra="详情->" />
                </Card>
                </WingBlank>

                <WingBlank size="lg" style={{paddingTop: 16}}>
                <Card>
                    <Card.Header
                    title="帕丁顿熊 3"
                    thumbStyle={{ width: 80, height: 80 }}
                    thumb="http://oei91bbtj.bkt.clouddn.com/%E5%B8%95%E4%B8%81%E9%A1%BF%E7%86%8A.jpg"
                    />
                    <Card.Body>
                    <View style={{ height: 50 }}>
                        <Text style={{ marginLeft: 16 }}>露西婶婶（伊梅尔达·斯汤顿 Imelda Staunton 配音）的生日即将到来，帕丁顿（本·威士肖 Ben Whishaw 配音）决定送婶婶一份会让她终生难忘的礼物。 </Text>
                    </View>
                    </Card.Body>
                    <Card.Footer extra="详情->" />
                </Card>
                </WingBlank>
            </View>
        </ScrollView>
    );
  }
}