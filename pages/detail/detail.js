//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '开始约战',
    userInfo: {},
    hasUserInfo: false,
    motto: '给我阳光我就灿烂',
    combatList: [
      { url: '../look/look', time: '1月2日', location: '体育中心', aggainst: '蜘蛛侠', state: 1 },
      { url: '../look/look', time: '1月6日', location: '广州塔', aggainst: '大笨熊', state: 1 },
      { url: '../face/face', time: '1月22日', location: '海珠广场', aggainst: '乖乖兔', state: 0 },
      { url: '../face/face', time: '1月26日', location: '创意园', aggainst: '蜘蛛侠', state: 0 }
    ],
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindCombat: function () {
    wx.navigateTo({
      url: '../detail/detail'
    })
  },
  bindWrite: function () {
    wx.navigateTo({
      url: '../logs/logs'
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
