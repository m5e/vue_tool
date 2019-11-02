<template>
  <v-treeview
    v-model="tree"
    :open="open"
    :items="items"
    item-key="name"
    open-all
    transition
  >
    <template v-slot:prepend="{ item, open }">
      <i
        v-if="!item.file"
        class="material-icons"
      >
        {{ open ? 'folder_open' : 'folder' }}
      </i>
      <i
        v-else
        class="material-icons"
      >
        {{ files[item.file] }}
      </i>
    </template>
  </v-treeview>
</template>

<script>
export default {
  data: () => ({
    // 定義必須(配列)
    open: [],
    // 定義必須
    tree: [],
    files: {
      png: 'image',
      mp3: 'music_video',
      mp4: 'local_movies',
      txt: 'insert_drive_file',
      md: 'description',
      strage: 'sd'
    },
    items: [
      {
        name: 'PerfLogs',
        children: [
            { name: 'image',
              children: [
                {
                  name: 'sample.png',
                  file: 'png'
                }
              ]
            },
          {
            name: 'movie',
            children: [
              {
                name: 'movie.mp4',
                file: 'mp4'
              }
            ]
          },
          {
            name: 'music',
            children: [
              {
                name: 'music.mp3',
                file: 'mp3'
              }
            ]
          },
          {
            name: 'document',
            children: [
              {
                name: 'old',
                children: [
                  {
                    name: 'sample.txt',
                    file: 'txt'
                  }
                ]
              },
              {
                name:'current',
                children: [
                  { name: 'sample2.txt',
                    file: 'txt'
                  },
                  { name: 'sample3.txt',
                    file: 'txt'
                  },
                  {
                    name: 'md',
                    children: [
                      {
                        name: 'sample.md',
                        file: 'md'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'hobby',
        children: [
          {
            name: 'sd-card',
            file: 'strage'
          }
        ]
      }
    ]
  })
};
</script>


<style scoped>
</style>
