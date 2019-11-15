<template>
  <v-card class="mx-auto pr-4" raised color="grey" height="540px" width="315px">
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
    // 表示用の変数
    viewNum: "0",
    // 計算用の変数
    tmpNum: ["0"],
    items: [
      ["7", "8", "9", "÷"],
      ["4", "5", "6", "×"],
      ["1", "2", "3", "-"],
      [".", "0", "=", "+"],
      ["😎", "AC", "C"]
    ],
    // 出力済みフラグ
    isOutputed: false,
    // 直前に入力された演算子の種類
    isOperator: "",
    // 演算子の入力を確認
    isOperatorFlg: false,
    textFieldStyle: {
      "background-color": "azure"
    }
  }),
  methods: {
    setInputValue(itemNum) {
      if (itemNum === "😎") {
        // eslint-disable-next-line no-console
        console.log("hello");
        return;
      }

      const item = itemNum;

      if (item === "AC") {
        this.viewNum = "0";
        this.tmpNum.length = 0;
        this.tmpNum.push("0");
        this.isOperator = "";
        this.isOperatorFlg = false;

        return;
      } else if (item === "C") {
        if (this.tmpNum.length === 1) {
          if (this.tmpNum[0] === "0") return;
          this.tmpNum[0] = "0";
          this.viewNum = this.tmpNum.join("");
          return;
        } else if (this.tmpNum.length > 0) {
          this.tmpNum.pop();
          this.viewNum = this.tmpNum.join("");
          return;
        }
      } else if (item === "+" || item === "-" || item === "×" || item === "÷") {
        if (this.tmpNum.length === 1) {
          if (item === "0") return;

          this.isOperator = item;
          this.isOperatorFlg = true;
          this.isOutputed = false;

          this.tmpNum.push(item);
          this.viewNum = this.tmpNum.join("");
          return;
        } else if (this.tmpNum.length > 1) {
          if (!this.isOperatorFlg) {
            this.isOperator = item;
            this.isOperatorFlg = true;
            this.isOutputed = false;

            this.tmpNum.push(item);
            this.viewNum = this.tmpNum.join("");
            return;
          } else if (this.isOperatorFlg && item === this.isOperator) {
            return;
          } else if (this.isOperatorFlg && item !== this.isOperator) {
            this.isOperator = item;
            this.isOutputed = false;

            let lastTmpNum = this.tmpNum[this.tmpNum.length - 1];

            if (
              lastTmpNum === "+" ||
              lastTmpNum === "-" ||
              lastTmpNum === "×" ||
              lastTmpNum === "÷"
            ) {
              lastTmpNum = item;
              this.viewNum = this.tmpNum.join("");

              return;
            }

            this.tmpNum.push(item);
            this.viewNum = this.tmpNum.join("");

            return;
          }
        }
      } else if (item === "=") {
        if (!this.isOutputed) {
          this.tmpNum.forEach((num, index) => {
            if (num === "×") this.tmpNum[index] = "*";
            if (num === "÷") this.tmpNum[index] = "/";
          });

          const lastTmpNum = this.tmpNum[this.tmpNum.length - 1];

          if (
            lastTmpNum === "+" ||
            lastTmpNum === "-" ||
            lastTmpNum === "*" ||
            lastTmpNum === "/"
          ) {
            this.tmpNum.pop();
          }

          this.viewNum = this.tmpNum.join("");

          const result = new Function("return " + this.viewNum)();
          this.viewNum = String(Math.round(result * 10) / 10);

          // 初期化
          this.tmpNum.length = 0;

          if (this.viewNum < 0) {
            // TODO:演算子と切り分けて格納
          } else if (0 <= this.viewNum < 10) {
            this.viewNum = String(this.viewNum);
            this.tmpNum[0] = this.viewNum;
          } else if (10 <= this.viewNum) {
            // TODO:分割して格納
          }

          this.isOutputed = true;
          this.isOperator = "";
          this.isOperatorFlg = false;
        }

        return;
      } else {
        if (this.tmpNum.length == 1 && this.tmpNum[0] === "0") {
          if (item === "0") return;

          if (item === ".") {
            this.tmpNum.push(item);
            this.viewNum = this.tmpNum.join("");
            this.isOutputed = false;
            this.isOperator = item;
            this.isOperatorFlg = true;
            return;
          }

          this.isOutputed = false;
          this.isOperator = "";

          this.tmpNum[0] = item;
          this.viewNum = item;

          return;
        }

        if (this.isOperator === item) return;

        this.isOutputed = false;
        this.isOperator = "";

        this.tmpNum.push(item);
        this.viewNum = this.tmpNum.join("");
      }
    }
  }
};
</script>
