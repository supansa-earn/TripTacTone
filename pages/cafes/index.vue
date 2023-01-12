<template>
  <v-app>
    <Navbar />
    <v-content class="ma-16">
      <h1 class="my-10">Cafe List in Chiang Mai District</h1>
      <v-row>
        <v-col v-for="(cafe, index) in cafes" :key="index" cols="12" md="3">
          <CafeCard :data="cafe"></CafeCard>
        </v-col>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
import CafeCard from "../../components/Molecules/cafeCard.vue";
import Navbar from "../../components/Organisms/Navbar.vue";
import { getCafes } from "../../api/cafe";

export default {
  components: { Navbar, CafeCard },

  async asyncData() {
    const cafes = (await getCafes()).slice(0, 8); //remove .slice(0, 8) after finish get on backend
    return { cafes };
  },
};
</script>
