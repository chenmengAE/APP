// pages/change/change.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickname: null,
    constellation: null,
    qq: null,
    phone: null
  },
  submit(e) {
    let id = getApp().globalData.id
    let nickname = e.detail.value.nickname
    let constellation = e.detail.value.constellation
    let qq = e.detail.value.qq
    let phone = e.detail.value.phone

    let userForm = JSON.stringify({ id, nickname, constellation, qq, phone })
    console.log(userForm);
    wx.request({
      url: 'http://127.0.0.1:3000/users/change',
      method: 'POST',
      data: userForm,
      header: { 'content-type': 'application/json' },
      success: res => {
        console.log(res);
        if (res.data.code == 200) {
          getApp().globalData.nickname = res.data.data[1]
          getApp().globalData.phone = res.data.data[2]
          getApp().globalData.qq = res.data.data[3]
          getApp().globalData.constellation = res.data.data[4]
          wx.showToast({
            title: '修改成功',
            icon: "success",
          })
          setTimeout(() => {
            wx.navigateTo({
              url: '../person/person',
            })
          }, 1000)
        }
      }
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