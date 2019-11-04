<template>
  <v-card class="mx-auto pr-4" raised color="grey" height="480px" width="315px">
    <v-row>
      <v-col class="ml-5" cols="11">
        <v-text-field
          type="text"
          width="220px"
          height="120px"
          :value="viewNum"
          :style="textFieldStyle"
          readonly
        />
      </v-col>
      <v-col class="ml-1" cols="3">
        <v-list-item v-for="(item, index) in items" :key="`first-${index}`">
          <div class="pl-1 pb-2" v-for="(itemNum, index) in item" :key="`second-${index}`">
            <v-btn class="primary" height="60px" @click="setInputValue(itemNum)" :v-model="itemNum">
              <span style="font-size:20px">{{itemNum}}</span>
            </v-btn>
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
    items: [
      ["7", "8", "9", "/"],
      ["4", "5", "6", "*"],
      ["1", "2", "3", "-"],
      ["0", "AC", "+", "="]
    ],
    isOutputed: false,
    textFieldStyle: {
      "background-color": "azure"
    }
  }),
  methods: {
    setInputValue(itemNum) {
      const item = itemNum;

      if (item === "AC") {
        this.viewNum = [];

        return;
      } else if (item.length === 0) {
        this.viewNum = item;
      } else if (item.length > 0) {
        if (item === "=") {
          if (!this.isOutputed) {
            let result = new Function("return " + this.viewNum)();
            result = Math.round(result * 10);
            this.viewNum = result / 10;

            this.isOutputed = true;
          }

          return;
        } else if (String(this.viewNum).indexOf("0") === 0) {
          this.viewNum = item;
          this.isOutputed = false;

          return;
        } else {
          this.viewNum = this.viewNum + item;
          this.isOutputed = false;
        }
      }
    }
  }
};
</script>
