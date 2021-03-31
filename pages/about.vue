<template>
  <v-row justify="center">
    <v-col cols="12" class="text-center mt-5 mt-md-12">
      <h1 class="display-2 font-weight-bold">
        About Us
      </h1>
    </v-col>

    <v-sheet width="100%" align="center" class="mt-12">
      <v-col cols="12" class="text-center headline mt-8">
        <h2>Our Mission</h2>
      </v-col>

      <v-col cols="12" class="text-center mt-7 mt-md-10">
        <h3 class="headline font-weight-bold">
          sample
        </h3>
        <h3 class="subtitle-1 font-weight-bold">
          sample
        </h3>
      </v-col>
      <v-col cols="10" xs="10" sm="6" class="text-left">
        sample
      </v-col>
    </v-sheet>

    <v-sheet width="100%" align="center" class="pb-10">
      <v-col cols="12" class="text-center mt-7 mt-md-12">
        <h3 class="headline font-weight-bold">
          sample
        </h3>
        <h3 class="subtitle-1 font-weight-bold">
          sample
        </h3>
      </v-col>
      <v-col cols="10" xs="10" sm="6" class="text-left">
        sample
      </v-col>
    </v-sheet>

    <v-col cols="12" class="text-center font-weight-bold title mt-7">
      <h2>Our History</h2>
    </v-col>

    <v-col cols="12" xs="10" sm="6" md="6" lg="6" class="text-left">
      <v-timeline dense>
        <v-timeline-item v-for="(year, i) in years" :key="i" color="blue" small>
          <span v-text="year.year" class="title font-weight-bold blue--text" />
          <div class="py-4">
            <h3 class="subtitle-1 font-weight-light mb-4">
              {{ year.title }}
            </h3>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-col>
  </v-row>
</template>

<script>
// import { createClient } from '~/plugins/contentful.js'
// const client = createClient()

export default {
  data: () => ({
    years: [
      {
        year: '2017.10',
        title: 'sample'
      },
      {
        year: '2019.9',
        title: 'sample'
      }
    ]
  }),
  head() {
    return {
      title: 'sample | sample',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'sample'
        }
      ]
    }
  }
  // asyncData({ env }) {
  //   return Promise.all([
  //     client.getEntries({
  //       content_type: env.CTF_ABOUT_TYPE_ID
  //     })
  //   ])
  //     .then(([about]) => {
  //       return {
  //         about: about.items[0]
  //       }
  //     })
  //     .catch(console.error)
  // }
}
</script>

<style scoped>
h1,
h2,
h3 {
  color: rgba(0, 0, 0, 0.7);
}

.v-sheet {
  color: rgba(0, 0, 0, 0.7);
}
</style>
