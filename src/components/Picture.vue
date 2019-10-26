<template>
  <v-layout>
    <v-flex>
      <v-text-field></v-text-field>
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex v-for="n in 12" :key="n" md3>
            <v-img
              class="image"
              :src="`https://picsum.photos/500/300?image=${n * imageNumber + 10}`"
              :lazy-src="`https://picsum.photos/10/6?image=${n * imageNumber + 10}`"
              aspect-ratio="1"
            >
              <template v-slot:placeholder>
                <v-layout fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
              </template>
            </v-img>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    imageNumber: 2,
    min: 1,
    max: 12
  }),
  mounted () {
    // 画像をランダムで表示
    this.$nextTick(() => {
      this.imageNumber =  Math.floor(Math.random() * this.max + this.min)
    })
  }
};
</script>
