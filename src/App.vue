<template>
  <div id="app">
    <NavbarMenu />
    <router-view/>
  </div>
</template>

<script>
import NavbarMenu from './components/NavbarMenu.vue';

export default {
  name: 'App',
  components: {
    NavbarMenu
  }
}
</script>

<style>
/* Global styles (if any) */
</style>
