<template>
  <v-responsive :aspect-ratio="16/9">
    <v-app>
      <v-toolbar>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>さくせいちゅう</v-toolbar-title>
        <v-toolbar-items>
          <v-btn text @click="switchPage(0)">DateTime</v-btn>
          <v-btn text @click="switchPage(1)">Todo</v-btn>
          <v-btn text @click="switchPage(2)">Calendar</v-btn>
          <v-btn text @click="switchPage(3)">picture</v-btn>
          <v-btn text @click="switchPage(4)">Api</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-content>
        <DateTime v-if="page === 0"/>
        <TodoList v-if="page === 1"/>
        <Calendar v-if="page === 2"/>
        <Picture v-if="page === 3"/>
        <Api v-if="page === 4"/>
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

export default {
  name: 'App',
  components: {
    DateTime,
    Calendar,
    TodoList,
    Picture,
    Api
  },
  data: () => ({
    page: 0
  }),
  mounted () {
    this.switchPage()
  },
  methods: {
    // ページ切替え
    switchPage (num) {
      this.page = num
    }
  }
};
</script>
