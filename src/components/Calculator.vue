<template>
  <v-card class="mx-auto pr-4" raised color="grey" height="480px" width="315px">
    <v-row>
      <v-col class="ml-5" cols="11">
        <v-text-field
          type="text"
          width="220px"
          height="120px"
          :value="viewNum"
          style="background-color:white"
          readonly
        />
      </v-col>
      <v-col class="ml-1" cols="3">
        <v-list-item v-for="(item, index) in items" :key="`first-${index}`">
          <div class="pl-1 pb-2" v-for="(itemNum, index) in item" :key="`second-${index}`">
            <v-btn
              class="primary"
              height="60px"
              @click="setInputValue(itemNum)"
              :v-model="itemNum"
            >{{itemNum}}</v-btn>
          </div>
        </v-list-item>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    viewNum: [],
    tmpNum: "",
    items: [
      ["7", "8", "9", "/"],
      ["4", "5", "6", "*"],
      ["1", "2", "3", "-"],
      ["0", "AC", "+", "="]
    ],
    isOutputed: false
  }),
  mounted() {
    //
  },
  methods: {
    // TODO:少数対応
    setInputValue(itemNum) {
      if (itemNum === "AC") {
        this.viewNum = [];

        return;
      } else if (this.viewNum.length === 0) {
        if (itemNum === ("+" || "-" || "*" || "/")) return;

        this.viewNum = itemNum;
      } else {
        if (itemNum === "=") {
          if (!this.isOutputed) {
            this.viewNum = eval(this.viewNum);
            this.isOutputed = true;
          }

          return;
        }

        if (String(this.viewNum).indexOf("0") === 0) {
          this.viewNum = itemNum;
          this.isOutputed = false;

          return;
        }

        this.viewNum = this.viewNum + itemNum;
        this.isOutputed = false;
      }
    }
  }
};
</script>

<style scoped>
</style>
