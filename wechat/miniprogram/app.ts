// app.ts

App<IAppOption>({
  globalData: {},
  async onLaunch() {
    wx.request({
      url: 'http://localhost:8082/trip/1233',
      method: 'GET',
      success: console.log,
      fail: console.error,
    })

    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
  },
})