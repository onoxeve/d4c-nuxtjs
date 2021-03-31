<template>
  <div>
    <hero-image />
    <home :item="home" />
    <feature :features="features" />
    <plan :items="plans" :needsLink="true" />
    <voice :voices="voices" />
    <contact-us />
  </div>
</template>

<script>
import HeroImage from '../components/HeroImage'
import Home from '../components/Home'
import Feature from '../components/Feature'
import Plan from '../components/Plan'
import Voice from '../components/Voice'
import ContactUs from '../components/ContactUs'
import client from '~/plugins/contentful.js'

export default {
  components: {
    HeroImage,
    Home,
    Feature,
    Plan,
    Voice,
    ContactUs
  },
  asyncData({ env }) {
    return Promise.all([
      // client.getEntries({
      //   content_type: env.CTF_HERO_IMAGE_TYPE_ID
      // }),
      client.getEntries({
        content_type: env.CTF_HOME_TYPE_ID
      }),
      client.getEntries({
        content_type: env.CTF_FEATURE_TYPE_ID,
        order: 'fields.order'
      }),
      client.getEntries({
        content_type: env.CTF_PLAN_TYPE_ID,
        order: 'fields.order'
      }),
      client.getEntries({
        content_type: env.CTF_VOICE_TYPE_ID
      })
    ])
      .then(([home, features, plans, voices]) => {
        return {
          // heroImage: heroImage.items[0],
          home: home.items[0],
          features: features.items,
          plans: plans.items,
          voices: voices.items
        }
      })
      .catch(console.error)
  }
}
</script>

<style>
h2 {
  color: rgba(0, 0, 0, 0.7);
}
.v-card__title {
  color: rgba(0, 0, 0, 0.7);
}
.v-list-item__content {
  color: rgba(0, 0, 0, 0.7);
}
.nowrap {
  display: inline-block;
  white-space: nowrap;
}
.v-application .display-1 {
  font-family: 'Noto Sans JP', sans-serif !important;
  line-height: inherit;
  margin-bottom: 12px;
}
.v-application .display-2 {
  font-family: 'Noto Sans JP', sans-serif !important;
}
.v-application {
  font-family: 'Noto Sans JP', sans-serif !important;
}
</style>
