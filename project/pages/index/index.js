var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlayingMusic: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  bgm:null,
  onReady() {
    this.bgm=wx.getBackgroundAudioManager()
    this.bgm.title="光遇"    //音乐标题，必须写，否则不会播放
    this.bgm.epname='1456030099'   //专辑名称
    this.bgm.singer="雁夜风"    //演唱者
    this.bgm.coverImgUrl="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.kts.g.mi.com%2Fb735c1b371968e2add4781520fc7e4565624319141712700229.jpg&refer=http%3A%2F%2Fpic.kts.g.mi.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1674882182&t=b18131c6fd99840317cd23020f3590c1", //专辑封面
    this.bgm.src='http://music.163.com/song/media/outer/url?id=1456030099.mp3',
    this.bgm.onEnded(()=>{      //重新赋值时会自动播放
      this.bgm.src='http://music.163.com/song/media/outer/url?id=1456030099.mp3'
    })
    this.bgm.onPause(()=>{
      this.setData({
        isPlayingMusic:false
      })
    })
    this.bgm.onPlay(()=>{
      this.setData({
        isPlayingMusic:true
      })
    })
  },

  play(){      //单击控制音乐的播放与暂停
    if(this.data.isPlayingMusic){
      this.bgm.pause()
    }
    else {
      this.bgm.play()
    }
    this.setData({
      isPlayingMusic:!this.data.isPlayingMusic
    })
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