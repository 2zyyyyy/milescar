Page({
    data: {
        avatarUrl: '',
        height: 0,
        width: 0,
    },
    onChooseAvatar(e: any) {
        const {avatarUrl} = e.detail
        this.setData({
            avatarUrl: avatarUrl,
        })
        console.log("avatarUrl：", avatarUrl)
    },
    load(e: any) {
        this.setData({
            height: e.detail.height,
            width: e.detail.width
        })
        console.log("height:", this.data.height, "width:", this.data.height)
    },
}) 