import React, { Component } from 'react';
import { WhiteSpace, WingBlank,Card,Carousel } from 'antd-mobile-rn';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import {get} from '../config/request'

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

const Content = (props: any) => (
    <Card>
	    <Card.Header
	      title="黄宝金"
	      thumbStyle={{ width: 30, height: 30 }}
	      thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
	      extra="剧本的未来"
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
    <Image source={{uri: 'http://206.189.170.143:8081/scriptImg/1e652f6f-2f64-24b1-9ed3-f63e6856b978.jpg'}}/>}
  </View>:null;
    return (
      <View>
        <WhiteSpace size="lg" />
        <WingBlank size="md">
          <PlaceHolder1 />
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="md">
          {ShowPlaceHolder2}
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="md">
          <Content />
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
  