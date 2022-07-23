Page({
  data: {
    setting: {
      skew: 0,
      rotate: 0,
      showLocation: true,
      showScale: true,
      subKey: '',
      layerStyle: 1,
      enableZoom: true,
      enableScroll: true,
      enableRotate: false,
      showCompass: false,
      enable3D: false,
      enableOverlooking: false,
      enableSatellite: false,
      enableTraffic: false,
    },
    location: {
      latitude: 30.230486,
      longitude: 119.991007
    },
    scale: 15,
    markers: [
      {
        iconPath: "/resources/摩托车.png",
        id: 0,
        latitude: 30.226589,
        longitude: 119.984724,
        width: 25,
        height: 25
      },
      {
        iconPath: "/resources/摩托车.png",
        id: 1,
        latitude: 30.230833,
        longitude: 120.008632,
        width: 25,
        height: 25
      },
    ]
  },
  myLocation() {
    wx.getLocation({
      type: 'gcj02',
      success: res => {
        this.setData({
          location: {
            latitude: res.latitude,
            longitude: res.longitude,
          }
        })
      },
      fail: () => {
        wx.showToast({
          icon: 'none',
          title: '请通过右上角设置授权'
        })
      }
    })
  },
},
)