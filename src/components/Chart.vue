<template>
  <v-layout row wrap>
    <v-flex>
      <LineGraph />
      <v-divider class="mt-8 mb-8" />
      <PieCharts />
    </v-flex>
  </v-layout>
</template>
<script>
import LineGraph from "./LineGraph";
import PieCharts from "./PieCharts";

export default {
  data() {
    return {
      //
    };
  },
  components: {
    LineGraph,
    PieCharts
  }
};
</script>
