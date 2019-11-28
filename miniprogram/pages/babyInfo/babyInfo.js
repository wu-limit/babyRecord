// miniprogram/pages/babyInfo/babyInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    birthday: '请选择',
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
    gender: [
      { name: 'boy', value: '小王子', checked: 'true'},
      { name: 'gril', value: '小公主'}
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
  bindGestationalChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    const first = e.detail.value[0]
    const second = e.detail.value[1]
    this.setData({
      gestational: this.data.gestationalArray[0][first] + this.data.gestationalArray[1][second]
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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