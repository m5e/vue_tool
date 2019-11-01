export default {
  data:{
    // スクロールするボタンの表示/非表示を制御
    isShowScrollButton: false
  },
  methods: {
    // ページトップにスクロールさせるボタンの表示 / 非表示を制御
    handleScrollButton () {
      this.isShowScrollButton = window.scrollY >= 50
    },
    //ページ上部へスクロール
    goTopPage () {
      this.$vuetify.goTo(0)
    }
  }
}