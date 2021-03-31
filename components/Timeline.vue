<template>
  <v-row justify="center" class="py-12">
    <v-col cols="12" class="text-center">
      <h2 class="display-1 font-weight-bold">
        スキマ時間で充分、<wbr /><span class="nowrap">cokeでも続きます</span>
      </h2>
    </v-col>

    <v-simple-table class="mt-2">
      <template v-slot:default>
        <tbody>
          <tr v-for="item in timeline" :key="item.time" :class="item.color">
            <td>
              {{ item.time }}
            </td>
            <td :class="item.font">
              <v-icon left color="">
                {{ item.icon }}
              </v-icon>
              {{ item.task }}
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
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
  },
  data() {
    return {
      timeline: [
        {
          time: '07:00 - 07:30',
          task: 'coke: 30分',
          color: 'blue lighten-5',
          font: 'font-weight-bold',
          icon: 'mdi-headphones'
        },
        {
          time: '07:30 - 08:00',
          task: 'coke',
          color: 'white',
          font: '',
          icon: 'mdi-home'
        },
        {
          time: '08:00 - 09:00',
          task: 'coke: 10分',
          color: 'blue lighten-5',
          font: 'font-weight-bold',
          icon: 'mdi-book-open-variant'
        },
        {
          time: '09:00 - 12:00',
          task: 'coke',
          color: 'white',
          font: '',
          icon: 'mdi-domain'
        },
        {
          time: '12:00 - 12:45',
          task: 'coke',
          color: 'white',
          font: '',
          icon: 'mdi-silverware'
        },
        {
          time: '12:45 - 13:00',
          task: 'coke: 10分',
          color: 'blue lighten-5',
          font: 'font-weight-bold',
          icon: 'mdi-book-open-variant'
        },
        {
          time: '13:00 - 18:00',
          task: 'coke',
          color: 'white',
          font: '',
          icon: 'mdi-domain'
        },
        {
          time: '18:00 - 19:00',
          task: 'coke: 10分',
          color: 'blue lighten-5',
          font: 'font-weight-bold',
          icon: 'mdi-book-open-variant'
        },
        {
          time: '19:00 - 23:30',
          task: 'coke',
          color: 'white',
          font: '',
          icon: 'mdi-home'
        },
        {
          time: '23:30 - 24:00',
          task: 'coke: 30分',
          color: 'blue lighten-5',
          font: 'font-weight-bold',
          icon: 'mdi-headphones'
        }
      ]
    }
  }
}
</script>

<style scoped></style>
