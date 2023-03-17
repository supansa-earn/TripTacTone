<template>
  <v-app>
    <Navbar />
    <v-content class="mt-16 mx-16">
      <h1 class="mt-10 mb-3">Suggested Plan</h1>
      <v-divider></v-divider>
      <div class="mt-3">Mood & Tone:{{ plans.UserTone }}</div>
      <div>Style:{{plans.UserStyle}}</div>
    </v-content>

    <!-- <v-card
      outlined
      class="mx-auto mt-10 mb-13 pt-2 pb-7"
      width="600px"
      color="background"
      elevation="2"
    >
    <h1 class="mx-10 red--text text--lighten-1">
      {{ plans.Cafe_Name }}
    </h1>
    </v-card> -->

    <v-main class=" mt-5">
      <v-card
      outlined
        class="mx-auto mt-10 mb-13 pt-2 pb-7"
        width="600px"
        color="background"
        elevation="2"
      >
        <h1 class="mx-10 red--text text--lighten-1">
          {{ plans.Cafe_Name }}
        </h1>

        <!-- <div class="mx-10">
          {{ plans.Detail }}
          <v-row>
            <v-col md="6">
              <v-dialog
                v-model="dialog"
                transition="dialog-top-transition"
                content-class="elevation-0"
              >
                <v-btn icon dark @click="dialog = false" class="close-dialog">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                <template v-slot:activator="{ on, attrs }">
                  <v-carousel
                    height="200"
                    class="mt-8"
                    interval="3000"
                    cycle
                    show-arrows-on-hover
                  >
                    <v-carousel-item
                      v-for="(item, i) in plans.Cafe_Pics"
                      :key="i"
                      :src="item"
                      v-bind="attrs"
                      v-on="on"
                      reverse-transition="fade-transition"
                      transition="fade-transition"
                    ></v-carousel-item>
                  </v-carousel>
                </template>

                <v-carousel>
                  <v-carousel-item
                    v-for="(item, i) in plans.Cafe_Pics"
                    :key="i"
                    :src="item"
                    contain
                  ></v-carousel-item>
                </v-carousel>
              </v-dialog>

              <div class="mt-5 red--text text--lighten-1">Location:</div>
              <div>
                {{ plans.Address }}
              </div>
              <a :href="mapLink" target="_blank" class="blue--text"
                >See on Google Maps</a
              >
            </v-col>
            <v-col md="6">
              <div class="d-flex justify-center mt-5">
                <h3 class="red--text text--lighten-1">Mood & Tone</h3>
              </div>

              <div class="d-flex flex-row justify-center">
                <div v-for="(color, index) in plans.Color" :key="index">
                  <div
                    class="color-box"
                    :style="{ 'background-color': `${color}` }"
                  ></div>
                </div>
              </div>
              <h5 class="text-center">{{ displayTones(plans.Tone) }}</h5>

              <div class="d-flex justify-center mt-5">
                <h3 class="red--text text--lighten-1">
                  Style
                </h3>
              </div>
              <div class="d-flex justify-center ">
                <h4>
                 {{ plans.Style }}
                </h4>
              </div>

              <div class="d-flex justify-center mt-5">
                <v-card color="listcard" class="px-10 py-2">
                  <h5>Open-Close</h5>
                  <div
                    v-for="(d, i) in plans.openClose"
                    :key="i"
                    class="text-caption"
                    :class="{ today: todayIndex == i + 1 }"
                  >
                    {{ d.day }} | {{ d.open }} - {{ d.close }}
                  </div>
                </v-card>
              </div>
            </v-col>
          </v-row>
        </div> -->
      </v-card>



    </v-main>
  </v-app>
</template>

<script>
import Navbar from "../../components/Organisms/Navbar.vue";
import { getPlan } from "../../api/myplan";

export default {
  components: { Navbar },
  async asyncData({ store }) {

    const userId = store.state?.user?.uid || store.state?.user?.authUser.uid
    const plans = await getPlan(userId);
    let baseMapLink = "https://www.google.com/maps/search/";
    const addressUri = encodeURIComponent(plans.Address);
    let mapLink = baseMapLink + addressUri;
    mapLink = mapLink.replace(/ /gi, "+");
    mapLink = mapLink.replace(/,/gi, ",");
    return { plans, mapLink };

   },
  data() {
  //   return {
  //     dialog: false,
  //     todayIndex: new Date().getDay(), //Sunday = 0
  //   };
  },
  methods: {
  //   displayTones(tones) {
  //     if (!tones) {
  //       return [];
  //     }
  //     const _tones = tones.map((t) => {
  //       const arr = t.split("");
  //       arr[0] = arr[0].toUpperCase();
  //       return arr.join("");
  //     });
  //     return _tones.join(" | ");
  //   },
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
}
.color-box {
  width: 35px;
  height: 35px;
}

.close-dialog {
  float: right;
}
.today {
  font-weight: bold;
  color: #107869;
}
</style>
