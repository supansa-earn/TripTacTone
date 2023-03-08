<template>
  <v-app>
    <Navbar />
    <v-content class="ma-16">
      <h1 class="my-10">Cafe List in {{title}}</h1>
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
import { getCafes, getWithStyles, getWithTones } from "../../api/cafe";

export default {
  components: { Navbar, CafeCard },

  async asyncData({ route }) {
    let cafes = [];
    let title = "Chiang Mai District";
    if(!route.query.filter || route.query.filter == "all") cafes = await getCafes()//remove .slice(0, 8) after finish get on backend
    else if(route.query.filter == "style"){
      cafes = await getWithStyles(route.query.value)
      title = route.query.value;
    }else if (route.query.filter == "mood"){
      cafes = await getWithTones(route.query.value)
      title = route.query.value;
    }

    return { cafes, title };
  },
};
</script>
