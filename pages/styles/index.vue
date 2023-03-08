<template>
  <v-app>
    <Navbar />
    <v-content class="ma-16">
      <h1 class="my-10">Search results for</h1>
      <v-row>
        <v-col v-for="(cafe, index) in styles" :key="index" cols="12" md="3">
          <CafeCard :data="cafe"></CafeCard>
        </v-col>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
import CafeCard from "../../components/Molecules/cafeCard.vue";
import Navbar from "../../components/Organisms/Navbar.vue";
import { getStyles } from "../../api/cafe";

export default {
  components: { Navbar, CafeCard },

  async asyncData() {
    const styles = (await getStyles()); //remove .slice(0, 8) after finish get on backend
    return { styles };
  },
};
</script>
