import axios from "axios";
import qs from 'qs';

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


//暴露函数
export {
    doGet,
    doPostJson,
    doPost,
}
