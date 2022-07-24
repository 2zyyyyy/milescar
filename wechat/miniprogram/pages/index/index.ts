Page({
  // 定义页面是否展示全局变量
  pageShowing: false,
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
        iconPath: "/resources/motor.png",
        id: 0,
        latitude: 30.226589,
        longitude: 119.984724,
        width: 25,
        height: 25
      },
      {
        iconPath: "/resources/motor.png",
        id: 1,
        latitude: 30.230833,
        longitude: 120.008632,
        width: 25,
        height: 25
      },
    ]
  },

  onShow() {
    this.pageShowing = true
  },

  onHide() {
    this.pageShowing = false
  },

  // 扫码租车
  onScanClicked() {
    wx.scanCode({
      success: () => {
        wx.navigateTo({
          url: '/pages/register/register'
        })
      },
      fail: console.error,
    })
  },

  // 回到当前位置
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

  // 车辆移动
  moveCars() {
    const map = wx.createMapContext("map")
    const dest = {
      latitude: 30.226589,
      longitude: 119.984724,
    }
    // 车辆移动具体实现
    const moveCar = () => {
      dest.latitude += 0.001
      dest.longitude += 0.001
      map.translateMarker({
        destination: {
          latitude: dest.latitude,
          longitude: dest.longitude,
        },
        markerId: 0,
        autoRotate: false,
        rotate: 0,
        duration: 3000,
        animationEnd: () => {
          if (this.pageShowing) {
            moveCar()
          }
        },
      })
    }
    moveCar()
  }
},
)