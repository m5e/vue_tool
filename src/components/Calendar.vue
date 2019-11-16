<template>
  <v-sheet height="750">
    <v-btn color="blue-grey" text rounded @click="$refs.calendar.prev()">
      <v-icon large>keyboard_arrow_left</v-icon>
    </v-btn>
    <v-btn color="blue-grey" text rounded @click="$refs.calendar.next()">
      <v-icon large>keyboard_arrow_right</v-icon>
    </v-btn>
    <v-calendar
      ref="calendar"
      v-model="start"
      type="month"
      class="pt-5"
      color="primary"
      :events="holidaysList"
      :event-color="getHolidayColor"
      @click:date="clickDate"
    />
    <v-dialog v-model="isShowDateDialog" max-width="330px">
      <v-card>
        <v-card-title>{{ selectedDate }}</v-card-title>
        <v-spacer />
        <v-btn @click="isShowDateDialog = false" outlined color="green">close</v-btn>
      </v-card>
    </v-dialog>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    //prev(),next() の実行に必要
    start: null,
    end: null,
    holidaysList: [],
    selectedDate: "",
    isShowDateDialog: false
  }),

  mounted() {
    this.setDate();
    this.getHolidays();
  },

  methods: {
    setDate() {
      const dateObject = new Date();
      const year = dateObject.getFullYear();
      const month = dateObject.getMonth() + 1;
      const date = dateObject.getDate();
      this.start = year + "-" + month + "-" + date;
    },
    getHolidays() {
      const tmpHolidaysList = require("./../json/holidays.json"); // TODO：API で取得する実装
      tmpHolidaysList.forEach(data => {
        this.holidaysList.push({
          name: data.text,
          start: data.date,
          end: data.date,
          color: "teal"
        });
      });
    },
    // 祝日の色を指定
    getHolidayColor(event) {
      return event.color;
    },
    clickDate() {
      this.selectedDate = this.start;
      this.isShowDateDialog = true;
    }
  }
};
</script>
