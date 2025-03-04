// pages/reg/reg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  submit(e){
   
    /* 小程序的异步请求 */
    let username = e.detail.value.name
    let password = e.detail.value.password
    let confirm = e.detail.value.passwords
    let nickname= e.detail.value.nickname

    let userForm =JSON.stringify({username,password,confirm,nickname}) 
    console.log(userForm);
    wx.request({
      url: 'http://127.0.0.1:3000/users/regest',
      method:'POST',
      data:userForm,
      header:{'content-type':'application/json'},
      success:res => {
        console.log(res);
        if(res.data.code == 200){
          wx.showModal({
            title:'注册成功，跳转登陆页面',
            success:function (res) {
              if(res.confirm){
                wx.navigateTo({
                  url: '/pages/login/login',
                })
              }
            }
          })
        }else if(res.data.code == 601){
          wx.showModal({
            title:'信息不完善',
          })
          return
        }else if(res.data.code == 602){
          wx.showModal({
            title: '密码格式不对',
          })
          return
        }else if(res.data.code == 603){
          wx.showModal({
            title: '账号已被占用',
          })
          return
        }else if(res.data.code == 604){
          wx.showModal({
            title: '两次密码不一致',
          })
          return
        }
      },
      fail:err=>{
        wx.showModal({
          title: '系统繁忙',
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