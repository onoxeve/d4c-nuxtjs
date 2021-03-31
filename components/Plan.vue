<template>
  <v-row justify="center" class="py-12">
    <v-col cols="12" class="text-center">
      <h2 class="display-1 font-weight-bold">
        入会金なし、<wbr /><span class="nowrap">シンプルなcoke</span>
      </h2>
    </v-col>

    <v-col
      v-for="item in items"
      :key="item.fields.title"
      cols="11"
      xs="11"
      sm="4"
    >
      <v-card raised>
        <v-subheader>
          <code :class="item.fields.color" class="white--text">
            {{ item.fields.title }}
          </code>
          <code
            v-if="item.fields.order === 1"
            class="pink lighten-2 white--text ml-3"
          >
            オススメ
          </code>
        </v-subheader>

        <v-card-title class="display-1 font-weight-bold">
          {{ item.fields.price }}
          <v-card-subtitle>
            /月(税込)
          </v-card-subtitle>
        </v-card-title>

        <v-list dense disabled>
          <v-list-item-group>
            <v-list-item
              v-for="(bodyItem, i) in item.fields.bodyItems"
              :key="i"
            >
              <v-list-item-icon class="mr-3">
                <v-icon :color="item.fields.color">
                  mdi-checkbox-marked-circle
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title v-text="bodyItem" />
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-col>
    <v-col v-if="needsLink" cols="12">
      <plan-button />
    </v-col>
  </v-row>
</template>

<script>
import PlanButton from '../components/PlanButton'

export default {
  components: {
    PlanButton
  },
  props: {
    items: {
      type: Array,
      require: true,
      default: () => []
    },
    needsLink: {
      type: Boolean,
      require: false,
      default: false
    }
  }
}
</script>

<style scoped>
.v-application code {
  white-space: unset;
  padding: 5px;
}
</style>
