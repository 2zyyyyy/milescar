const defaultAvatarUrl = '/resources/defaultAvator.png'

Page({
  data: {
    avatarUrl: defaultAvatarUrl,
  },
  onChooseAvatar(e:any) {
    const { avatarUrl } = e.detail 
    this.setData({
      avatarUrl,
    })
    //  将头像上传到服务器
    // wx.uploadFile({
    //   url: 'https://example.weixin.qq.com/upload',
    //   filePath: tempFilePaths[0],
    //   name: 'file',
    //   success (res){
    //     const data = res.data
    //     //do something
    //   }
    // })
  }
})