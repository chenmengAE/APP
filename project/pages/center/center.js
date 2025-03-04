Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  info(){
    wx.navigateTo({
      url: '../person/person',
    })
  },
  address(){
    wx.navigateTo({
      url: '../address/address',
    })
  },
  order(){
    let id=getApp().globalData.id

    let userForm = JSON.stringify({ id })
    console.log(userForm);
    wx.request({
      url: 'http://127.0.0.1:3000/users/order',
      method: 'POST',
      data: userForm,
      header: { 'content-type': 'application/json' },
      success:res=>{
        console.log(res);
        for(var i=0;i<res.data.data[0][0].length;i++){
          getApp().globalData.order_name.push(res.data.data[0][0][i].name)
          getApp().globalData.order_time.push(res.data.data[0][0][i].date)
        }
        console.log(getApp().globalData.order_name)
        console.log(getApp().globalData.order_time)
        wx.navigateTo({
          url: '../order/order',
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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