import axios from 'axios';

export const host = 'http://192.168.1.109:8080';

export const allImages = params => {
    return axios.get(`${host}/getFiles`, params) //原来这里就用到了自定义插值，模板字符串以及箭头定义函数
};

export const idCardRecognize = params => {
    return axios.get(`${host}/IDCardRecognize`, params)
};

export const plateLicense = params => {
    return axios.get(`${host}/plateLicense`, params)
};

export const imgResult = params => {
    return axios.get(`${host}/result`, params)
};

export const receipt = params => {
    return axios.get(`${host}/receipt`, params)
};