//import createBrowser from "history/createBrowserHistory"
import config from './url';
//const  history  =  createBrowser();
export default function request(method, url, body,history) {
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

  return fetch(url, {
    method,
    headers: {
      'Content-Type': contentType,
      'Accept': 'application/json',
      'Access-Token': sessionStorage.getItem('access_token') || ''
    },
    body
  })
    .then((res) => {
      console.log("请求状态是"+res.status);
      if (parseInt(res.status) === 401) {
        //history.push("/login");
        return res.json();
      } else {
        const token = res.headers.get('access-token');
        if (token) {
          sessionStorage.setItem('access_token', token);
        }
        return res.json();
      }
    });
}

export const get = (url) => request('GET', url,null,history);
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