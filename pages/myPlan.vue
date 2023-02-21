<template>
  <v-app>
    <Navbar></Navbar>
    <v-content class="ma-16">
      <h1 class="my-10">My Plans</h1>
      <v-row>
        <v-col col="6">
          <v-card color="crcard">
              <v-card-title class="d-flex justify-center">Chic cafe</v-card-title>
              <h4 class="d-flex justify-center">Date: 31 Jan 2023</h4>

            <v-card-text class="bg-white text--primary ">
              <v-timeline align-top dense>
                <v-timeline-item color="secondary" small>
                  <v-row class="pt-1">
                    <v-col cols="3">
                      <strong>09.00-10.00</strong>
                    </v-col>
                    <v-col>
                      <strong>Grain cafe</strong>
                    </v-col>
                  </v-row>
                </v-timeline-item>

                <v-timeline-item color="secondary" small >
                  <v-row class="pt-1">
                    <v-col cols="3">
                      <strong>11.00-13.00</strong>
                    </v-col>
                    <v-col>
                      <strong>DWBH Coffee</strong>
                    </v-col>
                  </v-row>
                </v-timeline-item>

                <v-timeline-item color="secondary" small>
                  <v-row class="pt-1">
                    <v-col cols="3">
                      <strong>11.00-13.00</strong>
                    </v-col>
                    <v-col>
                      <strong>Graph one nimman</strong>
                    </v-col>
                  </v-row>
                </v-timeline-item>
              </v-timeline>
              <v-row class="mt-5 mb-2">
                <v-col col="6" sm="6" class="d-flex justify-end">
                  <v-btn class="px-8" rounded outlined color="secondary">
                    Detail
                  </v-btn>
                </v-col>
                <v-col col="6" sm="6" class="d-flex justify-start">
                  <v-btn class="px-8" rounded outlined color="secondary">
                    Delete
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col col="6">
          <v-card color="crcard">
            <v-card-title class="d-flex justify-center">Chic cafe</v-card-title>
            <h4 class="d-flex justify-center">Date: 31 Jan 2023</h4>

          <v-card-text class="bg-white text--primary ">
            <v-timeline align-top dense>
              <v-timeline-item color="secondary" small>
                <v-row class="pt-1">
                  <v-col cols="3">
                    <strong>09.00-10.00</strong>
                  </v-col>
                  <v-col>
                    <strong>Grain cafe</strong>
                  </v-col>
                </v-row>
              </v-timeline-item>

              <v-timeline-item color="secondary" small >
                <v-row class="pt-1">
                  <v-col cols="3">
                    <strong>11.00-13.00</strong>
                  </v-col>
                  <v-col>
                    <strong>DWBH Coffee</strong>
                  </v-col>
                </v-row>
              </v-timeline-item>

              <v-timeline-item color="secondary" small>
                <v-row class="pt-1">
                  <v-col cols="3">
                    <strong>11.00-13.00</strong>
                  </v-col>
                  <v-col>
                    <strong>Graph one nimman</strong>
                  </v-col>
                </v-row>
              </v-timeline-item>
            </v-timeline>
            <v-row class="mt-5 mb-2">
              <v-col col="6" sm="6" class="d-flex justify-end">
                <v-btn class="px-8" rounded outlined color="secondary">
                  Detail
                </v-btn>
              </v-col>
              <v-col col="6" sm="6" class="d-flex justify-start">
                <v-btn class="px-8" rounded outlined color="secondary">
                  Delete
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
        </v-col>
      </v-row>
    </v-content>
  </v-app>
</template>
<style scoped></style>

<script>
import Navbar from "../components/Organisms/Navbar.vue";

export default {
  components: { Navbar },
};
</script>
