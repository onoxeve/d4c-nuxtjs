<template>
  <v-row justify="center" class="py-12 grey lighten-5">
    <v-col cols="12" class="text-center">
      <h2 class="display-1 font-weight-bold">
        選ばれるのは<wbr /><span class="nowrap">coke</span>
      </h2>
    </v-col>

    <v-col
      v-for="voice in voices"
      :key="voice.fields.title"
      cols="10"
      xs="10"
      sm="5"
      md="3"
    >
      <v-card outlined>
        <!-- Title -->
        <v-card-title class="font-weight-bold">
          <v-icon large left color="blue">
            mdi-twitter
          </v-icon>
        </v-card-title>

        <!-- Body -->
        <v-card-text v-text="voice.fields.body" />

        <!-- Profile -->
        <v-card-text v-text="voice.fields.profile" />
      </v-card>
    </v-col>
    <v-col cols="12">
      <voice-button />
    </v-col>
  </v-row>
</template>

<script>
import VoiceButton from '../components/VoiceButton'

export default {
  components: {
    VoiceButton
  },
  props: {
    voices: {
      type: Array,
      require: true,
      default: () => []
    }
  }
}
</script>

<style scoped></style>
