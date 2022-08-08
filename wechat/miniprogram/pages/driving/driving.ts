Page({
    data: {
        location: {
            latitude: 30.226589,
            longitude: 119.984724,
        },
        scale: 14,
    },
    
    onLoad() {
        this.setupLocationUpdator()
    },

    onUnload() {
        wx.stopLocationUpdate()
    },

    setupLocationUpdator() {
        wx.startLocationUpdate({
            fail: console.error,
        })
        wx.onLocationChange(loc => {
            this.setData({
                location: {
                    latitude: loc.latitude,
                    longitude: loc.longitude,
                }
            })
        })
    },
}) 