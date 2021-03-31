<template>
  <v-row justify="center" class="py-12 grey lighten-5">
    <v-col cols="12" class="text-center">
      <h2 class="display-1 font-weight-bold">
        よくあるご質問
      </h2>
    </v-col>

    <v-col cols="12" xs="12" sm="10">
      <v-list>
        <v-list-item
          v-for="faq in items"
          :key="faq.fields.title"
          prepend-icon="mdi-help-circle"
        >
          <v-list-item-icon class="mt-6 mr-3">
            <v-icon>
              mdi-help-circle
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title
              v-text="faq.fields.title"
              class="wrap font-weight-bold mt-3"
            />
            <v-list-item-subtitle v-text="faq.fields.body" class="wrap mt-3" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      require: true,
      default: () => []
    }
  }
}
</script>

<style scoped>
.wrap {
  white-space: normal;
}
.v-list-item .v-list-item__title {
  line-height: inherit;
}
.v-list-item .v-list-item__subtitle {
  line-height: inherit;
}
</style>
