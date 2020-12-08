import axios from 'axios'
import {
    Loading,
    Message
} from 'element-ui'
import json_response_codes from './codes'
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 创建axios实例
const Axios = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? "http://de.home.doopup.com/" : "/api/",
    //baseURL:'http://www.hxfc.com/',
    timeout: 10000, //超时请求
    maxRedirects: 1,
    headers: {
        "Content-Type": 'application/json'
    },
})
//拦截所有api请求，重新获取token
Axios.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token')
        // const lang = localStorage.getItem('lang')
        if (token) {
            config.headers.Token = token
            // config.headers.lang = lang
        }
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

var loadinginstace;

// 拦截所有的 api 请求，未来可做权限检查，缓存，代理等
Axios.interceptors.request.use(
    config => {
        // element ui Loading方法
        loadinginstace = Loading.service({
            fullscreen: true,
            text: 'Loading...'
        })
        return config;
    },
    error => {
        loadinginstace.close()
        return Promise.reject(error);
    },

);

// 拦截所有的 api 响应，可以实现自动弹窗报错
Axios.interceptors.response.use(
    response => { // when HTTP_STATUS in [ 200 , 299 ]
        loadinginstace.close()
        //判断登录状态，跳转路由
        if (response.data.status === 500) { //退出登录
            alert(response.data.msg)
            localStorage.removeItem('token')
            // window.location.href = '#/login'
            this.Router.push('#/login')
        } else if (response.data.status == 400) { //返回错误
            alert(response.data.msg)
            return Promise.resolve(response.data)
        } else if (response.data.status === json_response_codes.status) { //返回数据
            return Promise.resolve(response.data);
        }
        // Message({
        //     //请求超时时间
        //     message: response.data.msg || '服务器接口异常', type: 'error', duration: 3 * 1000
        // });

        //return Promise.reject(response.data.msg);
    },
    error => { // when HTTP_STATUS in [ 300 , 599 ]

        loadinginstace.close()

        if (error === 'cancelled locally') {
            return Promise.reject(error);
        }

        if (error.message === 'timeout of 5000ms exceeded') {
            Message({
                message: '接口请求超时!',
                type: 'error',
                duration: 3 * 1000
            });
            return Promise.reject(error);
        }

        if (error.response.status === 429) {
            Message({
                message: '您的请求频率太快啦!',
                type: 'info',
                duration: 3 * 1000
            });
            return Promise.reject(error);
        }

        Message({
            message: '接口或网络异常，请稍后再试!',
            type: 'error',
            duration: 3 * 1000
        });

        return Promise.reject(error);
    }
);

export default Axios;