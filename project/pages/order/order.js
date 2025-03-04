Page({
  data: {
    contentList:[getApp().globalData.order_name,getApp().globalData.order_time]
  },
  home(){
    wx.switchTab({
      url: '../center/center',
    })
  },
  onLoad(option){
    this.setData({
      ['contentList[0]']:getApp().globalData.order_name,
      ['contentList[1]']:getApp().globalData.order_time
    })
  }
})
