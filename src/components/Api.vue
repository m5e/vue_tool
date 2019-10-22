<template>
  <v-container>
    <v-row>
    <v-col cols="2"></v-col>
    <v-col cols="7">
      <v-text-field
        v-model="keyWord"
        label="検索"
        outlined>
      </v-text-field>
    </v-col>
    <v-col cols="3">
      <v-btn height="55" width="80" @click="searchYoutube(keyWord)"><i class="material-icons">search</i></v-btn>
    </v-col>
    </v-row>
    <ul v-for="(item, index) in result.items" :key="item.title">
      <li v-if="index === 0">
        <p>{{item.snippet.channelTitle}}</p>
        <img :src="item.snippet.thumbnails.default.url"/>
        <p>説明</p>
        <p>{{item.snippet.description}}</p>
      </li>
      <li v-else-if="index > 0">
        <p>{{item.snippet.title}}</p>
        <img :src="item.snippet.thumbnails.medium.url"/>
      </li>
    </ul>
  </v-container>
</template>

<script>
import YouTube from './../../node_modules/youtube-node'

const youtube = new YouTube()
youtube.setKey('apikey')

export default {
  data: () => ({
    showResult: false,
    result: '',
    keyWord:''
  }),
  computed: {
  //
},
  mounted () {
    this.searchYoutubeResult()
  },
  methods: {
    async searchYoutubeResult (keyWord) {
      let searchWord = 'vue.js'
      if (keyWord) searchWord = keyWord

      youtube.search(searchWord, 10, (error, result) => {
        if (error) console.log(error)
      this.result = result
      })
    },
    searchYoutube (keyWord) {
      this.searchYoutubeResult(keyWord)
    }
  }
};
</script>
