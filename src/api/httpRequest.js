import axios from "axios";
import qs from 'qs';
import layx from "vue-layx";

//设置默认值
axios.defaults.baseURL = "http://localhost:8000/api";
axios.defaults.timeout = 50000


/**
 * get请求方法
 * @param url 请求的地址，去除baseURL以外的部分
 * @param params json对象，表示请求的参数
 * @returns {Promise<axios.AxiosResponse<any>> | *}
 */
function doGet(url, params) {
    return axios({
        url: url,
        method: 'get',
        params: params
    });
}

/**
 * 传递json数据，在请求报文中是json的格式
 * @param url
 * @param params
 * @returns {Promise<axios.AxiosResponse<any>> | *}
 */
function doPostJson(url, params) {
    return axios({
        url: url,
        method: 'post',
        params: params
    });
}

/**
 * 请求是 key=value参数格式
 */
function doPost(url, params){
    //qs 把json对象转为 a=1&b=2 ， 也可以反向
    let requestData = qs.stringify(params);
    return axios.post(url,requestData);
}

//创建拦截器
axios.interceptors.request.use(function(config){

    //在需要用户登录后的操作，在请求的url中加入token
    //判断访问服务器的url地址， 需要提供身份信息，加入token
    console.log("url==="+config.url);
    if( config.url == '/v1/user/realname' || config.url=='/v1/user/usercenter' || config.url=='/v1/recharge/records') {
    // if( config.url == '/v1/user/realname') {
        let storageToken = window.localStorage.getItem("token");
        let userinfo = window.localStorage.getItem("userinfo");
        if( storageToken && userinfo ){
            //在header中传递token 和一个userId
            config.headers['Authorization']='Bearer ' + storageToken;
            config.headers['uid'] = JSON.parse(userinfo).uid;
        }
    }
    return config;
},function(err){
    console.log("请求错误"+err);
})

//创建应答拦截器，统一对错误处理， 后端返回 code > 1000 都是错误
axios.interceptors.response.use(function(resp){
    if(resp && resp.data.code > 1 ){
        let code = resp.data.code;
        if( code == 3000){
            //token无效，重新登录
            window.location.href='/page/user/login';
        } else {
            layx.msg(resp.data.msg,{dialogIcon:'warn',position:'ct'});
        }
    }
    return resp;
},function (err){
    console.log("应答拦截器错误："+err)
    //回到首页
    // window.location.href = '/';
})


//暴露函数
export {
    doGet,
    doPostJson,
    doPost,
}
