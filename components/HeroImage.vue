<template>
  <v-row class="HeroImage--image mt-n3">
    <v-col cols="12">
      <h1 class="font-weight-black HeroImage--title text-center">
        あなた専属の<br />coke<span class="nowrap"></span>
      </h1>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    heroImage: {
      type: Object,
      require: false,
      default: () => {}
    }
  }
}
</script>

<style scoped>
.HeroImage--image {
  height: calc(100vh - 56px);
  background-position: center center;
  background-size: cover;
  background-image: linear-gradient(
      to right top,
      rgba(40, 46, 80, 0.33),
      rgba(22, 22, 22, 0.7)
    ),
    url('/hero-image.jpg');
}
.HeroImage--title {
  font-size: 40px;
  margin-top: 1%;
  line-height: 4rem;
  color: #fffde2;
}
</style>
