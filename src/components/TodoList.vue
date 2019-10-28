<template>
  <v-container>
    <v-img class="background-image" src="./../images/IMG_000.jpg">
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
      <h2 class="display-2 black--text pl-4 pt-5 font-weight-bold">
        To Do List
        <v-fade-transition leave-absolute></v-fade-transition>
        <v-divider class="mt-4"></v-divider>
      </h2>
      <v-row
        class="my-1"
        align="center"
      >
        <strong class="title black--text font-weight-bold mx-4 pl-2 pr-2">
          Todo: {{ TodoTasks }}
        </strong>
        <v-divider vertical></v-divider>
        <strong class="title black--text font-weight-bold mx-4 pl-2 pr-2">
          Done: {{ DoneTasks }}
        </strong>

        <v-spacer></v-spacer>

        <v-progress-circular
          :value="progress"
          class="mr-5"
          color="teal accent-4"
        ></v-progress-circular>
      </v-row>
      <v-divider class="mb-4"></v-divider>

      <v-col cols="12">
        <v-btn @click="deleteTasks" outlined color="black">delete</v-btn>
      </v-col>
      <v-snackbar v-model="snackbar.showSnackbar" :timeout="snackbar.timeout" color="pink lighten-2" top>
        {{ this.snackbar.message }}
      </v-snackbar>

      <v-card v-if="tasks.length > 0" outlined class="task-lists mt-4">
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
                  color="black"
                >
                  <template v-slot:label>
                    <div
                      :class="task.done && 'grey--text' || 'text--primary'"
                      class="font-weight-bold ml-4"
                      v-text="task.text"
                    ></div>
                  </template>
                </v-checkbox>
              </v-list-item-action>

              <v-spacer></v-spacer>

              <v-scroll-x-transition>
                <v-icon
                  v-if="task.done"
                  color="black"
                >
                  done
                </v-icon>
              </v-scroll-x-transition>
            </v-list-item>
          </template>
        </v-slide-y-transition>
      </v-card>
    </v-img>
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
        }
],
      task: null,
      snackbar: {
        showSnackbar: false,
        message: '削除対象のタスクが選択されていません',
        timeout: 2000
      }
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
    // タスク追加
    createTask () {
      if(!this.task) return

      this.tasks.push({
        done: false,
        text: this.task
      })

      // 入力欄の初期化
      this.task = null
    },

    // タスク削除
    deleteTasks () {
      this.snackbar.showSnackbar = false

　　　const isCompletedTask = this.tasks.some((task) => task.done === true)
      if (!isCompletedTask) {
        this.snackbar.showSnackbar = true
        return
      }

      // index が若い順に処理を行うと index がずれて一番最後が残ってしまうため、下から消す
      for (let i = this.tasks.length - 1; i >= 0; i-- ) {
        if (this.tasks[i].done) this.tasks.splice(i, 1)
      }
    }
  }
};
</script>

<style scoped>
.total-tasks {
  background-color: black
}
.grey--text {
  text-decoration: line-through
}
.background-image {
  opacity: 0.9;
}
.task-lists {
  opacity: 0.7;
}
</style>
