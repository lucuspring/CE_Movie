import React, { Component } from 'react';
import { WhiteSpace, WingBlank,Carousel } from 'antd-mobile-rn';
import {
  StyleSheet,
  View,
  Image,
  ScrollView
} from 'react-native';
import {get} from '../config/request'
import List from './GridComponent'


let Images = [
  { src: require('../res/images/3.jpg') },
  { src: require('../res/images/2.jpg') }
  
];

const PlaceHolder1 = (any) => (
     <View style={{ marginTop: 30 }}>
        <View>
          <Carousel
            style={styles.wrapper}
            autoplayInterval={3000}
            selectedIndex={0}
            autoplay
            infinite
            afterChange={this.onselectedIndexChange}
          >
            <View style={[styles.carContainer, { backgroundColor: 'red' }]}>
              <Image style={styles.imageStyle} source={Images[0].src}></Image>
            </View>
            <View style={[styles.carContainer, { backgroundColor: 'blue' }]}>
            <Image style={styles.imageStyle} source={Images[1].src}></Image>
            </View>
             </Carousel>

        </View>
      </View>
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
onselectedIndexChange(number) {
    /* tslint:disable: no-console */
    console.log('change to', index);
  }


  render() {
  	

    return (
      <View>
        <ScrollView>
        <WhiteSpace size="lg" />
        <WingBlank size="md">
          <PlaceHolder1 />
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="md">
         <List navigator={this.props.navigator}/>
        </WingBlank>
        <WhiteSpace size="lg" />
        </ScrollView>
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
  imageStyle: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
},
});
  
