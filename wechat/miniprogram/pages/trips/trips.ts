Page({
    data: {
        indicatorDots: true,
        autoPlay: true,
        interval: 3000,
        duration: 500,
        circular: true,
        multiItemCount: 1,
        preMargin: '',
        nextMargin: '',
        vertical: false,
        current: 0,
        promotionItems: [
            {
                img: 'https://img.mukewang.com/5f7301d80001fdee18720764.jpg',
                promotionID: 1,
            },            
            {
                img: 'https://img.mukewang.com/5f6805710001326c18720764.jpg',
                promotionID: 2,
            },
            {
                img: 'https://img.mukewang.com/5f6173b400013d4718720764.jpg',
                promotionID: 3,
            },
            {
                img: 'https://img.mukewang.com/5f7141ad0001b36418720764.jpg',
                promotionID: 4,
            },
        ],
        avatarUrl: '',
    },

    onChooseAvatar(e: any) {
        const { avatarUrl } = e.detail
        this.setData({
            avatarUrl: avatarUrl,
        })
        console.log('avatarUrl:', avatarUrl)
    }, 

    onRegisterTap() {
         wx.navigateTo({
             url: '/pages/register/register'
         })
    },
 })