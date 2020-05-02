<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Souls Harbor Website
        </q-toolbar-title>

        <div>Your Community Anchor</div>
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
