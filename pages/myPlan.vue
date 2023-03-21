<template>
  <v-app>
    <Navbar></Navbar>
    <v-main class="ma-16">
      <h1 class="my-10">My Plans</h1>
      <v-row >
        <v-col col="6" v-for="(detail, index) in info" :key="index" class="d-flex justify-center">
          <!-- {{ plan.id }} -->
          <v-card color="crcard" width="400" height="200" class="px-6" >
            <v-card-title class="mt-5 text-h5 font-weight-black text head d-flex justify-center">{{detail.Plan_Name}}</v-card-title>
            <div class="px-4">
              <p class="text-gray-700 text-base d-flex justify-center">
                Date: {{detail.Date}}
              </p>
            </div>
              <!-- <h4 class="d-flex justify-center" @click="test(detail.id)">id: {{detail.id}}</h4> -->
            <v-card-text class="bg-white text-primary">
              <!-- <v-timeline align-top dense>
                <v-timeline-item color="secondary" small>
                  <v-row class="pt-1">
                    <v-col cols="3">
                      <strong>{{detail.photogenic_time}}</strong>
                    </v-col>
                    <v-col>
                      <strong>{{detail.Cafe_Name }}</strong>
                    </v-col>
                  </v-row>
                </v-timeline-item> -->

                <!-- <v-timeline-item color="secondary" small >
                  <v-row class="pt-1">
                    <v-col cols="3">
                      <strong>11.00-13.00</strong>
                    </v-col>
                    <v-col>
                      <strong>DWBH Coffee</strong>
                    </v-col>
                  </v-row>
                </v-timeline-item> -->

                <!-- <v-timeline-item color="secondary" small>
                  <v-row class="pt-1">
                    <v-col cols="3">
                      <strong>11.00-13.00</strong>
                    </v-col>
                    <v-col>
                      <strong>Graph one nimman</strong>
                    </v-col>
                  </v-row>
                </v-timeline-item> -->

              <!-- </v-timeline> -->
              <v-row>
                <v-col col="6" sm="6" class="d-flex justify-center">
                  <v-btn class="px-8" rounded outlined color="secondary" @click="testLog"  :to="`/plan/${detail.id}`">
                    Detail
                  </v-btn>
                </v-col>
                <v-col col="6" sm="6" class="d-flex justify-center">
                  <v-btn class="px-8" rounded outlined color="secondary" @click.stop="confirmDeletePlan(detail.id,detail.Plan_Name)"  :loading="loading">
                    Delete
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

      </v-row>
      <v-dialog v-model="dialog" max-width="700">
        <v-card>
          <v-card-title class="text-h5">
            Are you sure you want to delete {{ selectedPlanName }}?
          </v-card-title>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="secondary" text @click="dialog = false">
              Cancel
            </v-btn>

            <v-btn color="secondary" text @click="deletePlan" :loading="loading">
              Delete
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-main>
  </v-app>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Grandstander:wght@700&display=swap');
.head {
  font-family: "Grandstander" !important;
}
</style>

<script>
import Navbar from "../components/Organisms/Navbar.vue";
import { getPlan,getSuggestPlan } from "../api/myplan";
import { deletePlan } from "../api/myplan/delete";

export default {
  components: { Navbar },
  async asyncData() {
    // const res = await getSuggestPlan();
    // const id = route.params.id;
    // const id = userId
    // const res = await getPlan(uid);
    // return {res}
//     let baseMapLink = "https://www.google.com/maps/search/";
//     const cafes = res.cafe.map((el) => {
//       const addressUri = encodeURIComponent(el.Address);
//       let mapLink = baseMapLink + addressUri;
//       mapLink = mapLink.replace(/ /gi, "+");
//       mapLink = mapLink.replace(/,/gi, ",");
//       return { ...el};
//     });
    return { };
  },
  data () {
    return {
      info: null,
      dialog: false,
      selectedPlanName: null,
      selectedPlanID: null,
      loading:false
    }
  },
  mounted () {
    const response = getPlan(this.uid)
      .then(response => (this.info = response))
  },
  computed: {
    uid() {
      return this.$store.state.user?.uid || "";
    },
  },
  methods:{
    testLog() {
      // console.log(this.info);
    },
    test(id){
  const res =  getSuggestPlan(id);
  // console.log(res);
    },
    confirmDeletePlan(Plan_ID,Plan_Name) {

      console.log(Plan_Name);
      this.selectedPlanID = Plan_ID;
      this.selectedPlanName = Plan_Name;
      this.dialog = true;
    },


    async deletePlan() {
      this.loading=true;
      await deletePlan(this.selectedPlanID);
      window.location.reload(true);
    },
  },
};
</script>
