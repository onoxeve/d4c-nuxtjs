<template>
  <v-row justify="center" class="py-12">
    <v-col cols="12" class="text-center">
      <h1 class="display-1 font-weight-bold">
        Pricing
      </h1>
    </v-col>

    <v-col cols="12" class="text-center">
      <div class="py-8">
        <v-img
          :src="item.fields.introductionImage.fields.file.url"
          :alt="item.fields.introductionImage.fields.title"
          max-height="120"
          contain
        />
      </div>
      <h2 class="display-1 font-weight-bold">
        sample
      </h2>
    </v-col>
    <v-col
      v-html="$md.render(item.fields.introductionBody)"
      cols="12"
      xs="12"
      md="6"
      class="text-left pa-6"
    >
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      require: true,
      default: () => Object()
    }
  }
}
</script>

<style scoped>
h1 {
  color: rgba(0, 0, 0, 0.7);
}
</style>
