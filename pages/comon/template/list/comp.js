// pages/comon/template/list/comp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    todo: {
      type: Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toAccept (e) {
      wx.navigateTo({
        url: '/pages/comon/page/reward_detail/reward_detail',
        success: function(res){
          // success
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
      })
    }
  }
})
