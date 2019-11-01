<template>
  <v-responsive :aspect-ratio="16/9">
    <v-app>
      <v-navigation-drawer v-model="isShowDrawer" absolute temporary>
        <p>
          <v-icon class="material-icons" large>account_box</v-icon>
          アカウント
        </p>
        <p>
          <v-icon class="material-icons" large>supervised_user_circle</v-icon>
          作業報告書
        </p>
        <p>
          <v-icon class="material-icons" large>subway</v-icon>
          電車情報
        </p>
      </v-navigation-drawer>
      <v-toolbar color="teal accent-4" height="60%">
        <v-app-bar-nav-icon @click.stop="isShowDrawer = !isShowDrawer"></v-app-bar-nav-icon>
        <v-toolbar-title>さくせいちゅう</v-toolbar-title>
        <v-toolbar-items>
          <v-btn text @click="switchPage(0)">DateTime</v-btn>
          <v-btn text @click="switchPage(1)">Todo</v-btn>
          <v-btn text @click="switchPage(2)">Calendar</v-btn>
          <v-btn text @click="switchPage(3)">picture</v-btn>
          <v-btn text @click="switchPage(4)">Youtube</v-btn>
          <v-btn text @click="switchPage(5)">Treeview</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-content>
        <v-card>
        <DateTime v-if="page === 0"/>
        <TodoList v-if="page === 1"/>
        <Calendar v-if="page === 2"/>
        <Picture v-if="page === 3"/>
        <Api v-if="page === 4"/>
        <Treeview v-if="page === 5"/>
        </v-card>
      </v-content>
    </v-app>
  </v-responsive>
</template>

<script>
import DateTime from './components/DateTime';
import Calendar from './components/Calendar';
import TodoList from './components/TodoList';
import Picture from './components/Picture';
import Api from './components/Api';
import Treeview from './components/Treeview';

export default {
  name: 'App',
  components: {
    DateTime,
    Calendar,
    TodoList,
    Picture,
    Api,
    Treeview
  },
  data: () => ({
    page: 0,
    //ハンバーガーメニューの表示/非表示を制御
    isShowDrawer: false
  }),
  mounted () {
    this.switchPage()

    // 初期表示時、page のマウント後に switchPage() を実行したいので
    // エレメントのマウント後に実行
　　this.$nextTick(() => {
      this.switchPage(0)
    })
  },
  computed: {
    //
  },
  methods: {
    // ページ切替え
    switchPage (num) {
      this.page = num
    }
  }
}
</script>
