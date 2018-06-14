import React, { Component } from 'react';
import { InputItem,Button,Flex } from 'antd-mobile-rn';
import {
  StyleSheet,
  Image, 
  View 
} from 'react-native';
import {post} from '../config/request';
import base64url from 'base64url';
import Index from './Detail';
import {storage_save} from '../config/storage';

const Circle = (any) => {
  const size = props.size || 20;
  const style = {
    borderRadius: size / 2,
    backgroundColor: '#527fe4',
    width: size,
    height: size,
    margin: 1,
  };
  return <View style={style} />;
};
export default class Login extends Component{  
    constructor(props){  
        super(props);  
        this.state={
          username:'',
          password:'',
        }
    }

    usernameChange=(e)=>{
      this.setState({
        username:e
      })
    }  

    passwordChange=(e)=>{
      this.setState({
        password:e
      })
    }  

    login=()=>{
      if(this.state.username&&this.state.password){
        const loginParams = {
                    username: this.state.username,
                    password: this.state.password,
                };
                post('/tokens',loginParams)
                .then((jsonData) => {
                  if(jsonData.meta&&jsonData.meta.success){
                      const data = jsonData.data.split('.')[1];
                      let s = base64url.decode(data);
                      let sObj = JSON.parse(s);
                      let userId = sObj.user_id;
                      let userName = sObj.user_name;
                      let nickName = sObj.nick_name;
                      let userImg = sObj.user_img;
                      let userRole = sObj.role_id;   
                      const userData = {
                        userId: userId,
                        userName: userName,
                        nickName: nickName,
                        userImg:userImg,
                        userRole:userRole,
                        token:jsonData.data,

                      };
                      
                      storage_save('userInfo',userData);             
                          this.props.navigator.push({
                            name:'Index'
                          });
                  }else{
                    alert('用户信息错误');
                  }
    
                    });
      }else{
        alert("请填完整信息！");
      }
    }
    

    render(){
      return (
        <Flex style={styles.container} direction='column' justify='center' align='center'>
            <Image source={require('../res/images/LoginLogo.png')} style={{ width: '50%',height:'20%'}}/>
            <InputItem placeholder='username' value={this.state.username} onChange={this.usernameChange} style={{ marginTop: 20, marginBottom: 5,marginRight: 5,padding:20 }}></InputItem>
            <InputItem placeholder='password' value={this.state.password} onChange={this.passwordChange} type='password' style={{ marginBottom: 7,marginRight: 5,padding:20 }}></InputItem>  
            <Flex justify='center'>
               <Button type='primary' onClick={this.login} style={{ width: '40%',marginRight: 4}}>Login</Button>
               <Button type='primary' style={{ width: '40%' }}>Register</Button>
            </Flex>    
        </Flex>  
      );
    } 
} 
  
const styles = StyleSheet.create({
    container: {
      width:'100%',
      height:'85%',
    },
  });
    