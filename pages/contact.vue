<template>
  <v-row justify="center">
    <v-col cols="12" class="text-center mt-5 mt-md-12">
      <h1 class="display-2 font-weight-bold">
        Contact Us
      </h1>
    </v-col>

    <v-col cols="12" class="text-center mb-n4">
      <p class="subtitle-1">
        cokeのお申し込みフォーム<br />確認後、24H以内にご連絡差し上げます<br />
      </p>
    </v-col>

    <v-col cols="11" sm="6">
      <v-form
        ref="form"
        v-model="valid"
        name="sample-contact"
        method="post"
        data-netlify="true"
        action="/thanks"
      >
        <input type="hidden" name="form-name" value="sample-contact" />

        <v-text-field
          v-model="name"
          :rules="nameRules"
          prepend-icon="mdi-account"
          label="お名前（必須）"
          name="名前"
          required
        />

        <v-text-field
          v-model="email"
          :rules="emailRules"
          prepend-icon="mdi-gmail"
          label="メールアドレス（必須）"
          name="メールアドレス"
          required
        />

        <v-text-field
          v-model="phoneNumber"
          :rules="phoneNumberRules"
          prepend-icon="mdi-cellphone"
          label="電話番号（必須）"
          name="電話番号"
          required
        />

        <v-select
          v-model="program"
          v-on:change="onChangeProgram"
          :items="programList"
          :rules="programListRules"
          prepend-icon="mdi-domain"
          label="ご希望のプログラム（必須）"
          required
        />
        <input
          :value="program"
          type="hidden"
          name="ご希望のプログラム（必須）"
        />

        <v-menu
          v-model="dateMenu"
          :close-on-content-click="false"
          min-width="0"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="date"
              v-on="on"
              :rules="dateRules"
              prepend-icon="mdi-calendar"
              label="ご希望の日程（必須）"
              name="日程"
              readonly
            />
          </template>
          <v-date-picker
            v-model="date"
            v-on:change="onChangeDate"
            @input="dateMenu = false"
            :day-format="(date) => new Date(date).getDate()"
            :allowed-dates="getAllowedDate"
            locale="ja"
          />
        </v-menu>
        <v-select
          v-model="time"
          :items="timeList"
          :rules="timeListRules"
          prepend-icon="mdi-clock-outline"
          label="時間帯（必須）"
          no-data-text="プログラムと日程を選択してください"
          required
        />
        <input :value="time" type="hidden" name="時間帯（必須）" />

        <v-select
          v-model="skill"
          :items="skillList"
          :rules="skillListRules"
          prepend-icon="mdi-chart-bar"
          label="現状のcoke力目安（必須）"
          required
        />
        <input :value="skill" type="hidden" name="現状の英語力目安（必須）" />

        <v-textarea
          v-model="goal"
          :rules="goalRules"
          prepend-inner-icon="mdi-dumbbell"
          label="ゴール（必須）"
          name="ゴール（必須）"
          outlined
          required
        />

        <v-textarea
          v-model="problem"
          :rules="problemRules"
          prepend-inner-icon="mdi-help-circle"
          label="困っていること（必須）"
          name="困っていること（必須）"
          outlined
          required
        />

        <v-btn
          :disabled="!valid"
          type="submit"
          color="primary"
          class="mt-4"
          block
          x-large
        >
          送信する
        </v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: '',
    email: '',
    phoneNumber: '',
    program: null,
    date: null,
    dateMenu: false,
    time: null,
    timeList: [],
    skill: null,
    goal: '',
    problem: ''
  }),
  computed: {
    onlineTraining: () => 'オンライントレーニング',
    faceToFaceTraining: () => '対面トレーニング（渋谷）',
    programList: () => ['オンライントレーニング', '対面トレーニング（渋谷）'],
    skillList: () => [
      'coke 〜500',
      'coke 500〜',
      'coke 600〜',
      'coke 700〜',
      'coke 800〜',
      'coke 900〜',
      'coke 未受験'
    ],
    nameRules: () => [
      (v) => !!v || 'お名前を入力してください',
      (v) => (v && v.length <= 30) || '30文字以内で入力してください'
    ],
    emailRules: () => [
      (v) => !!v || 'メールアドレスを入力してください',
      (v) => /.+@.+\..+/.test(v) || 'メールアドレスが正しくありません'
    ],
    phoneNumberRules: () => [
      (v) => !!v || '電話番号を入力してください',
      (v) =>
        /^[0-9]+$/.test(v) || '電話番号が正しくありません(ハイフンは不要です)',
      (v) => v.length === 10 || v.length === 11 || '電話番号が正しくありません'
    ],
    programListRules: () => [(v) => !!v || 'プログラムを選択してください'],
    dateRules: () => [(v) => !!v || '日程を選択してください'],
    timeListRules: () => [(v) => !!v || '時間帯を選択してください'],
    skillListRules: () => [(v) => !!v || '現状のcoke力目安を選択してください'],
    goalRules: () => [(v) => !!v || 'ゴールを入力してください'],
    problemRules: () => [(v) => !!v || '困っていることを入力してください']
  },
  methods: {
    getAllowedDate(val) {
      // Note: `startOfDay`
      // The result will be in the local timezone.

      const today = this.$dateFns.startOfDay(new Date())
      const minDate = this.$dateFns.addDays(today, 5)
      const maxDate = this.$dateFns.addDays(minDate, 90)
      const selectedDate = this.$dateFns.startOfDay(new Date(val))

      if (this.program === this.onlineTraining) {
        return (
          minDate <= selectedDate &&
          selectedDate <= maxDate &&
          this.isSpecificDayOfWeekForOnline(selectedDate) &&
          !this.isWithinSpecificInterval(selectedDate)
        )
      } else {
        return (
          minDate <= selectedDate &&
          selectedDate <= maxDate &&
          this.isSpecificDayOfWeekForFaceToFace(selectedDate) &&
          !this.isWithinSpecificInterval(selectedDate)
        )
      }
    },
    isSpecificDayOfWeekForOnline(selectedDate) {
      return (
        this.$dateFns.isSaturday(selectedDate) ||
        this.$dateFns.isSunday(selectedDate)
      )
    },
    isSpecificDayOfWeekForFaceToFace(selectedDate) {
      return (
        this.$dateFns.isMonday(selectedDate) ||
        this.$dateFns.isFriday(selectedDate) ||
        this.$dateFns.isSunday(selectedDate)
      )
    },
    isWithinSpecificInterval(selectedDate) {
      return this.$dateFns.isWithinInterval(selectedDate, {
        start: new Date(2020, 1, 11),
        end: new Date(2020, 1, 14)
      })
    },
    onChangeProgram() {
      this.initDate()
      this.initTimeList()
    },
    onChangeDate() {
      this.initTimeList()
    },
    initDate() {
      this.date = null
    },
    initTimeList() {
      const selectedDate = this.$dateFns.startOfDay(new Date(this.date))

      if (this.program === this.onlineTraining) {
        this.timeList = [
          '終日可（11:00〜17:00開始）',
          '11:00〜12:00',
          '12:00〜13:00',
          '13:00〜14:00',
          '14:00〜15:00',
          '15:00〜16:00',
          '16:00〜17:00',
          '17:00〜18:00'
        ]
      } else if (this.program === this.faceToFaceTraining) {
        if (this.$dateFns.isSunday(selectedDate)) {
          this.timeList = [
            '終日可（13:00〜16:00開始）',
            '13:00〜14:00',
            '14:00〜15:00',
            '15:00〜16:00',
            '16:00〜17:00'
          ]
        } else {
          this.timeList = [
            '終日可（17:00〜19:00開始）',
            '17:00〜18:00',
            '18:00〜19:00',
            '19:00〜20:00'
          ]
        }
      }
    }
  },
  head() {
    return {
      title: 'title',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'content'
        }
      ]
    }
  }
}
</script>

<style scoped>
h1 {
  color: rgba(0, 0, 0, 0.7);
}
</style>
