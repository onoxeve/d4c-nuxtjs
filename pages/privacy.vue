<template>
  <v-row justify="center">
    <v-col cols="12" class="text-center headline mt-2">
      <h1>Privacy Policy</h1>
    </v-col>

    <v-col cols="11" xs="11" sm="8">
      <v-card outlined>
        <v-card-text v-html="$md.render(privacy.fields.body)" />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import client from '~/plugins/contentful.js'

export default {
  head() {
    return {
      title: 'title',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'description'
        }
      ]
    }
  },
  asyncData({ env }) {
    return Promise.all([
      client.getEntries({
        content_type: env.CTF_PRIVACY_TYPE_ID
      })
    ])
      .then(([privacy]) => {
        return {
          privacy: privacy.items[0]
        }
      })
      .catch(console.error)
  }
}
</script>

<style scoped>
h1 {
  color: rgba(0, 0, 0, 0.7);
}
</style>
