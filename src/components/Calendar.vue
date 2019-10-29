<template>
  <v-sheet height="500">
    <v-btn color="blue-grey" text rounded @click="$refs.calendar.prev()">
      <v-icon large>keyboard_arrow_left</v-icon>
    </v-btn>
    <v-btn color="blue-grey" text rounded @click="$refs.calendar.next()">
      <v-icon large>keyboard_arrow_right</v-icon>
    </v-btn>
    <v-calendar
      type="month"
      class="pt-5"
      ref="calendar"
      v-model="start"
      color="primary"
      :events="holidaysList"
      :event-color="getHolidayColor"
    ></v-calendar>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    //prev(),next() の実行に必要
    start: '2019-10-01',
    holidaysList: []
  }),

  mounted () {
    this.getHolidays()
  },

  methods: {
    // リポジトリ内の json から祝日の一覧を取得
    getHolidays () {
      const tmpHolidaysList = require('./../json/holidays.json') // TODO：API で取得する実装
      tmpHolidaysList.forEach((data) => {
        this.holidaysList.push({name: data.text, start: data.date, end: data.date, color: 'teal'})
      });
    },

    // 祝日の色を指定
    getHolidayColor (event) {
        return event.color
    }
  }
};
</script>
