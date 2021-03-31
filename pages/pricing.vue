<template>
  <div>
    <pricing-intro :item="pricing" />

    <program-flow :items="programFlow" />

    <training-content :items="trainingContent" />

    <support :items="support" />

    <timeline />

    <faq :items="faqs" />

    <plan :items="plans" />

    <contact-us />
  </div>
</template>

<script>
import PricingIntro from '../components/PricingIntro'
import ProgramFlow from '../components/ProgramFlow'
import TrainingContent from '../components/TrainingContent'
import Support from '../components/Support'
import Timeline from '../components/Timeline'
import Plan from '../components/Plan'
import Faq from '../components/Faq'
import ContactUs from '../components/ContactUs'
import client from '~/plugins/contentful.js'

export default {
  components: {
    PricingIntro,
    ProgramFlow,
    TrainingContent,
    Support,
    Timeline,
    Plan,
    Faq,
    ContactUs
  },
  head() {
    return {
      title: 'title',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'description'
        }
      ]
    }
  },
  asyncData({ env }) {
    return Promise.all([
      client.getEntries({
        content_type: env.CTF_PRICING_TYPE_ID
      }),
      client.getEntries({
        content_type: env.CTF_TRAINING_TYPE_ID,
        order: 'fields.order'
      }),
      client.getEntries({
        content_type: env.CTF_TRAINING_CONTENT_TYPE_ID,
        order: 'fields.order'
      }),
      client.getEntries({
        content_type: env.CTF_SUPPORT_TYPE_ID
      }),
      client.getEntries({
        content_type: env.CTF_PLAN_TYPE_ID,
        order: 'fields.order'
      }),
      client.getEntries({
        content_type: env.CTF_FAQ_TYPE_ID
      })
    ])
      .then(([pricing, programFlow, trainingContent, support, plans, faq]) => {
        return {
          pricing: pricing.items[0],
          programFlow: programFlow.items,
          trainingContent: trainingContent.items,
          support: support.items,
          plans: plans.items,
          faqs: faq.items
        }
      })
      .catch(console.error)
  }
}
</script>

<style scoped></style>
