
export default {
  state: {
    selectMenuItemIndex: '',
    frameSrc: '',
    menus: [{
      subMenuName: '后台用户',
      index: 'sub-menu-index-1',
      menuItems: [{
        menuItemName: '用户列表',
        linkPath: '#/',
        index: 'menu-item-index-1',
      }, {
        menuItemName: '个人中心',
        linkPath: 'https://www.baidu.com',
        index: 'menu-item-index-2',
      }],
    }, {
      subMenuName: 'Vue相关',
      index: 'sub-menu-index-2',
      menuItems: [{
        menuItemName: 'Vue',
        linkPath: 'https://cn.vuejs.org/v2/guide/index.html',
        index: 'menu-item-index-3',
      }, {
        menuItemName: 'Vuex',
        linkPath: 'https://vuex.vuejs.org/zh-cn/',
        index: 'menu-item-index-4',
      }, {
        menuItemName: 'Router',
        linkPath: 'https://router.vuejs.org/zh-cn/',
        index: 'menu-item-index-5',
      }],
    }],
  },
  getters: {},
  mutations: {
    update_selectMenuItemIndex(state, payload) {
      state.selectMenuItemIndex = payload.index;
    },
    update_frameSrc(state, payload) {
      state.frameSrc = payload.linkPath;
    },
  },
  actions: {
  },
};
