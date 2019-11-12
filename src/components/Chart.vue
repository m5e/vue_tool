<template>
  <v-layout row wrap>
    <v-flex>
      <LineGraph />
      <v-divider class="mt-8 mb-8" />
      <HorizontalBar />
      <v-divider class="mt-8 mb-8" />
      <PieCharts />
    </v-flex>
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
  </v-layout>
</template>
<script>
import HorizontalBar from "./HorizontalBarCharts";
import common from "./../util/common";
import LineGraph from "./LineGraph";
import PieCharts from "./PieCharts";

export default {
  mixins: [common],
  data() {
    return {
      //
    };
  },
  components: {
    LineGraph,
    PieCharts,
    HorizontalBar
  }
};
</script>
