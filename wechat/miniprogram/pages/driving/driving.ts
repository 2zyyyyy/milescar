import { routing } from "../../utils/routing"

// 计费基准
const centPreSec = 0.8

// 格式化行程时间
function formatDuration(sec: number) {
    const padString = (n: number) =>
        n < 10 ? '0' + n.toFixed(0) : n.toFixed(0)
    const h = Math.floor(sec / 3600)
    sec -= 3600 * h
    const m = Math.floor(sec / 60)
    sec -= 60 * m
    const s = Math.floor(sec)
    return `${padString(h)}:${padString(m)}:${padString(s)}`
}

// 格式化行程对应费用
function formatFee(cents: number) {
    return (cents / 100).toFixed(2)
}

Page({
    timer: undefined as number | undefined,
    data: {
        location: {
            latitude: 30.230486,
            longitude: 119.991007
        },
        scale: 15,
        elpased: '00:00:00',
        fee: '0.00'
    },

    onLoad(opt: Record<'trip_id', string>) {
        const o: routing.DrivingOpts = opt
        console.log('current trip:', o.trip_id)
        this.setupLocationUpdator()
        this.setupTimer()
    },

    onUnload() {
        wx.stopLocationUpdate()
        if (this.timer) {
            clearInterval(this.timer)
        }
    },

    setupLocationUpdator() {
        wx.startLocationUpdate({
            fail: console.error,
        })
        wx.onLocationChange(loc => {
            // 输出坐标信息
            console.log('loc:', loc)
            this.setData({
                location: {
                    latitude: loc.latitude,
                    longitude: loc.longitude,
                }
            })
        })
    },
    setupTimer() {
        let elapsedSec = 0
        let cents = 0
        this.timer = setInterval(() => {
            elapsedSec++
            cents += centPreSec
            this.setData({
                elpased: formatDuration(elapsedSec),
                fee: formatFee(cents),
            })
        }, 1000)
    },
    // 结束行程
    onEndTripTap() {
        wx.redirectTo({
            url: routing.mytrips() 
        })
    },
}) 