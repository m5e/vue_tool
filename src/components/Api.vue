<template>
  <v-container>
    <!-- <p>{{result.data.results}}</p>
    <ul v-for="re in result.data.results" :key="re.trackId">
      <li>
        <img :src="re.artworkUrl100" :art="re.trackName"/>
        {{re.country}}{{re.artistName}}
      </li>
    </ul> -->
    <p>{{result.items}}</p>
    <ul v-for="item in result.items" :key="item.title">
      <li>{{item.snippet}}</li>
    </ul>
  </v-container>
</template>

<script>
// import axios from './../../node_modules/axios'
import YouTube from './../../node_modules/youtube-node'

const youtube = new YouTube()
youtube.setKey('取得した自身のapikey')

export default {
  data: () => ({
    showResult: false,
    result: ''
  }),
  computed: {
  //
},
  mounted () {
    this.searchApiResult()
  },
  methods: {
    async searchApiResult () {
    //   this.result = await axios.get(`//itunes.apple.com/search?term=""&country=jp&entity=musicVideo`)
    youtube.search('keyword', 10, (error, result) => {
      if (error) console.log(error)
      this.result = result
    })
    }
  }
};
</script>
