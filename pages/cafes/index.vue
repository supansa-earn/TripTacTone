<template>
  <v-app>
    <Navbar />
    <v-content class="ma-16">
      <h1 class="my-10">Cafe List in Chiang Mai District</h1>
      <v-row>
        <v-col v-for="(cafe, index) in cafes" :key="index" cols="12" md="3">
          <!-- {{ cafe.Cafe_Name }} -->
          <!-- <v-card
            class="mx-auto mt-5"
            width="250px"
            color="listcard"
            elevation="4"
            :data="cafe"
          >
            <v-img class="white--text align-end" height="300px"
            :src="`${cafe.Cafe_Pics}`">

            </v-img>
            <v-card-text class="d-flex justify-center red--text">
              {{ cafe.Cafe_Name }}
              </v-card-text>
              <v-card-text class="d-flex justify-center">
                {{ cafe.Location }}
              </v-card-text>

              {{ cafe.Open_monday }}

            <v-btn text color="blue" @click.stop="dialog = true">
              Read full article
            </v-btn>
          </v-card>

    <v-dialog v-model="dialog" scrollable max-width="80%" >
      <v-card height="500px">
        <v-card-title>{{ cafe.Cafe_Name }}</v-card-title>
        <v-divider></v-divider>
        <v-card-text height="200px">{{ cafe.Cafe_Name }}</v-card-text>
        <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Back
          </v-btn>
      </v-card>
    </v-dialog> -->
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
    const cafes = await getCafes();
    return { cafes };
  },
};
</script>
