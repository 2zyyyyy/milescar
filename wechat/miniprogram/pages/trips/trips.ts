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

interface MainItem {
    id: string
    navId: string
    data: Trip
}

interface NavItem {
    id: string
    mainId: string
    lable: string
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
        mainItems: [] as MainItem[],
        mainScroll: '',
        navItems: [] as NavItem[],
        tripsHeight: 0,
        scrollTop: 0,
        navCount: 0,
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
        const mainItems: MainItem[] = []
        const navItems: NavItem[] = []
        for (let i = 0; i < 50; i++) {
            const mainId = 'main-' + i
            const navId = 'nav-' + i
            const tripId = (1001 + i).toString()
            mainItems.push({
                id: mainId,
                navId: navId,
                data: {
                    id: tripId,
                    start: '之江实验室',
                    end: '湘湖风景区',
                    distance: '48公里',
                    duration: '1时29分',
                    fee: '287.46元',
                    status: '已完成',
                },
            })

            navItems.push({
                id: navId,
                mainId: mainId,
                lable: tripId,
            })
        }
        this.setData({
            mainItems,
            navItems,
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
            const height = wx.getSystemInfoSync().windowHeight - rect.height
            this.setData({
                tripsHeight: height,
                navCount: Math.round(height / 50),
            })
        }).exec()
    },

    onRegisterTap() {
        wx.navigateTo({
            //  url: '/pages/register/register'
            url: routing.register()
        })
    },

    onNavItemTap(e: any) {
        const mainId: string = e.currentTarget?.dataset?.mainId
        // const navId: string = e.currentTarget?.id
        if (mainId) {
            this.setData({
                mainScroll: mainId,
                // navSel: navId,
            })
        }
    },
})