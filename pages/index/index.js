//index.js
//获取应用实例
const app = getApp()

const api = require('../../utils/api.js')

Page({
  data: {
    background: ['./img/1-reg.png', './img/2-reg.png', './img/3-reg.jpg'],
    books: [{
      text: 'Deep Learning',
      img_src: '../../images/deep_learning.jpg'
    }, {
      text: 'Deep Learning',
      img_src: '../../images/deep_learning.jpg'
    }, {
      text: 'Deep Learning',
      img_src: '../../images/deep_learning.jpg'
    }, {
      text: 'Deep Learning',
      img_src: '../../images/deep_learning.jpg'
    }, {
      text: 'Deep Learning',
      img_src: '../../images/deep_learning.jpg'
    }, {
      text: 'Deep Learning',
      img_src: '../../images/deep_learning.jpg'
    }, {
      text: 'Deep Learning',
      img_src: '../../images/deep_learning.jpg'
    }, {
      text: 'Deep Learning',
      img_src: '../../images/deep_learning.jpg'
    }],
    info_desk_chair: [{
      'is_selection': [{"flg":1, "id": 101}, {"flg":0, "id": 102}, {"flg":0, "id": 103}, {"flg":1, "id": 104}]
    }, {
      'is_selection': [{"flg":0, "id": 201}, {"flg":0, "id": 202}, {"flg":1, "id": 203}, {"flg":0, "id": 204}]
    }, {
      'is_selection': [{"flg":1, "id": 301}, {"flg":0, "id": 302}, {"flg":0, "id": 303}, {"flg":1, "id": 304}]
    }, {
      'is_selection': [{"flg":1, "id": 401}, {"flg":1, "id": 402}, {"flg":0, "id": 403}, {"flg":1, "id": 404}]
    }, {
      'is_selection': [{"flg":1, "id": 501}, {"flg":0, "id": 502}, {"flg":1, "id": 503}, {"flg":0, "id": 504}]
    }],
    chair: ['../../images/desk/Chair.png', '../../images/desk/Chair_c.png'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    scrollLeft: 0
    // motto: 'Hello World',
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onReady: function () {
    //获得popup组件
    this.popup = this.selectComponent("#popup");
  },
  showPopup() {
    this.popup.showPopup();
  },
   //取消事件
   _error() {
     this.popup.setData({
       "chair_id": 0
     })
    this.popup.hidePopup();
  },
  //确认事件
  _success() {  
    const id = this.popup.data.chair_id;
    if(id != 0){
      console.log(id);
      const result =  api.chariApi.chair(id);
      this.popup.setData({
        "chair_id": 0
      })
    }
    this.popup.hidePopup();
  },
  scrolltolower: function() {
    this.setData({
      scrollLeft: 0
    });
  },
  selection_chair:function(event){
    const s_data  = event.currentTarget.dataset.s;
    let title = "已选"+s_data.id;
    if(s_data.flg !== 0){
        this.popup.setData({
            "title": title,
            "content": "该座位已被选取",
        });
    }else{
      this.popup.setData({
        "title": title,
        "content": "是否选择该座位?",
        "chair_id": s_data.id
      })
    }
    this.showPopup();
  },
  scroll(e) {
    console.log(e['detail']['scrollLeft']);
    if (e['detail']['scrollLeft'] > 680) {
      this.scrolltolower();
    }
  },
  // //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  // onLoad: function () {
  //   if (app.globalData.userInfo) {
  //     this.setData({
  //       userInfo: app.globalData.userInfo,
  //       hasUserInfo: true
  //     })
  //   } else if (this.data.canIUse){
  //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //     // 所以此处加入 callback 以防止这种情况
  //     app.userInfoReadyCallback = res => {
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   } else {
  //     // 在没有 open-type=getUserInfo 版本的兼容处理
  //     wx.getUserInfo({
  //       success: res => {
  //         app.globalData.userInfo = res.userInfo
  //         this.setData({
  //           userInfo: res.userInfo,
  //           hasUserInfo: true
  //         })
  //       }
  //     })
  //   }
  // },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})