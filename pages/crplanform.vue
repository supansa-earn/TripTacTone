<template>
  <v-app>
    <Navbar></Navbar>
    <div class="mt-14 d-flex justify-center">
      <v-card width="900" class="mt-16" color="crcard" elevation="4">
        <v-row>
          <v-col col="6">
            <v-img
              height="750px"
              width="400px"
              src="https://www.naibann.com/wp-content/uploads/2019/05/moc-little-farm-cafe-6.jpg"
            >
            </v-img>
          </v-col>
          <v-col>
            <v-card-title class="mt-5 text-h4 font-weight-black text "> Create Plan </v-card-title> <h1></h1>
            <div class="ml-4">
              <form>
                <div class="box">
                   <h4>Plan Name</h4>
                  <v-text-field v-model="name" label="Plan Name" required solo>
                  </v-text-field>
                </div>
                <div class="box">
                   <h4>Style</h4>
                  <v-select :items="items" label="Select Style" solo></v-select>
                </div>
                <div>
                 <h4>Mood & Tone</h4>
                  <v-row>
                    <v-col col="6">
                      <v-checkbox label="Dark Tone" color="secondary">
                      </v-checkbox>
                      <v-checkbox label="Light Tone" color="secondary">
                      </v-checkbox>
                    </v-col>
                    <v-col col="6" class="mr-14">
                      <v-checkbox label="Pastel Tone" color="secondary">
                      </v-checkbox>
                      <v-checkbox label="Earthy Tone" color="secondary">
                      </v-checkbox>
                    </v-col>
                  </v-row>
                </div>

                <!-- date -->
               <h4> Date </h4>
                <div class="box">
                  <v-menu
                    v-model="menu2"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date"
                        label="Select Date"
                        prepend-inner-icon="mdi-calendar"
                        readonly
                        solo
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      color="red lighten-1"
                      v-model="date"
                      @input="menu2 = false"
                      no-title
                    ></v-date-picker>
                  </v-menu>
                </div>

                <!-- Time -->
                <v-row>
                  <v-col col="6">
                     <h4>Start Time</h4>
                    <div class="size">
                      <v-dialog
                        ref="dialog1"
                        v-model="modal1"
                        :return-value.sync="time"
                        persistent
                        width="290px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="time"
                            label="Select Time"
                            solo
                            prepend-inner-icon="mdi-clock"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-time-picker
                          v-if="modal1"
                          v-model="time"
                          full-width
                          color="red lighten-1"
                          header-color="secondary"
                        >
                          <v-spacer></v-spacer>
                          <v-btn text color="secondary" @click="modal1 = false"
                            >Cancel</v-btn
                          >
                          <v-btn
                            text
                            color="secondary"
                            @click="$refs.dialog1.save(time)"
                            >OK</v-btn
                          >
                        </v-time-picker>
                      </v-dialog>
                    </div>
                  </v-col>

                  <v-col col="6" class="mr-14">
                    <h4>End Time</h4>
                    <div class="size">
                      <v-dialog
                        ref="dialog2"
                        v-model="modal2"
                        :return-value.sync="test"
                        persistent
                        width="290px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="test"
                            label="Select Time"
                            solo
                            prepend-inner-icon="mdi-clock"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-time-picker
                          v-if="modal2"
                          v-model="test"
                          full-width
                          color="red lighten-1"
                          header-color="secondary"
                        >
                          <v-spacer></v-spacer>
                          <v-btn text color="secondary" @click="modal2 = false"
                            >Cancel</v-btn
                          >
                          <v-btn
                            text
                            color="secondary"
                            @click="$refs.dialog2.save(test)"
                            >OK</v-btn
                          >
                        </v-time-picker>
                      </v-dialog>
                    </div>
                  </v-col>
                </v-row>

                <!-- btn -->
                <v-card-actions class="d-flex justify-start ml-16 mb-5">
                  <v-btn class="px-16" color="secondary" rounded large >
                    Submit
                  </v-btn>
                </v-card-actions>
              </form>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </v-app>
</template>
<script>
import Navbar from "../components/Organisms/Navbar.vue";

export default {
  components: { Navbar },
  data() {
    return {
      items: ["Minimal", "Japandi", "Modern", "Loft"],
      date: "",
      menu2: false,
      time: null,
      test: null,
      modal2: false,
      modal1: false,
    };
  },
  updated() {
    console.log(this.time);
    console.log(this.test);
  },
};
</script>
<style scoped>
.box {
  max-width: 300px !important;
}
.size {
  max-width: 150px !important;
}
.text{
  color: #F4592F;
}

</style>
