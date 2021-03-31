<template>
  <v-row justify="center" class="py-12">
    <v-col cols="12" class="text-center">
      <h2 class="display-1 font-weight-bold">
        coke<wbr /><span class="nowrap">menu</span>
      </h2>
    </v-col>

    <v-col
      v-for="item in items"
      :key="item.fields.title"
      cols="11"
      xs="11"
      sm="5"
    >
      <v-card>
        <div class="py-6">
          <v-img
            :src="item.fields.image.fields.file.url"
            :alt="item.fields.image.fields.title"
            max-height="100"
            contain
          />
        </div>

        <v-card-title class="justify-center">
          <h3 v-text="item.fields.title" class="title font-weight-bold" />
        </v-card-title>

        <v-card-subtitle
          v-text="item.fields.subTitle"
          class="subtitle-1 font-weight-bold text-center"
        />

        <v-card-text v-text="item.fields.body" />
      </v-card>
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

<style scoped></style>
