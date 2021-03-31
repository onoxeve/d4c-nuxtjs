<template>
  <v-app>
    <div>
      <v-navigation-drawer v-model="drawer" :clipped="clipped" app fixed>
        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar :clipped-left="clipped" color="#121820" app fixed>
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          class="white--text"
        />
        <n-link to="/">
          <v-img
            v-ripple
            :src="require('~/assets/site-logo.svg')"
            width="120"
            height="30"
            contain
            class="mt-n1"
          />
        </n-link>
        <v-spacer />
        <v-btn color="primary" nuxt to="/contact">
          cokeに申し込む
        </v-btn>
      </v-app-bar>

      <v-content>
        <v-container fluid>
          <nuxt />
        </v-container>
      </v-content>

      <v-footer>
        <v-row justify="center" no-gutters>
          <v-btn
            v-for="footerItem in footerItems"
            :key="footerItem.title"
            :to="footerItem.to"
            router
            exact
            text
            rounded
          >
            {{ footerItem.title }}
          </v-btn>
          <v-col cols="12" class="text-center ">
            &copy; {{ new Date().getFullYear() }} onoxeve
          </v-col>
        </v-row>
      </v-footer>
    </div>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    clipped: false,
    drawer: false,
    footerItems: [
      {
        title: 'Privacy',
        to: '/privacy'
      }
    ],
    items: [
      {
        icon: 'mdi-home',
        title: 'home',
        to: '/'
      },
      {
        icon: 'mdi-settings',
        title: 'pricing',
        to: '/pricing'
      },
      {
        icon: 'mdi-gmail',
        title: 'contact',
        to: '/contact'
      },
      {
        icon: 'mdi-voice',
        title: 'customers',
        to: '/customers'
      },
      {
        icon: 'mdi-apps',
        title: 'about us',
        to: '/about'
      }
    ]
  })
}
</script>
