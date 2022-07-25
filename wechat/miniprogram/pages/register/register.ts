Page({
    data: {
        licImgUrl: undefined as string | undefined,
    },
    onUploadImg() {
        wx.chooseImage({
            success: res => {
                if (res.tempFilePaths.length > 0) {
                    this.setData({
                        licImgUrl: res.tempFilePaths[0]
                    })
                }
            }
        })
    }
})