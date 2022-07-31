Page({
    data: {
        avatorUrl: '',
    },
    onChooseAvatar(e: any) {
        const {avatarUrl} = e.detail
        this.setData({
            avatarUrl: avatarUrl,
        })
        console.log("set data success!")
    }
}) 