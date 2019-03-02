//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '开始约战',
    userInfo: {},
    hasUserInfo: false,
    motto: '给我阳光我就灿烂',
    groupList: [
      { time: '1月2日', location: '广州塔', aggainst: '蜘蛛侠'},
      { time: '1月12日', location: '体育中心', aggainst: '钢铁侠' },
      { time: '1月22日', location: '天河城', aggainst: '神人' },
      { time: '1月26日', location: '广州塔', aggainst: '战士' },
    ],
    commitList: [
      { name: 'paopao', text: '流了超级多汗' },
      { name: 'woniu', text: '堪称NBA' },
      { name: 'doudou', text: '对手很厉害' }
    ],
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  commit: function () {
    console.log('1111111111111111111111111')
  },
  bindCombat: function () {
    wx.navigateTo({
      url: '../detail/detail'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
