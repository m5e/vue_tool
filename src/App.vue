<template>
  <v-app>
    <v-toolbar>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>さくせいちゅう</v-toolbar-title>
    <v-toolbar-items>
      <v-btn text @click="swichPage(0)">DateTime</v-btn>
      <v-btn text @click="swichPage(1)">Todo</v-btn>
      <v-btn text @click="swichPage(2)">Calendar</v-btn>
      <v-btn text @click="swichPage(3)">picture</v-btn>
    </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <DateTime v-if="page === 0"/>
      <TodoList v-if="page === 1"/>
      <Calendar v-if="page === 2"/>
      <Picture v-if="page === 3"/>
    </v-content>
  </v-app>
</template>

<script>
import DateTime from './components/DateTime';
import Calendar from './components/Calendar';
import TodoList from './components/TodoList';
import Picture from './components/Picture';

export default {
  name: 'App',
  components: {
    DateTime,
    Calendar,
    TodoList,
    Picture
  },
  data: () => ({
    page: 0,
  }),
  mounted () {
    this.swichPage()
  },
  methods: {
    swichPage (num) {
      this.page = num
    }
  }
};
</script>
