<template>
  <v-app>
    <Navbar></Navbar>
    <v-main class="frame mt-15">
      <v-card
        class="mx-auto mt-10 mb-13 pt-2 pb-7"
        width="600px"
        color="background"
        elevation="2"
      >
        <h1 class="mx-10 red--text text--lighten-1 head">
          {{ cafe.Cafe_Name }}
        </h1>

        <div class="mx-10">
          {{ cafe.Detail }}
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
                      v-for="(item, i) in cafe.Cafe_Pics"
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
                    v-for="(item, i) in cafe.Cafe_Pics"
                    :key="i"
                    :src="item"
                    contain
                  ></v-carousel-item>
                </v-carousel>
              </v-dialog>

              <div class="mt-5 red--text text--lighten-1 head">Location:</div>
              <div>
                {{ cafe.Address }}
              </div>
              <a :href="mapLink" target="_blank" class="blue--text"
                >See on Google Maps</a
              >
            </v-col>
            <v-col md="6">
              <div class="d-flex justify-center mt-5">
                <h3 class="red--text text--lighten-1 head">Mood & Tone</h3>
              </div>

              <div class="d-flex flex-row justify-center">
                <div v-for="(color, index) in cafe.Color" :key="index">
                  <div
                    class="color-box"
                    :style="{ 'background-color': `${color}` }"
                  ></div>
                </div>
              </div>
              <h5 class="text-center">{{ displayTones(cafe.Tone) }}</h5>

              <div class="d-flex justify-center mt-5">
                <h3 class="red--text text--lighten-1 head">Style</h3>
              </div>
              <div class="d-flex justify-center">
                <h4>
                  {{ cafe.Style }}
                </h4>
              </div>

              <div class="d-flex justify-center mt-5">
                <v-card color="listcard" class="px-10 py-2" >
                  <h5 class="head">Open-Close</h5>
                  <!-- <div
                    v-for="(d, i) in openclose"
                    :key="i"
                    class="text-caption"
                    :class="{ today: todayIndex == i + 1 }"
                  >
                    {{ d.day }} | {{ d.open }} - {{ d.close }}
                  </div> -->

                  <div
                    v-for="(d, i) in openclose"
                    :key="i"
                    class="text-caption"

                  >
                    {{
                      !d.isclosed
                        ? d.day + "  |  " + d.open + " - " + d.close
                        : d.day + "   |"+   "      closed"
                    }}
                  </div>
                </v-card>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-card>
    </v-main>

    <div class="text-center my-4">
      <v-btn
        class="px-10 ml-10"
        color="secondary"
        elevation="3"
        rounded
        to="/cafes"
      >
        Back
      </v-btn>
    </div>
  </v-app>
</template>

<script>
import { getCafes } from "../../api/cafe";
import Navbar from "../../components/Organisms/Navbar.vue";

export default {
  async asyncData({ route }) {
    const id = route.params.id;
    const cafe = await getCafes(id);
    let baseMapLink = "https://www.google.com/maps/search/";
    const addressUri = encodeURIComponent(cafe.Address);
    let mapLink = baseMapLink + addressUri;
    mapLink = mapLink.replace(/ /gi, "+");
    mapLink = mapLink.replace(/,/gi, ",");
    // const dayweight = {
    //   Sunday: 1,
    //   Monday: 2,
    //   Tuesday: 3,
    //   Wednesday: 4,
    //   Thursday: 5,
    //   Friday: 6,
    //   Saturday: 7,
    // };
    // const openclose = [];
    // for (const time of cafe.openClose) {
    //   for (const day of time.day) {
    //     openclose.push({ day, open: time.open, close: time.close });
    //   }
    // }
    // openclose.sort((a, b) => {
    //   if (dayweight[a.day] - dayweight[b.day]) {
    //     return 1;
    //   } else if (dayweight[b.day] - dayweight[a.day]) {
    //     return -1;
    //   }
    // });


    const dayweight = {
        Monday: 1,
        Tuesday: 2,
        Wednesday: 3,
        Thursday: 4,
        Friday: 5,
        Saturday: 6,
        Sunday: 7,
      };
      const dayfill = [
        {
          day: "Monday",
          isfill: false,
          default: { isclosed: true, day: "Monday" },
        },
        {
          day: "Tuesday",
          isfill: false,
          default: { isclosed: true, day: "Tuesday" },
        },
        {
          day: "Wednesday",
          isfill: false,
          default: { isclosed: true, day: "Wednesday" },
        },
        {
          day: "Thursday",
          isfill: false,
          default: { isclosed: true, day: "Thursday" },
        },
        {
          day: "Friday",
          isfill: false,
          default: { isclosed: true, day: "Friday" },
        },
        {
          day: "Saturday",
          isfill: false,
          default: { isclosed: true, day: "Saturday" },
        },
        {
          day: "Sunday",
          isfill: false,
          default: { isclosed: true, day: "Sunday" },
        },
      ];

      const openclose = [];
      console.log(cafe.openClose);
      if (Array.isArray(cafe.openClose)) {
        for (const time of cafe.openClose) {
          if (Array.isArray(time.day)) {
            for (const day of time.day) {
              const check = dayfill.find((cafe) => cafe.day == day);
              check.isfill = true;
              openclose.push({
                day,
                open: time.open,
                close: time.close,
                isclosed: false,
              });
            }
          }
        }
      }
      dayfill.forEach((cafe) => {
        if (!cafe.isfill) openclose.push(cafe.default);
      });
      openclose.sort((a, b) => {
        if (dayweight[a.day] > dayweight[b.day]) {
          return 1;
        } else if (dayweight[b.day] > dayweight[a.day]) {
          return -1;
        }
      });

      console.log(openclose)
    return { cafe, mapLink, openclose };
  },
  data() {
    return {
      dialog: false,
      todayIndex: new Date().getDay(), //Sunday = 0
    };
  },
  methods: {
    displayTones(tones) {
      if (!tones) {
        return [];
      }
      const _tones = tones.map((t) => {
        const arr = t.split("");
        arr[0] = arr[0].toUpperCase();
        return arr.join("");
      });
      return _tones.join(" | ");
    },
  },
  components: { Navbar },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Grandstander:wght@700&display=swap');
.head {
  font-family: "Grandstander" !important;
}
a {
  text-decoration: none;
}
.color-box {
  width: 35px;
  height: 35px;
}
.frame {
  background-color: #e7e0d8;
}
.close-dialog {
  float: right;
}
.today {
  font-weight: bold;
  color: #107869;
}
</style>
