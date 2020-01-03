import axios from 'axios';

export const flaskHost = process.env.VUE_APP_FLASK_HOST;
export const proHost = process.env.VUE_APP_PRO_HOST;
export const host = proHost;

//获取游戏实体信息
export const entityInfo = params => {
    return axios.get(`${flaskHost}/api/entity/`, params) //原来这里就用到了自定义插值，模板字符串以及箭头定义函数
};