<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-container grid-list-sm>
        <v-layout row wrap>
          <v-flex v-for="n in 12" :key="n" xs4>
            <v-img
              :src="`https://picsum.photos/500/300?image=${n * 7 + 10}`"
              :lazy-src="`https://picsum.photos/10/6?image=${n * 7 + 10}`"
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
    //
  }),
};
</script>
