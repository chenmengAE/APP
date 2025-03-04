// pages/person/person.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickname: null,
    phone: null,
    qq: null,
    constellation: null
  },
  home(){
    wx.switchTab({
      url: '../center/center',
    })
  },
  change(){
    wx.navigateTo({
      url: '../change/change',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      nickname: getApp().globalData.nickname,
      qq: getApp().globalData.qq,
      phone: getApp().globalData.phone,
      constellation: getApp().globalData.constellation
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})