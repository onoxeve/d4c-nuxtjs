<template>
  <v-row justify="center" class="ContactUs--wrap py-12">
    <v-col class="mt-12" cols="11" sm="6">
      <v-card class="ContactUs--card" raised>
        <v-card-title class="justify-center pt-12">
          <h2 class="headline font-weight-bold">
            cokeを<br />無料で実感できます。
          </h2>
        </v-card-title>

        <!-- Actions -->
        <v-card-actions class="pb-12">
          <v-col class="text-center">
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
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({})
}
</script>

<style scoped>
h2 {
  line-height: 2.5rem !important;
}
.ContactUs--wrap {
  background-image: linear-gradient(
    -74deg,
    rgb(35, 175, 186) 0%,
    rgb(48, 107, 196) 100%
  );
}
</style>
