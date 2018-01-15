import { getUserNickname } from '@/api/api';

export default {
  state: {
    nickname: 'nickname',
    headUrl: 'http://wx.qlogo.cn/mmhead/PiajxSqBRaEKp7eqWtvjp78knpWUk5d9EXdnYXPtLItcxm8DD8Rf33w/132',
  },
  getters: {},
  mutations: {
    update_nickname(state, payload) {
      state.nickname = payload.nickname;
    },
  },
  actions: {
    get_nickname(context) {
      // // eslint-disable-next-line
      // return new Promise((resolve, reject) => {
      //   getUserNickname().then((res) => {
      //     if (res.data.code !== 0) {
      //       reject(res.data.msg);
      //     }
      //     context.commit('update_nickname', res.data);
      //     resolve();
      //   });
      // });
      const data = getUserNickname();
      context.commit('update_nickname', data.data);
    },
  },
};
