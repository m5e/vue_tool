<template>
  <v-container>
    <v-layout row>
      <v-flex grid-list-md text-center md2>
        <v-card dark color="blue-grey lighten-1">
          <v-card-text class="px-0 time year">{{ year }}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex grid-list-md text-center md2>
        <v-card dark color="blue-grey lighten-1">
          <v-card-text class="px-0 time month">{{ month }}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex grid-list-md text-center md2>
        <v-card dark color="blue-grey lighten-1">
          <v-card-text class="px-0 time day">{{ day }}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex grid-list-md text-center md2>
        <v-card dark color="blue-grey lighten-1">
          <v-card-text class="px-0 time hour">{{ hours }}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex grid-list-md text-center md2>
        <v-card dark color="blue-grey lighten-1">
          <v-card-text class="px-0 time minutes">
            {{ minutes }}
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex grid-list-md text-center md2>
        <v-card dark color="blue-grey lighten-1">
          <v-card-text class="px-0 time seconds">
            {{ seconds }}
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
const zeroPadding = (num, digit) => {
    return (Array(digit).join('0') + num).slice(-digit)
}

export default {
  data: () => ({
    date: new Date(),
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
    },
    eventsMap () {
      const map = {}
      this.events.forEach(e => (map[e.date] = map[e.date] || []).push(e))
      return map
    },
  },
  mounted () {
    this.setDate()
    setInterval(() => this.setDate(), 1000)
  },
  methods: {
    setDate () {
      this.date = new Date()
    }
  }
};
</script>
<style>
.fab-container {
  position: fixed;
  bottom: 0;
  right: 0;
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
