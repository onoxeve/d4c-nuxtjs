<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="350" persistent>
      <v-card>
        <v-card-title class="headline">Thanks for contacting us.</v-card-title>

        <v-card-text>
          お問い合わせありがとうございます。確認後、24H以内にご連絡差し上げます。今しばらくお待ちください。
        </v-card-text>

        <v-card-actions>
          <v-spacer />

          <v-btn @click="dialog = false" color="blue" text nuxt to="/">
            ホームに戻る
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: true
    }
  },
  head() {
    return {
      meta: [{ hid: 'robots', name: 'robots', content: 'noindex' }]
    }
  }
}
</script>
