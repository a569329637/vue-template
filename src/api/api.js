// import axios from 'axios'
// import router from '@/router'
// import qs from 'qs'
// import {flag} from 'ApiDomainFlag'
// // 全局配置
// const BASE = ""
//
// // 拦截所有响应
// axios.interceptors.response.use((res) => {
//   if (res.data.code === 1) {
//     window.location.href = `${BASE}/api/login`
//   } else if (res.data.code !== 0) {
//     console.log('请求出错，请求错误码为：', res.data)
//   }
//   return res
// }, (err) => {
//   router.push({path: '/error'})
//   return Promise.reject(err)
// });
//
// // 获取用户信息接口
// export const getUserInfo = params => { return axios.get(`${BASE}${flag}/api/get_userInfo`)}

export const getUserNickname = () => ({
  code: 0,
  msg: '成功',
  data: {
    nickname: '昵称',
  },
});

export default {};
