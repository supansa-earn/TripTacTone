<template>
  <div>
    <CreatePlan></CreatePlan>
    <v-btn
    depressed
    color="primary"
  >
    Primary
  </v-btn>
  <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
</div>
</template>

<script>
import CreatePlan from '../components/Atoms/CreatePlan.vue';

export default {
    components: { CreatePlan }
}
</script>
