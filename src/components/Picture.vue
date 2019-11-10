<template>
  <v-layout>
    <v-flex>
      <v-container grid-list-md>
        <a
          v-if="isShowAnchor"
          :href="targetImage"
          target="_blank"
          @click="getDownloadTarget"
        >選択した画像を別タブで表示</a>
        <v-layout row wrap>
          <v-flex v-for="(n, index) in 12" :key="n" md3 :class="{active: selectedImage === index}">
            <v-card min-height="280px" @click="chackImageStatus(index)" color="#F5F5F5	">
              <v-img
                :src="`https://picsum.photos/500/300?image=${n * imageNumber + 10}`"
                :lazy-src="`https://picsum.photos/10/6?image=${n * imageNumber + 10}`"
                aspect-ratio="1"
              >
                <template v-slot:placeholder>
                  <v-layout fill-height align-center justify-center ma-0>
                    <v-progress-circular indeterminate color="grey lighten-5" />
                  </v-layout>
                </template>
              </v-img>
              <v-chip class="mt-2 ml-1" :color="keyword[index].color" outlined>
                <i class="material-icons mr-1">{{keyword[index].icon}}</i>
                <span>{{keyword[index].text}}</span>
              </v-chip>
            </v-card>
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
    targetImage: "",
    // 選択した画像のURLに遷移するための a タグの表示/非表示を制御
    isShowAnchor: false,
    // chip component
    keyword: [
      { text: "favorite", icon: "loyalty", color: "#DC143C" },
      { text: "travel", icon: "airplanemode_active", color: "#0000CD" },
      { text: "fun", icon: "insert_emoticon", color: "orange" },
      { text: "Going out", icon: "directions_walk", color: "#2E8B57" },
      { text: "cycling", icon: "directions_bike", color: "#00BFFF" },
      { text: "Parking area", icon: "local_parking", color: "#32CD32" },
      { text: "train", icon: "tram", color: "#9370DB" },
      { text: "work", icon: "home_work", color: "#FFCC00" },
      { text: "Break time", icon: "free_breakfast", color: "#CD853F" },
      { text: "shop", icon: "storefront", color: "#FF4F50" },
      { text: "out side", icon: "emoji_nature", color: "#EE82EE" },
      { text: "like", icon: "thumb_up_alt", color: "#4169E1" }
    ]
  }),
  mounted() {
    // 画像をランダムで表示
    this.$nextTick(() => {
      this.imageNumber = Math.floor(Math.random() * this.max + this.min);
    });
  },
  methods: {
    // 選択 / 未選択状態を切り替える
    chackImageStatus(imageIndex) {
      const isSelectedImage = this.selectedImage === imageIndex;
      if (isSelectedImage) {
        this.isShowAnchor = false;
        return;
      }

      this.selectedImage = imageIndex;
      this.isShowAnchor = true;
    },
    getDownloadTarget() {
      // 選択中の画像のエレメントを取得
      // ページのレイアウトを変更した際は要修正
      const selected = this.$el.getElementsByClassName("active")[0];
      if (!selected) return;
      const cardElement = selected.children[0];
      const parentElement = cardElement.children[0];
      const targetElement = parentElement.children[1];
      const cssText = targetElement.style.cssText;

      const strexp = /https:\/\/[a-z]*\.[a-z]*\/[0-9]*\/[0-9]*\?image=[0-9]*/;
      // 画像のURL取得
      this.targetImage = cssText.match(strexp)[0];
    }
  }
};
</script>

<style scoped>
.active {
  border: 2px aqua solid;
}
</style>
