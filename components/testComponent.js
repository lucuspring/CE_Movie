import React, { Component } from 'react';
import { WhiteSpace, WingBlank,Card,Carousel,Grid } from 'antd-mobile-rn';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import {get} from '../config/request'
import List from './GridComponent'


const PlaceHolder1 = (props: any) => (
  <View style={{ marginTop: 30 }}>
        <View>
          <Carousel
            style={styles.wrapper}
            autoplayInterval={3000}
            selectedIndex={2}
            autoplay
            infinite
            afterChange={this.onselectedIndexChange}
          >
            <View style={[styles.carContainer, { backgroundColor: 'red' }]}>
              <Text>Carousel 1</Text>
            </View>
            <View style={[styles.carContainer, { backgroundColor: 'blue' }]}>
              <Text>Carousel 2</Text>
            </View>
            <View style={[styles.carContainer, { backgroundColor: 'yellow' }]}>
              <Text>Carousel 3</Text>
            </View>
            <View style={[styles.carContainer, { backgroundColor: 'black' }]}>
              <Text>Carousel 4</Text>
            </View>
            <View style={[styles.carContainer, { backgroundColor: '#ccc' }]}>
              <Text>Carousel 5</Text>
            </View>
          </Carousel>

        </View>
      </View>
);

componentWillMount=()=>{
    let doit = this;
    fetch('http://206.189.170.143:8081/scripts/preference')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        doit.setState({
          scriptData:myJson.data,
        })
      });
  }

const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: 'http://206.189.170.143:8081/scriptImg/1e652f6f-2f64-24b1-9ed3-f63e6856b978.jpg',
  text: "hhh",
}));

const GridDemo = (props:any)=>(
    <ScrollView>
        <Grid
          data={data}
          columnNum={3}
          hasLine={false}
          itemStyle={{ height: 200,width:200}}
        />
      </ScrollView>
);


const Content = (props: any) => (
//const showCard = this.state.scriptData.length?;
    <Card>
	    <Card.Header
	      title="黄宝金"
	      thumbStyle={{ width: 30, height: 30 }}
	      thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
	      extra="fdfa"
	    />
	    <Card.Body>
	      <View style={{ height: 42 }}>
	        <Text style={{ marginLeft: 16 }}>有句话不知当讲不当讲</Text>
	      </View>
	    </Card.Body>
	    <Card.Footer
	      content="点赞：56"
	      extra="时间：2018-6-12"
	    />
	 </Card>
);

export default class TestComponent extends Component {
	constructor(props){
		super(props);
		this.state={
			data: ['1', '2', '3'],
		    imgHeight: 176,
		    scriptData:[],
		}
	}
onselectedIndexChange(index: number) {
    /* tslint:disable: no-console */
    console.log('change to', index);
  }

  render() {
  	
  	const ShowPlaceHolder2 = this.state.scriptData.length?
	<View
    style={{
      backgroundColor: 'gray',
      height: 200,
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    
  </View>:null;

    return (
      <View>
        <WhiteSpace size="lg" />
        <WingBlank size="md">
          <PlaceHolder1 />
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="md">
         <List/>
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="md">
          {ShowPlaceHolder2}
          {this.state.scriptData[0].scriptName}
        </WingBlank>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
   wrapper: {
    backgroundColor: '#fff',
  },
  carContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
});
  