<template>
<v-app>
  <Navbar></Navbar>
  <v-content class="ma-16">
    <h1 class="my-10 red--text text--lighten-1">My Plans</h1>
  </v-content>
</v-app>
</template>
<style scoped>

</style>

<script>
import Navbar from '../components/Organisms/Navbar.vue';

export default {
    components: { Navbar }
}
</script>
