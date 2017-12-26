// page/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectAllStatus: false,
    'imgs': [
      {
        'imgUrls':'../../image/h1.jpg',
        "title":"红蔷薇",
      },
      {
        'imgUrls': '../../image/h2.jpg',
        "title": "超神李白"
      },
      {
        'imgUrls': '../../image/h3.jpg',
        "title": "李白国服最强"
      },
      {
        'imgUrls': '../../image/h4.jpg',
        "title": "爱需要欣赏"
      },
      {
        'imgUrls': '../../image/h5.jpg',
        "title": "每周三更新"
      },
      {
        'imgUrls': '../../image/h6.jpg',
        "title": "电影合集"
      },
      {
        'imgUrls': '../../image/h7.jpg',
        "title": "圣诞快乐"
      },
      {
        'imgUrls': '../../image/h8.jpg',
        "title": "小鹿班尼"
      },
      {
        'imgUrls': '../../image/h9.jpg',
        "title": "网紫来了"
      },
      {
        'imgUrls': '../../image/h10.jpg',
        "title": "黑泽雪糕"
      },
      {
        'imgUrls': '../../image/h11.gif',
        "title": "某校跳呲哩呲哩太帅了"
      },
      {
        'imgUrls': '../../image/h12.jpg',
        "title": "娜扎张翰宣告分手"
      }
    ],
  },
  bindSelectAll: function () {
    
  },
  insert: function () {
    var cb = this.data.imgs;
    cb.push(this.data.imgs.length);
    // this.setData({
    //   imgs: cb
    // });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})