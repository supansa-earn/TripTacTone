<template>
  <v-app>
    <Navbar />
    <v-content class="mt-16 mx-16">
      <span class="mb-3 headline font-weight-bold red--text text--lighten-1">Suggested Plan: </span>
      <span class="headline font-weight-bold ">{{ plan.Plan_Name }}</span>
      <v-divider class="mt-1"></v-divider>
      <v-row >
        <v-col col="6">
          <span class="font-weight-bold title red--text text--lighten-1 ">
            Mood & Tone:
          </span>

          <span
            v-for="tone in plan.User_Tone"
            :key="tone"
            class="font-weight-bold title"
          >
            {{ tone }}
          </span>
        </v-col>
        <v-col col="6">
          <span class="font-weight-bold title red--text text--lighten-1 "
            >Style:
          </span>
          <span class="font-weight-bold title">{{ plan.UserStyle }}</span>
        </v-col>
      </v-row>
    </v-content>


    <v-main class="mt-5">
      <!-- Card -->
      <v-card
        class="mx-auto mt-10 mb-13 pt-2 pb-7"
        width="600px"
        color="crcard"
        elevation="2"
        v-for="(cafe, index) in cafes"
        :key="index"

      >
        <h1 class="mx-10 mt-2 red--text text--lighten-1 head">
          {{ cafe.Cafe_Name }}
        </h1>

        <div class="mx-10">
          {{ cafe.Detail }}
          <v-row>
            <v-col md="6">
              <v-dialog
                v-model="cafe.dialog"
                transition="dialog-top-transition"
                content-class="elevation-0"
              >
                <v-btn
                  icon
                  dark
                  @click="cafe.dialog = false"
                  class="close-dialog"
                >
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
                      v-for="(item, i) in cafe.Cafe_Pic"
                      :key="`${index}-${i}`"
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
                    v-for="(item, i) in cafe.Cafe_Pic"
                    :key="`${index}-${i}-${i}`"
                    :src="item"
                    contain
                  ></v-carousel-item>
                </v-carousel>
              </v-dialog>

              <div class="d-flex justify-start mt-5">
                <v-card color="background" class="px-10 py-2" >
                  <h5 class="head">Photogenic Time</h5>
                  <div
                    v-if="cafe.photogenic_time == 1"
                    class="yellow--text text--darken-2 d-flex justify-center"
                  >
                    08.00-10.00
                  </div>
                  <div
                    v-if="cafe.photogenic_time == 2"
                    class="amber--text text--darken-3 d-flex justify-center"
                  >
                    11.00-14.00
                  </div>
                  <div
                    v-if="cafe.photogenic_time == 3"
                    class="orange--text text--darken-4 d-flex justify-center"
                  >
                    15.00-17.00
                  </div>
                </v-card>
              </div>

              <div class="mt-5 red--text text--lighten-1 head">Location:</div>
              <div>
                {{ cafe.Address }}
              </div>
              <a :href="cafe.mapLink" target="_blank" class="blue--text"
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

              <div class="d-flex justify-center mt-5" >
                <v-card color="listcard" class="px-10 py-2" >
                  <h5 class="head">Open-Close</h5>
                  <div
                    v-for="(d, i) in cafe.openclose"
                    :key="`${index}-${i}-${i}-${i}`"
                    class="text-caption "
                  >
                    {{
                      !d.isclosed
                        ? d.day + " | " + d.open + " - " + d.close
                        : d.day + "   |"+   "      closed"
                    }}
                  </div>
                </v-card>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-card>
      <div class="text-center my-4">
        <!-- <v-btn
          class="px-10 ml-10"
          color="secondary"
          elevation="3"
          rounded
          large
        >
          Save
        </v-btn> -->
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "../../components/Organisms/Navbar.vue";
import { getSuggestPlan } from "../../api/myplan";

export default {
  components: { Navbar },

  async asyncData({ route }) {
    const id = route.params.id;
    // const id = store.state?.user?.uid || store.state?.user?.authUser.uid
    const res = await getSuggestPlan(id);
    // plan=await getPlan(userID);
    let baseMapLink = "https://www.google.com/maps/search/";
    const cafes = res.cafe.map((el) => {
      const addressUri = encodeURIComponent(el.Address);
      let mapLink = baseMapLink + addressUri;
      mapLink = mapLink.replace(/ /gi, "+");
      mapLink = mapLink.replace(/,/gi, ",");
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
      // console.log(el.openClose);
      if (el.openClose) {

        for (const time of el.openClose) {
          if (Array.isArray(time.day)) {
            // console.log(time)
            for (const day of time.day) {

              const check = dayfill.find((el) => el.day == day);
              check.isfill = true;
              openclose.push({
                day,
                open: time.open,
                close: time.close,
                isclosed: false,

              });
              console.log(openclose)
            }

          }
        }
      }else{
       console.log(cafes)
       console.log(el)
      }


      dayfill.forEach((el) => {
        if (!el.isfill) openclose.push(el.default);
      });
      openclose.sort((a, b) => {
        if (dayweight[a.day] > dayweight[b.day]) {
          return 1;
        } else if (dayweight[b.day] > dayweight[a.day]) {
          return -1;
        }
      });

      // console.log(openclose)
      return { ...el, dialog: false, mapLink, openclose };
    });

    return { cafes, plan: res.plan  };
  },

  data() {
    return {
      dialog: false,
      todayIndex: new Date().getDay(), //Sunday = 0
    };
  },

  methods: {
    components: { Navbar },
    computed: {
      id() {
        return this.$store.state.user?.uid || "";
      },
    },
    test(d){
      if(d.isclosed==true){
       d.isclosed=false
      }
              console.log(d)
      },

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
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Grandstander:wght@700&display=swap');
.head {
  font-family: "Grandstander" !important;
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
