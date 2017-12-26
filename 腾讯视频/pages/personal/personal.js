// pages/personal/personal.js
//获取应用实例
//getApp() 获取应用实例
const app = getApp()
//Page ： 声明页面。
Page({
  //data: 定义数据
  data: {
    title: '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    'imgs': [
      '../../image/h1.jpg',
      '../../image/h2.jpg',
      '../../image/h3.jpg',
      '../../image/h4.jpg',
      '../../image/h5.jpg',
      '../../image/h6.jpg',
      '../../image/h7.jpg',
      '../../image/h8.jpg',
      '../../image/h9.jpg',
      '../../image/h10.jpg',
      '../../image/h11.gif',
      '../../image/h12.jpg'
    ]
  },
  //事件处理函数
  //bindViewTap ：为在view中绑定的是tap事件定义操作方法。
  bindViewTap: function () {
    //wx.navigateTo ：导航到响应页面
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  /* 
    onLoad ： 定义页面加载时的事件。在这里使用了在全局 app.js 中定义的回调函数，将data中的数据更新，由于双向的绑定，页面中的                   userInfo 实例也会更新，显示出您的头像和昵称。
   */
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
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
