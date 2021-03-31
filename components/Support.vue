<template>
  <v-row justify="center" class="py-12 grey lighten-5">
    <v-col cols="12" class="text-center">
      <h2 class="display-1 font-weight-bold">
        cokeの<wbr /><span class="nowrap">LINEサポート</span>
      </h2>
    </v-col>

    <v-col
      v-for="item in items"
      :key="item.fields.title"
      cols="11"
      xs="11"
      md="3"
    >
      <v-card outlined>
        <v-card-title class="justify-center font-weight-bold">
          <h3 v-text="item.fields.title" />
        </v-card-title>
        <div class="ma-5">
          <v-img
            :src="item.fields.image.fields.file.url"
            :alt="item.fields.image.fields.title"
            contain
          />
        </div>
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
