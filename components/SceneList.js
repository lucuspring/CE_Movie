import React,{ Component } from 'react';
import { ScrollView, View ,Text,StyleSheet,TouchableOpacity} from 'react-native';
import { Flex } from 'antd-mobile-rn';

const data1 = [{
	key:"1",
    location: "升升公寓",
    time: "2018.01.01",
    duration: "5分",

},  {
	key:2,
    location: "南湖",
    time: "2018.01.02",
    duration: "10分",
}];

const styles = StyleSheet.create({
  container: {
   flex: 1,
   // paddingTop: 22
  },
  title:{
  	textAlign:'center',
  	fontSize:30,
  	color:'#000000'
  },
  ltitle:{
  	marginRight:5,
  	marginTop:5,
  	textAlign:'left',
  	fontSize:20,
  	paddingBottom:0,
  	marginBottom:0
  },
  item: {
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    marginLeft:5,
    borderTopWidth:1,
   borderTopColor:'#e0e0e0',
   
    marginRight:5,
    // height:50,
  },
  item_text:{
  	flex:1,
  	backgroundColor: '#ffffff',
    color:'#000000',
    // height:25,
    textAlign:'left',
    // marginTop:114
    fontSize:12
  },
  item_text1:{
  	flex:0.5,
  	backgroundColor: '#ffffff',
    color:'#000000',
    height:25,
    textAlign:'left',
    fontSize:12
    
    // marginTop:114
  }
});

// export default class List extends Component {

// constructor(){
//     super();
//     this.state={
//       scriptData:[]
//     }
//   }
class Item extends Component {
   render() {
     return (
      <TouchableOpacity onPress={this.props.press}>
       <View style={styles.item}>
        
       <Flex direction='column' style={styles.item_text}>
           <Text style={{textAlign:'left'}}>地点:</Text>
           <Text style={{textAlign:'left'}}>{this.props.location}</Text>
        </Flex>
        <Flex direction='column' style={styles.item_text}>
           <Text style={{textAlign:'left'}}>时间:</Text>
           <Text style={{textAlign:'left'}}>{this.props.time}</Text>
        </Flex>
        <Flex direction='column' style={styles.item_text}>
           <Text style={{textAlign:'left'}}>时长:</Text>
           <Text style={{textAlign:'left'}}>{this.props.duration}</Text>
         </Flex>
           <Text style={styles.item_text1}>详情></Text>
           
       </View>
       </TouchableOpacity>
     );
   }
}
export default class SceneList extends React.Component<any, any>{

    constructor(props){
        super(props);
        this.state = {
            data:this.props.story.scenes,
        }
    };

    press(data){
      this.props.navigator.push({
        name:'SceneDetail',
        params: { 
          scene: data,
        }   
      });
    }

    render() {
    	var data=this.state.data;
    	var list=[];
    	for (var i  in data) {
    		var row=(
          <Item key={i}
         location={data[i].place}
          time={data[i].sceneTime}
          press={this.press.bind(this,data[i])}
    			duration={data[i].time}></Item>
    			);
    		list.push(row);
    	}
    return (
		
        <View style={styles.container}>
         <Text style={styles.title}>{this.props.story.storyName}</Text>
         <Text style={styles.ltitle}>场景列表</Text>
         
          <ScrollView >
       
           {list}

          </ScrollView>
         </View>
    );
  }

}