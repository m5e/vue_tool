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
    // 表示用の変数
    viewNum: "",
    // 計算用の変数
    tmpNum: [],
    items: [
      ["7", "8", "9", "÷"],
      ["4", "5", "6", "×"],
      ["1", "2", "3", "-"],
      ["0", "AC", "+", "="]
    ],
    // 出力済みフラグ
    isOutputed: false,
    // 直前に入力された演算子の種類
    isOperator: "",
    // 直前に演算子が入力されているか否かを確認するフラグ
    isOperatorFlg: false,
    textFieldStyle: {
      "background-color": "azure"
    }
  }),
  methods: {
    setInputValue(itemNum) {
      const item = itemNum;

      if (item === "AC") {
        this.viewNum = "";
        this.tmpNum = [];

        return;
      }

      if (this.tmpNum.length === 0) {
        if (
          item === "+" ||
          item === "-" ||
          item === "×" ||
          item === "÷" ||
          item === "="
        ) {
          return;
        }

        this.tmpNum.push(item);
        this.viewNum = this.tmpNum.join("");
      } else if (this.tmpNum.length > 0) {
        if (item === "+" || item === "-" || item === "×" || item === "÷") {
          if (!this.isOperatorFlg) {
            this.isOperator = item;
            this.isOperatorFlg = true;

            this.tmpNum.push(item);
            this.viewNum = this.tmpNum.join("");

            return;
          } else if (this.isOperatorFlg && item === this.isOperator) {
            return;
          } else if (this.isOperatorFlg && item !== this.isOperator) {
            this.tmpNum.push(item);
            this.viewNum = this.tmpNum.join("");

            return;
          }
        }

        if (item === "=") {
          if (!this.isOutputed) {
            this.viewNum = String(
              this.tmpNum
                .join("")
                .replace(/×/, "*")
                .replace(/÷/, "/")
            );

            this.viewNum = new Function("return " + this.viewNum)();

            // 初期化
            this.tmpNum.length = 0;

            this.tmpNum[0] = this.viewNum;

            this.isOutputed = true;
            this.isOperator = "";
            this.isOperatorFlg = false;
          }

          return;
        } else if (String(this.viewNum).indexOf("0") === 0) {
          this.tmpNum[0] = item;
          this.viewNum = this.tmpNum[0];
          this.isOutputed = false;

          return;
        } else {
          this.tmpNum.push(item);
          this.viewNum = this.tmpNum.join("");
          this.isOutputed = false;
        }
      }
    }
  }
};
</script>
