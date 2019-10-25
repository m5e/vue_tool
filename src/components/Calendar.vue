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
    ></v-calendar>
  </v-sheet>
</template>


<script>
export default {
  data: () => ({
    //prev(),next() の実行に必要
    start: '2019-10-01'
  }),
  mounted () {
   //
  },
  methods: {
    //
  }
};
</script>
