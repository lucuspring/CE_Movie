//import createBrowser from "history/createBrowserHistory"
import config from './url';
//const  history  =  createBrowser();
export default function request(method, url, body,history) {
  let userToken='';
  const baseUrl = config.loginUrl;
  url = baseUrl + url;
  method = method.toUpperCase();
  let contentType = 'application/json';
  if (method === 'GET') {
    body = undefined;
  } else if (method === 'FORM-POST') {
    let str = '';
    for (let prop in body) {
      str += `${prop}=${body[prop]}&`;
    }
    body = str.substr(0, str.length-1);
    contentType = 'application/x-www-form-urlencoded';
    method = 'POST';
  } else {
    body = body && JSON.stringify(body);
  }

  storage.load({
    key: 'userInfo',
    // autoSync(默认为true)意味着在没有找到数据或数据过期时自动调用相应的sync方法
    autoSync: true,
    
    // syncInBackground(默认为true)意味着如果数据过期，
    // 在调用sync方法的同时先返回已经过期的数据。
    // 设置为false的话，则等待sync方法提供的最新数据(当然会需要更多时间)。
    syncInBackground: true,

    }).then(ret => {
      // 如果找到数据，则在then方法中返回
      // 注意：这是异步返回的结果（不了解异步请自行搜索学习）
      // 你只能在then这个方法内继续处理ret数据
      // 而不能在then以外处理
      // 也没有办法“变成”同步返回
      // 你也可以使用“看似”同步的async/await语法
      userToken=ret.token;
    });

  return fetch(url, {
    method,
    headers: {
      'Content-Type': contentType,
      'Accept': 'application/json',
      'Access-Token': userToken || ''
    },
    body
  })
    .then((res) => {
      console.log("请求状态是"+res.status);

      if (parseInt(res.status) === 401) {
        //history.push("/login");
        return res.json();
      }
        return res.json();
      
    });
}

export const get = (url,history) => request('GET', url,null,history);
export const post = (url, body,history) => request('POST', url, body,history);
export const put = (url, body,history) => request('PUT', url, body,history);
export const del = (url, body,history) => request('DELETE', url, body,history);
export const formPost = (url, body,history) => request('FORM-POST', url, body,history);
export const uploadImage=(url,params)=>{
  return new Promise(function (resolve, reject) {
      let formData = new FormData();
      for (var key in params){
          formData.append(key, params[key]);
      }
      fetch(config.loginUrl+url, {
          method: 'POST',
          headers: {
              'Access-Token': sessionStorage.getItem('access_token') || '',
          },
          body: formData,
      }).then((response) => {
        return response.json()
      });
          
  });
}