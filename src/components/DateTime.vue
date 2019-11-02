<template>
  <v-container>
    <v-layout row>
      <v-flex
        grid-list-md
        text-center
        md2
      >
        <v-card color="blue-grey lighten-2">
          <v-card-text class="px-0 time year title">
            {{ year }}
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex
        grid-list-md
        text-center
        md2
      >
        <v-card color="blue-grey lighten-2">
          <v-card-text class="px-0 time month title">
            {{ month }}
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex
        grid-list-md
        text-center
        md2
      >
        <v-card color="blue-grey lighten-2">
          <v-card-text class="px-0 time day title">
            {{ day }}
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex
        grid-list-md
        text-center
        md2
      >
        <v-card color="blue-grey lighten-2">
          <v-card-text class="px-0 time hour title">
            {{ hours }}
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex
        grid-list-md
        text-center
        md2
      >
        <v-card color="blue-grey lighten-2">
          <v-card-text class="px-0 time minutes title">
            {{ minutes }}
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex
        grid-list-md
        text-center
        md2
      >
        <v-card color="blue-grey lighten-2">
          <v-card-text class="px-0 time seconds title">
            {{ seconds }}
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <br>
    <h2>{{ this.area }}のお天気</h2>
    <v-container
      v-for="forcast in this.forecastLists"
      :key="forcast.dateLabel"
      class="d-flex md-6"
    >
      <v-row
        v-for="data in forcast"
        :key="data.dateLabel"
      >
        <v-col cols="10">
          <v-card
            class="pt-2 pb-3 pl-4"
            outlined
            tile
          >
            <p class="font-weight-bold">
              {{ data.date }}
            </p>
            <p>{{ data.dateLabel }}の天気は{{ data.telop }}</p>
            <v-img
              :src="data.image.url"
              width="75"
              height="45"
            />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <p class="title">
      説明
    </p>
    <v-card-text
      class="subtitle-1"
      style="white-space: pre-line;"
    >
      {{ weatherResult.text }}
    </v-card-text>
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
        <i class="material-icons">
          arrow_upward
        </i>
      </v-btn>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import common from './../util/common'

const zeroPadding = (num, digit) => {
    return (Array(digit).join('0') + num).slice(-digit)
}

export default {
  inject: ['theme'],
  mixins: [common],
  data: () => ({
    date: new Date(),
    // webサーバから取得したデータ
    weatherResult: '',
    // 予測データ
    resultForecasts: [],
    // 整形後の予測データ
    forecastLists: [],
    // 対象エリア
    area:''
  }),
  computed: {
    year () {
      return this.date.getFullYear()
    },
    month () {
      return zeroPadding(this.date.getMonth() + 1, 2)
    },
    day () {
      return zeroPadding(this.date.getDate(), 2)
    },
    hours () {
      return zeroPadding(this.date.getHours(), 2)
    },
    minutes () {
      return zeroPadding(this.date.getMinutes(), 2)
    },
    seconds () {
      return zeroPadding(this.date.getSeconds(), 2)
    }
  },
  mounted () {
    this.setDate()
    setInterval(() => this.setDate(), 1000)
    this.getWetherData()
    this.goTopPage()
    this.handleScrollButton()
    this.shapingForecastData()
  },
  methods: {
    setDate () {
      this.date = new Date()
    },
   // webサーバから天気予報のデータを取得
    getWetherData () {
      this.$axios.get('http://localhost:3000/weather').then((res) => {
        this.weatherResult = res.data
        this.area = res.data.location.prefecture
        this.resultForecasts.push(res.data.forecasts)

        //予測データを整形
        this.shapingForecastData()
      }).catch(err => {
        // eslint-disable-next-line no-console
        console.log(err.response)
      });
    },
    shapingForecastData () {
      this.resultForecasts.forEach((re, index) => {
        this.forecastLists.push(this.resultForecasts[index])
      })
    }
  }
}

</script>
<style>
.fab-container {
  position: fixed;
  right: 0;
  bottom: 0;
}
.time {
  font-size: 20px;
}
.time:before {
  position: absolute;
  right: 5px;
  bottom: 1px;
}
.year:before {
  font-size: 15px;
  content: "year";
}
.month:before {
  font-size: 15px;
  content: "month";
}
.day:before {
  font-size: 15px;
  content: "day";
}
.hour:before {
  font-size: 15px;
  content: "hour";
}
.minutes:before {
  font-size: 15px;
  content: "minutes";
}
.seconds:before {
  font-size: 15px;
  content: "seconds";
}
</style>
