<template>
  <div>
    <v-sheet>
      <v-row justify="center">
        <v-col cols="12" xs="12" sm="6">
          <v-subheader
            v-text="$dateFns.format(item.sys.updatedAt, 'yyyy-MM-dd')"
            class="mt-1 mt-sm-10 pl-0"
          />
          <h1 v-text="item.fields.title" class="display-1 font-weight-bold" />
          <v-img
            :src="item.fields.image.fields.file.url"
            :alt="item.fields.image.fields.title"
            contain
            class="mt-12"
          />
          <div v-html="$md.render(item.fields.body)" class="markdown px-4" />
        </v-col>
      </v-row>
    </v-sheet>
    <voice-button />
    <contact-us />
  </div>
</template>

<script>
import VoiceButton from '~/components/VoiceButton'
import ContactUs from '~/components/ContactUs'
import client from '~/plugins/contentful.js'

export default {
  components: {
    VoiceButton,
    ContactUs
  },
  asyncData({ env, params, error, payload }) {
    if (payload) return { item: payload }
    else
      return Promise.all([
        client.getEntries({
          content_type: env.CTF_CUSTOMER_TYPE_ID,
          'fields.slug': params.slug
        })
      ])
        .then(([result]) => {
          return {
            item: result.items[0]
          }
        })
        .catch(console.error)
  },
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
  }
}
</script>

<style>
h1 {
  color: rgba(0, 0, 0, 0.7);
}
.markdown h2 {
  margin-top: 24px;
  margin-bottom: 12px;
}
.markdown p {
  font-size: 16px;
}
.markdown li {
  margin-top: 5px;
  font-size: 16px;
}
.v-btn:before {
  background-color: inherit;
}
</style>
