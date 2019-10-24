<template>
  <v-container>
    <v-text-field
      v-model="task"
      label="Enter the task name to create"
      @keydown.enter="createTask"
    >
      <v-fade-transition v-slot:append>
        <v-icon
          v-if="task"
          @click="create"
        >
          add_circle
        </v-icon>
      </v-fade-transition>
    </v-text-field>
    <h2 class="display-1 success--text pl-4">
      Tasks:&nbsp;
      <v-fade-transition leave-absolute>
        <span :key="`tasks-${tasks.length}`">
          {{ tasks.length }}
        </span>
      </v-fade-transition>
      <v-divider class="mt-4"></v-divider>
    </h2>
    <v-row
      class="my-1"
      align="center"
    >
      <strong class="mx-4 info--text text--darken-3">
        Todo: {{ TodoTasks }}
      </strong>
      <v-divider vertical></v-divider>
      <strong class="mx-4 black--text">
        Done: {{ DoneTasks }}
      </strong>

      <v-spacer></v-spacer>

      <v-progress-circular
        :value="progress"
        class="mr-2"
      ></v-progress-circular>
    </v-row>
    <v-divider class="mb-4"></v-divider>
    <v-card v-if="tasks.length > 0">
      <v-slide-y-transition
        class="py-0"
        group
      >
      <template v-for="(task, i) in tasks">
          <v-divider
            v-if="i !== 0"
            :key="`${i}-divider`"
          ></v-divider>

          <v-list-item :key="`${i}-${task.text}`">
            <v-list-item-action>
              <v-checkbox
                v-model="task.done"
                color="info darken-3"
              >
                <template v-slot:label>
                  <div
                    :class="task.done && 'grey--text' || 'text--primary'"
                    class="ml-4"
                    v-text="task.text"
                  ></div>
                </template>
              </v-checkbox>
            </v-list-item-action>

            <v-spacer></v-spacer>

            <v-scroll-x-transition>
              <v-icon
                v-if="task.done"
                color="success"
              >
                ✓
              </v-icon>
            </v-scroll-x-transition>
          </v-list-item>
        </template>
      </v-slide-y-transition>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    tasks: [
        {
          done: false,
          text: 'task1',
        },
        {
          done: false,
          text: 'task2',
        },
        {
          done: false,
          text: 'task3',
        },
        {
          done: false,
          text: 'task4',
        },
        {
          done: false,
          text: 'task5',
        },
        {
          done: false,
          text: 'task6',
        },
        {
          done: false,
          text: 'task7',
        },
        {
          done: false,
          text: 'task8',
        },
        {
          done: false,
          text: 'task9',
        },
        {
          done: false,
          text: 'task10',
        },
],
      task: null,
  }),
  computed: {
    // 残タスク数を集計
    TodoTasks () {
      return this.tasks.length - this.DoneTasks
    },
    // 完了タスク数を集計
    DoneTasks () {
      return this.tasks.filter(task => task.done).length
    },
    // 進捗度を算出
    progress () {
      return this.DoneTasks / this.tasks.length * 100
    },
  },
  methods: {
    createTask () {
      this.tasks.push({
        done: false,
        text: this.task
      })
      // 入力欄の初期化
      this.task = null
    }
  }
};
</script>
