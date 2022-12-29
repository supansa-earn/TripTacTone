<template>
  <v-app>
    <Navbar></Navbar>
    <v-content class="mt-10 " >
  <v-sheet
    class="mx-auto mt-16 d-flex align-center rounded-lg"
    elevation="5"
    max-width="800"
    color="crcard"

  >
    <v-slide-group
      v-model="model"
      class="pa-2"
      show-arrows
    >
    <v-row justify="center" align="center" class="my-1">
      <v-slide-item
        v-for="n in 15"
        :key="n"
        v-slot="{ active}"
      >
        <v-card
          :color="active ? 'primary' : 'background'"
          class="ma-4"
          height="380"
          width="650"

        >
        </v-card>
      </v-slide-item>
    </v-row >
    </v-slide-group>
  </v-sheet>
</v-content>
</v-app>
</template>
<script>
import Navbar from '../components/Organisms/Navbar.vue';

  export default {
    data: () => ({
        model: null,
    }),
    components: { Navbar }
}
</script>
<style scoped>
.bg{
  background-color: #E7E0D8;
}
</style>
