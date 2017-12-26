Page({
  data: {
    // tab切换    
    currentTab: 0,
    "item1": [
      {
        "bigTitles": "王者荣耀：鲁班二技能能抢主宰，靠的不仅仅是运气",
        "imgUrls": '../../image/w1.jpg'
      },
      {
        "bigTitles": "王者荣耀鳯求凰王者峡谷鲁班七号四杀王者时刻",
        "imgUrls": '../../image/w2.jpg'
      },
      {
        "bigTitles": "王者荣耀实验室：六神装张飞和六神装鲁班哪个更强？",
        "imgUrls": '../../image/w3.jpg'
      },
      {
        "bigTitles": "王者荣耀：鲁班大师教你输出是怎样炼成的",
        "imgUrls": '../../image/w4.jpg'
      }
    ],
    "item2": [
      {
        "bigTitles": "王者荣耀教学：孙悟空暴击6000+？这是奇迹也是运气",
        "imgUrls": '../../image/w5.jpg'
      },
      {
        "bigTitles": "不知火舞教学：王者荣耀张大仙分享草里蹲技巧",
        "imgUrls": '../../image/w6.jpg'
      },
      {
        "bigTitles": "王者搞笑解说：关羽骑马撞死妲己？画面太美不敢看！",
        "imgUrls": '../../image/w7.jpg'
      },
      {
        "bigTitles": "王者荣耀本阁解说：李白越塔秒三次小乔，残暴至极",
        "imgUrls": '../../image/w8.jpg'
      }
    ],
    "item3": [
      {
        "bigTitles": "王者荣耀：女蜗被动的隐藏属性产生BUG，可以无伤越塔。",
        "imgUrls": '../../image/w9.jpg'
      },
      {
        "bigTitles": "王者荣耀：原来女蜗也可以飞出外太空",
        "imgUrls": '../../image/w10.jpg'
      },
      {
        "bigTitles": "王者荣耀：至高创世女蜗强行改变地形随手",
        "imgUrls": '../../image/w11.jpg'
      },
      {
        "bigTitles": "同样的方式击杀哪吒4次，女娲真的有毒，再也不玩哪吒了",
        "imgUrls": '../../image/w12.jpg'
      }
    ]
  },
  swichNav: function (e) {
    console.log(e);
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
      })
    }
  },
  swiperChange: function (e) {
    console.log(e);
    this.setData({
      currentTab: e.detail.current,
    })

  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载  
  },
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成  
  },
  onShow: function () {
    // 生命周期函数--监听页面显示  
  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏  
  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载  
  },
  onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作  
  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数  
  },
  onShareAppMessage: function () {
    // 用户点击右上角分享  
    return {
      title: 'title', // 分享标题  
      desc: 'desc', // 分享描述  
      path: 'path' // 分享路径  
    }
  }
})  