/* 封装请求 */
function $http(options={}){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: 'https://www.showapi.com/'+options.url,
      method:options.data||{},
      hander:options.hander||{'content-type':'applyication/json'},
      success:res=>{
        resolve(res)
      },
      fail:err=>{
        reject(err)
      }
    })
  })
}
module.exports = $http