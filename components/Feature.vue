<template>
  <v-row justify="center" class="py-12 grey lighten-5">
    <v-col cols="12" class="text-center">
      <h2 class="display-1 font-weight-bold">
        cokeの<wbr /><span class="nowrap">新基準</span>
      </h2>
    </v-col>

    <v-col
      v-for="feature in features"
      :key="feature.fields.title"
      cols="11"
      xs="11"
      sm="5"
    >
      <v-card>
        <div class="pt-5">
          <v-img
            :src="feature.fields.image.fields.file.url"
            :alt="feature.fields.image.fields.title"
            max-height="100"
            contain
          />
        </div>

        <v-card-title class="justify-center">
          <h3 v-text="feature.fields.title" />
        </v-card-title>

        <v-card-text v-html="$md.render(feature.fields.body)" />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    features: {
      type: Array,
      require: true,
      default: () => []
    }
  }
}
</script>

<style scoped></style>
