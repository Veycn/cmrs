// pages/comon/template/navBar/comp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
      navList: ["取送", "代买", "二手", "辅导", "兼职", "组队"],
      sortMethod: ["综合排序","智能排序", "离我最近", "好评优先", "销量最高"],
      activeId: "i0",
      curIndex: 0,
      sortBlockShow: false,
      curMethod: '综合排序',
      curMethodIndex: null,
    },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap (e) {
      console.log(e.currentTarget)
      const activeId = e.currentTarget.dataset.id
      const index = e.currentTarget.dataset.index
      this.setData({
        activeId: `i${activeId === 0 ? 0 : index - 1}`,
        curIndex: index
      })
    },
    onSort () {
      this._toggleShow()
    },
    changeMethod (e) {
      console.log(e)
      const index = e.currentTarget.dataset.index
      this.setData({
        curMethodIndex: index,
        curMethod: this.data.sortMethod[index]
      })
      this._toggleShow()
    },
    _toggleShow () {
      this.setData({
        sortBlockShow: !this.data.sortBlockShow
      })
    }
  }
})
