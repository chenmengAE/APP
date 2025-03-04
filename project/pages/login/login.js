// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: [
      { id: 1, name: '李四', password: "123456" },
      { id: 2, name: '王五', password: "654321" }
    ]
  },
  regest(){
    wx.navigateTo({
      url: '../regest/regest',
    })
  },
  submit(e) {
    let username = e.detail.value.name
    let password = e.detail.value.password
    let userForm = JSON.stringify({ username, password })
    wx.request({
      url: 'http://127.0.0.1:3000/users/login',
      method: "POST",
      data: userForm,
      success: res => {
        console.log(res)
        if (res.data.code == 200 && res.data.data[0] != null) {
          getApp().globalData.id=res.data.data[0].id
          getApp().globalData.nickname=res.data.data[0].nickname
          getApp().globalData.phone=res.data.data[0].phone
          getApp().globalData.qq=res.data.data[0].qq
          getApp().globalData.constellation=res.data.data[0].constellation
          wx.showToast({
            title: res.data.data[0].nickname,
            icon: "success"
          })
          setTimeout(() =>{
            wx.switchTab({
              url: '../index/index',
            })
          },1000)
        } else if(res.data.code==601){
          wx.showModal({
            title: '密码错误',
          })
        }else{
          wx.showModal({
            title: '账号不存在,去注册',
            success(res) {
              if (res.confirm) {
                wx.navigateTo({
                  url: '../regest/regest',
                })
              }
            }
          })
        }
      },
      fail: err => {
        wx.showModal({
          title: '账号或密码错误',
        })
      }
    })
  },
  findBack() {
    wx.navigateTo({
      url: '../find/find',
    })
  }
})