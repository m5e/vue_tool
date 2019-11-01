<template>
  <v-layout>
    <v-flex>
      <v-container grid-list-md>
        <a v-if="isShowAnchor" @click="getDownloadTarget" :href="targetImage" target="_blank">選択した画像を別タブで表示</a>
        <v-layout row wrap>
          <v-flex v-for="(n, index) in 12" :key="n" md3 :class= "{active: selectedImage === index}">
            <v-img
              :src="`https://picsum.photos/500/300?image=${n * imageNumber + 10}`"
              :lazy-src="`https://picsum.photos/10/6?image=${n * imageNumber + 10}`"
              aspect-ratio="1"
              @click="chackImageStatus(index)"
            >
              <template v-slot:placeholder>
                <v-layout fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
              </template>
            </v-img>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    imageNumber: 2,
    min: 1,
    max: 12,
    // 選択中の画像
    selectedImage: 99,
    // 選択した画像のURL
    targetImage: '',
    // 選択した画像のURLに遷移するための a タグの表示/非表示を制御
    isShowAnchor: false
  }),
  mounted () {
    // 画像をランダムで表示
    this.$nextTick(() => {
      this.imageNumber =  Math.floor(Math.random() * this.max + this.min)
    })
  },
  methods: {
    // 選択 / 未選択状態を切り替える
    chackImageStatus (imageIndex) {
      const isSelectedImage = this.selectedImage === imageIndex
  　    if (isSelectedImage) {
          this.isShowAnchor = false
          return
        }

      this.selectedImage = imageIndex
      this.isShowAnchor = true
    },
    getDownloadTarget () {
      // 選択中の画像のエレメントを取得
      const selected = this.$el.getElementsByClassName('active')[0]
      if (!selected) return

      const parent = selected.children[0]
      const targetElement = parent.children[1]
      const cssText = targetElement.style.cssText

      const strexp = /https\:\/\/[a-z]*\.[a-z]*\/[0-9]*\/[0-9]*\?image\=[0-9]*/
      // 画像のURL取得
      this.targetImage = cssText.match(strexp)[0]
    }
  }
};
</script>

<style scoped>
.active {
  border: 2px aqua solid;
}
</style>
