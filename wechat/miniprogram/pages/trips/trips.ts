import { routing } from "../../utils/routing"

interface Trip {
    id: string
    start: string
    end: string
    duration: string
    fee: string
    distance: string
    status: string 
}

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
        trips: [] as Trip[],
        tripsHeight: 0,
        scrollTop: 0, 
        scrollIntoView: '',
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

    onLoad() {
        this.populateTrips()
    },

    populateTrips() {
        const trips: Trip[] = []
        for (let i = 0; i < 50; i++) {
            trips.push({
                id: (1001 + i).toString(),
                start: '之江实验室',
                end: '湘湖风景区',
                distance: '48公里',
                duration: '1时29分',
                fee: '287.46元',
                status: '已完成',
            }) 
        }
        this.setData({
            trips
        })
    },

    onChooseAvatar(e: any) {
        const { avatarUrl } = e.detail
        this.setData({
            avatarUrl: avatarUrl,
        })
        console.log('avatarUrl:', avatarUrl)
    },

    onReady() {
        wx.createSelectorQuery().select('#heading').boundingClientRect(rect => {
            this.setData({
                tripsHeight: wx.getSystemInfoSync().windowHeight - rect.height
            })
        }).exec()
    },

    onRegisterTap() {
        wx.navigateTo({
            //  url: '/pages/register/register'
            url: routing.register()
        })
    },
})