<template>
  <v-container>
    <v-row>
      <v-col cols="11" class="pl-8">
        <v-text-field
          v-model="keyWord"
          label="検索"
          outlined
          @keydown.enter="searchYoutube(keyWord)"
        />
      </v-col>
      <v-col cols="1">
        <v-btn height="55" width="80" @click="searchYoutube(keyWord)">
          <i class="material-icons">search</i>
        </v-btn>
      </v-col>
    </v-row>
    <ul v-for="(item, index) in result.items" :key="item.title">
      <li v-if="index === 0" class="pb-9">
        <v-card outlined color="grey lighten-3">
          <p class="title ml-5 font-weight-black">{{ item.snippet.channelTitle }}</p>
          <v-avatar class="ml-5" size="100">
            <v-img :src="item.snippet.thumbnails.default.url" />
          </v-avatar>
          <p class="mt-5 ml-5">{{ item.snippet.description }}</p>
        </v-card>
      </li>
      <li v-else-if="index > 0" class="pb-9 font-weight-black">
        <p>{{ item.snippet.title }}</p>
        <iframe
          width="700"
          height="500"
          :src="`https://www.youtube.com/embed/${item.id.videoId}`"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </li>
    </ul>
    <v-slide-y-transition>
      <v-btn
        v-show="isShowScrollButton"
        v-scroll="handleScrollButton"
        fab
        fixed
        bottom
        right
        color="teal accent-4"
        @click="goTopPage"
      >
        <i class="material-icons">arrow_upward</i>
      </v-btn>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import common from "./../util/common";
import YouTube from "./../../node_modules/youtube-node";

const youtube = new YouTube();
youtube.setKey("apikey");

export default {
  mixins: [common],
  data: () => ({
    showResult: false,
    // 検索結果
    result: "",
    // 検索ワード
    keyWord: ""
  }),
  computed: {
    //
  },
  mounted() {
    this.searchYoutubeResult();
    this.goTopPage();
    this.handleScrollButton();
  },
  methods: {
    async searchYoutubeResult(keyWord) {
      let searchWord = "vuetify";
      if (keyWord) searchWord = keyWord;

      youtube.search(searchWord, 10, (error, result) => {
        // eslint-disable-next-line no-console
        if (error) console.log(error);
        this.result = result;
      });
    },
    searchYoutube(keyWord) {
      this.searchYoutubeResult(keyWord);
    }
  }
};
</script>

<style>
li {
  list-style: none;
}
</style>