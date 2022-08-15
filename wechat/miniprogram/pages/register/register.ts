Page({
    redirectUrl: '',
    data: {
        genders: ['保密', '男', '女'],
        gender: 0,
        licNo: '',
        licName: '',
        birthDate: '1990-01-01',
        licImgUrl: '',
        // 0 未审核  10 审核中  20 审核结束
        status: 0 as 0 | 10 | 20
    },

    onLoad(opt) {
        if (opt.redirect) {
            this.redirectUrl = decodeURIComponent(opt.redirect) 
        }
    },

    onUploadImg() {
        wx.chooseImage({
            success: res => {
                if (res.tempFilePaths.length > 0) {
                    this.setData({
                        licImgUrl: res.tempFilePaths[0]
                    })
                    // TODO: uploac image
                    setTimeout(() => {
                        this.setData({
                            licNo: '8559488213',
                            licName: '万里',
                            gender: 1,
                            birthDate: '1995-05-25',
                        })
                    }, 500);
                }
            }
        })
    },
    onGenderChange(e: any) {
        this.setData({
            gender: e.detail.value,
        })
    },
    onBirthChange(e: any) {
        this.setData({
            birthDate: e.detail.value,
        })
    },
    submit() {
        this.setData({
            status: 10,
        })
        setTimeout(() => {
            this.verification()
        }, 1500)
    },
    reSubmit() {
        this.setData({
            licImgUrl: '',
            status: 0,
        })
    },
    verification() {
        this.setData({
            status: 20
        })
        if (this.redirectUrl) {
            wx.redirectTo({
                url: this.redirectUrl,
            })
        }
    },
})