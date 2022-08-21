import { routing } from "../../utils/routing"

Page({
    data: {
        avatarUrl: '',
        height: 0,
        width: 0,
    },
    onChooseAvatar(e: any) {
        const { avatarUrl } = e.detail
        this.setData({
            avatarUrl: avatarUrl,
        })
        console.log('avatarUrl:', avatarUrl)
    },
    load(e: any) {
        this.setData({
            height: e.detail.height,
            width: e.detail.width
        })
        console.log('height:', this.data.height, 'width:', this.data.height)
    },

    async onLoad(opt:Record<'car_id', string>) {
        const o : routing.LockOpts = opt 
        console.log('unlocking car', o.car_id)
    },

    onUnlockTap() {
        // 获取位置权限
        wx.getLocation({
            type: 'gcj02',
            success: loc => {
                console.log('start a trip', {
                    location: {
                        latitude: loc.latitude,
                        longitude: loc.longitude,
                    }
                })
            }
        })
        const tripID = 'test123'

        wx.showLoading({
            mask: true,
            title: '开锁中',
        }),
            setTimeout(() => {
                wx.redirectTo({
                    url: routing.driving({
                        trip_id: tripID, 
                    }),
                    complete: () => {
                        wx.hideLoading()
                    }
                })
            }, 2000);
    },
    fail: () => {
        wx.showToast({
            icon: 'none',
            title: '请前往设置页授权位置信息',
        })
    }
}) 