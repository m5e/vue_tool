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
      type="month"
      v-model="start"
      class="pt-5"
      :events="holidaysList"
      :event-color="getHolidayColor"
      color="primary"
      @click:date="clickedDate"
    />
    <v-dialog v-model="isShowDateDialog" max-width="350px">
      <v-card height="210px">
        <v-toolbar flat color="primary">
          <v-row>
            <v-toolbar-title>
              <v-btn text rounded @click="switchInputLimit(false)">
                <i class="material-icons">create</i>
              </v-btn>
            </v-toolbar-title>

            <v-spacer />

            <v-toolbar-items>
              <v-btn @click="switchInputLimit(true)" rounded text>
                <i class="material-icons">clear</i>
              </v-btn>
            </v-toolbar-items>
          </v-row>
        </v-toolbar>
        <v-card-title>{{ selectedDate }}</v-card-title>
        <v-text-field
          label="Outlined"
          outlined
          :filled="isFilled"
          :readonly="isReadonly"
          @keydown.enter="addHolidayList"
          v-model="plan"
        ></v-text-field>
        <v-spacer />
      </v-card>
    </v-dialog>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    // prev(),next() の実行に必要
    start: null,
    end: null,
    holidaysList: [],
    selectedDate: "",
    isShowDateDialog: false,
    isReadonly: true,
    isFilled: true,
    plan: ""
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
      const tmpHolidaysList = require("./../json/holidays.json"); // TODO：Process obtained by API
      tmpHolidaysList.forEach(data => {
        this.holidaysList.push({
          name: data.text,
          start: data.date,
          end: data.date,
          detail: null,
          color: "teal"
        });
      });
    },
    getHolidayColor(event) {
      return event.color;
    },
    clickedDate() {
      this.selectedDate = this.start;
      this.isShowDateDialog = true;
    },
    switchInputLimit(limit) {
      this.isReadonly = limit;
      this.isFilled = limit;
    },
    addHolidayList() {
      this.holidaysList.push({
        name: this.plan,
        start: this.start,
        end: this.start,
        detail: null,
        color: "primary"
      });

      // ダイアログを閉じる
      this.isShowDateDialog = false;
      this.switchInputLimit(true);
    }
  }
};
</script>
