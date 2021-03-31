<template>
  <v-row justify="center" class="py-12 grey lighten-5">
    <v-col cols="12" class="text-center">
      <h2 class="display-1 font-weight-bold">
        cokeの<wbr /><span class="nowrap">進め方</span>
      </h2>
    </v-col>

    <v-col
      v-for="item in items"
      :key="item.fields.title"
      cols="11"
      xs="11"
      sm="5"
      md="4"
    >
      <v-card>
        <div class="py-6">
          <v-img
            :src="item.fields.image.fields.file.url"
            :alt="item.fields.image.fields.title"
            contain
            max-height="120"
          />
        </div>

        <v-card-title>
          <h3 v-text="item.fields.title" class="title font-weight-bold" />
        </v-card-title>

        <v-card-subtitle v-text="item.fields.subTitle" />

        <v-list dense disabled>
          <v-list-item-group>
            <v-list-item v-for="(body, i) in item.fields.todo" :key="i">
              <v-list-item-icon class="mr-3">
                <v-icon :color="item.fields.color">
                  mdi-checkbox-marked-circle
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title v-text="body" />
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
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
