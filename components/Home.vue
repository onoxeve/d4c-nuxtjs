<template>
  <v-row justify="center">
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
        cokeが、<wbr /><span class="nowrap">あなた専属に</span>
      </h2>
    </v-col>
    <v-col
      v-html="$md.render(item.fields.introductionBody)"
      cols="12"
      xs="12"
      md="5"
      class="text-left pa-6"
    />
    <v-col cols="12" align="center">
      <v-img
        :src="item.fields.trainerImage.fields.file.url"
        :alt="item.fields.trainerImage.fields.title"
        contain
        max-width="200"
        class="mt-5"
      />
    </v-col>
    <v-col cols="12" class="text-center font-weight-bold">
      coke / CEO
    </v-col>
    <v-col
      v-html="$md.render(item.fields.trainerProfile)"
      cols="12"
      xs="12"
      md="4"
      class="text-left px-6"
    />
    <v-col cols="12" class="text-center pb-8">
      <v-btn
        class="font-weight-bold"
        color="primary"
        nuxt
        to="/contact"
        large
        rounded
      >
        cokeに申し込む
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      require: true,
      default: () => {}
    }
  }
}
</script>

<style scoped>
.v-sheet {
  color: rgba(0, 0, 0, 0.7);
}
</style>
