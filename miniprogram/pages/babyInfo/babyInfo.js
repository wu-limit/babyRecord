// miniprogram/pages/babyInfo/babyInfo.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: wx.getStorageSync('userInfo') || {},
    birthday: '请选择',
    name: '',
    weight: '请选择',
    height: '请选择',
    gestational: '请选择',
    weightArray: [
      ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
      ['.1kg', '.2kg', '.3kg', '.4kg', '.5kg', '.6kg', '.7kg', '.8kg', '.9kg']
    ],
    heightArray: [
      ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80'],
      ['.0cm', '.1cm', '.2cm', '.3cm', '.4cm', '.5cm', '.6cm', '.7cm', '.8cm', '.9cm']
    ],
    gestationalArray: [
      ['28周', '29周', '30周', '31周', '32周', '33周', '34周', '35周', '36周', '37周', '38周', '39周', '40周', '41周', '42周'],
      ['+0天', '+1天', '+2天', '+3天', '+4天', '+5天', '+6天']
    ],
    gender: [{
        name: '0',
        value: '小王子',
        checked: 'true'
      },
      {
        name: '1',
        value: '小公主'
      }
    ]
  },
  bindDateChange: function(e) {
    this.setData({
      birthday: e.detail.value
    })
  },
  bindWeightChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    const first = e.detail.value[0]
    const second = e.detail.value[1]
    this.setData({
      weight: this.data.weightArray[0][first] + this.data.weightArray[1][second]
    })
  },
  bindHeightChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    const first = e.detail.value[0]
    const second = e.detail.value[1]
    this.setData({
      height: this.data.heightArray[0][first] + this.data.heightArray[1][second]
    })
  },
  bindGestationalChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    const first = e.detail.value[0]
    const second = e.detail.value[1]
    this.setData({
      gestational: this.data.gestationalArray[0][first] + this.data.gestationalArray[1][second]
    })
  },
  radioChange: function(e) {
    console.log('radio携带的值为', e.detail.value)
  },
  //更新数据到data
  formSave(e) {
    var formdata = e.detail.value
    this.setData({
      "data.birthday": formdata.birthday,
      "data.name": formdata.babyName,
      "data.sex": formdata.sex,
      "data.weight": formdata.weight,
      "data.height": formdata.height,
      "data.gestational": formdata.gestational
    })
  },
  //将新数据保存到云存储
  updateData(e) {
    var getdata = this.data;
    const db = wx.cloud.database();
    db.collection("babyinfo").add({
      data: {
        birthday: getdata.data.birthday,
        name: getdata.data.name,
        sex: getdata.data.sex,
        weight: getdata.data.weight,
        height: getdata.data.height,
        gestational: getdata.data.gestational
      }
    }).then(res => {
      console.log("添加成功", res)
      wx.showToast({
        title: '保存成功',
        icon: 'none',
        duration: 1000,
        success: function() {
          setTimeout(function() {
            //要延时执行的代码
            wx.navigateBack({
              delta: 1
            })
          }, 1000) //延迟时间
        }
      })
    }).catch(res => {
      console.log("添加失败", res)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this //此处一定要写
    db.collection('babyinfo').where({
      _openid: 'o_rb74vEASdUqHOgCCB7t_LXnROE'
    })
    .get({
      success: function(res) {
        console.log(res.data[0])
        that.setData({ //此处用的是上面定义的this
          birthday: res.data[0].birthday,
          name: res.data[0].name,
          sex: res.data[0].sex,
          weight: res.data[0].weight,
          height: res.data[0].height,
          gestational: res.data[0].gestational
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})