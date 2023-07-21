import axios from "axios";

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


//暴露函数
export {
    doGet,
    doPostJson
}
