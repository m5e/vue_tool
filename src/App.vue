<template>
  <v-responsive :aspect-ratio="16/9">
    <v-app>
      <v-navigation-drawer v-model="isShowDrawer" absolute temporary>
        <p>
          <v-icon class="material-icons" large color="primary">account_box</v-icon>
          <span class="font-weight-medium">アカウント</span>
        </p>
        <p>
          <v-icon class="material-icons" large color="purple darken-1">supervised_user_circle</v-icon>
          <span class="font-weight-medium">作業報告書</span>
        </p>
        <p>
          <v-icon class="material-icons" large color="success">subway</v-icon>
          <span class="font-weight-medium">電車情報</span>
        </p>
      </v-navigation-drawer>
      <v-toolbar color="teal accent-4" height="60%">
        <v-app-bar-nav-icon @click.stop="isShowDrawer = !isShowDrawer" />
        <v-toolbar-title>さくせいちゅう</v-toolbar-title>
        <v-toolbar-items>
          <v-btn text @click="switchPage(0)">DateTime</v-btn>
          <v-btn text @click="switchPage(1)">Todo</v-btn>
          <v-btn text @click="switchPage(2)">Calendar</v-btn>
          <v-btn text @click="switchPage(3)">picture</v-btn>
          <v-btn text @click="switchPage(5)">Calculator</v-btn>
          <v-btn text @click="switchPage(6)">Chart</v-btn>
          <v-btn text @click="switchPage(7)">Treeview</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-content>
        <v-card min-height="800px">
          <DateTime v-if="page === 0" />
          <TodoList v-if="page === 1" />
          <Calendar v-if="page === 2" />
          <Picture v-if="page === 3" />
          <Calculator v-if="page === 5" />
          <Chart v-if="page === 6" />
          <Treeview v-if="page === 7" />
        </v-card>
      </v-content>
    </v-app>
  </v-responsive>
</template>

<script>
import Calculator from "./components/Calculator";
import Calendar from "./components/Calendar";
import DateTime from "./components/DateTime";
import Picture from "./components/Picture";
import TodoList from "./components/TodoList";
import Treeview from "./components/Treeview";
import Chart from "./components/Chart";

export default {
  name: "App",
  data: () => ({
    page: 0,
    //ハンバーガーメニューの表示/非表示を制御
    isShowDrawer: false
  }),
  components: {
    DateTime,
    TodoList,
    Calendar,
    Picture,
    Calculator,
    Treeview,
    Chart
  },
  mounted() {
    this.switchPage();

    // 初期表示時、page のマウント後に switchPage() を実行したいので
    // エレメントのマウント後に実行
    this.$nextTick(() => {
      this.switchPage(0);
    });
  },
  methods: {
    // ページ切替え
    switchPage(num) {
      this.page = num;
    }
  }
};
</script>
