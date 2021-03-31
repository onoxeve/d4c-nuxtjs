<template>
  <div>
    <v-row justify="center" class="py-12">
      <v-col cols="12" class="text-center">
        <h1 class="display-1 font-weight-bold mb-5">
          Customer Stories
        </h1>
      </v-col>

      <v-col v-for="(customer, i) in customers" :key="i" cols="11" sm="5">
        <v-card>
          <v-img
            :src="customer.fields.image.fields.file.url"
            :alt="customer.fields.image.fields.title"
            contain
          />
          <v-card-title>
            <h2
              v-text="customer.fields.title"
              class="headline font-weight-bold"
            />
          </v-card-title>

          <v-card-text v-html="$md.render(customer.fields.desc)" class="pb-0" />

          <!-- Actions -->
          <v-card-actions class="pt-0">
            <v-col class="text-center">
              <v-btn
                :to="{
                  name: 'customers-slug',
                  params: {
                    slug: customer.fields.slug
                  }
                }"
                class="font-weight-bold"
                color="primary"
                nuxt
                large
                outlined
              >
                もっと読む
              </v-btn>
            </v-col>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <contact-us />
  </div>
</template>

<script>
import ContactUs from '~/components/ContactUs'
import client from '~/plugins/contentful.js'

export default {
  components: {
    ContactUs
  },
  asyncData({ env }) {
    return Promise.all([
      client.getEntries({
        content_type: env.CTF_CUSTOMER_TYPE_ID
      })
    ])
      .then(([customer]) => {
        return {
          customers: customer.items
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

<style scoped>
h1 {
  color: rgba(0, 0, 0, 0.7);
}
</style>
