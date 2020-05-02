<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Souls Harbor <small>Your Community Anchor</small>
        </q-toolbar-title>

        <q-tabs v-model="tab">
          <q-route-tab
            name="home"
            label="Home"
            :to="{ name: '' }"
          />
          <q-route-tab
            name="bapt"
            label="Baptism"
            :to="{ name: '/baptism' }"
          />
          <q-route-tab
            name="comm"
            label="Communion"
            :to="{ name: '/communion' }"
          />
          <q-route-tab
            name="info"
            label="Info"
            :to="{ name: '/info' }"
          />
          <q-route-tab
            name="contact"
            label="Contact"
            :to="{ name: '/contact' }"
          />
        </q-tabs>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  meta: {
    title: "Souls Harbor"
  },

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
