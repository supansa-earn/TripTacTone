<template>
 <v-app>
  <Navbar/>
  <v-content class="ma-16">
    <h1 class="my-10">Cafe List in Chiang Mai District</h1>
    <v-row>
      <v-col  v-for="n in 8"
      :key="n"
      cols="12"
      md="3">
        <CafeCard></CafeCard>
      </v-col>
    </v-row>
  </v-content>

 </v-app>
</template>

<script>
import CafeCard from '../components/Molecules/cafeCard.vue';
import Navbar from '../components/Organisms/Navbar.vue';

export default {
    components: { Navbar, CafeCard }
}
</script>
