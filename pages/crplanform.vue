<template>
  <v-app>
    <Navbar></Navbar>
    <div class="mt-14 d-flex justify-center">
      <v-card width="900" class="mt-16" color="crcard" elevation="4">
        <v-row>
          <v-col col="6">
            <v-img
              height="700px"
              width="400px"
              src="https://www.naibann.com/wp-content/uploads/2019/05/moc-little-farm-cafe-6.jpg"
            >
            </v-img>
          </v-col>
          <v-col>
            <v-card-title class="mt-5 text-h4 font-weight-black text">
              Create Plan
            </v-card-title>
            <h1></h1>
            <div class="ml-4">
              <v-form ref="form">
                <div class="box">
                  <h4>Plan Name</h4>
                  <v-text-field
                    v-model="name"
                    label="Plan Name"
                    :rules="inputRule"
                    solo
                  >
                  </v-text-field>
                </div>
                <!-- style -->
                <div class="box">
                  <h4>Style</h4>
                  <v-select
                    :items="styles"
                    label="Select Style"
                    solo
                    :rules="inputRule"
                    v-model="selectedStyle"
                  ></v-select>
                </div>
                <!-- mood -->
                <div class="box">
                  <h4>Mood & Tone</h4>
                  <v-combobox
                    :items="tones"
                    :rules="comboboxRule"
                    label="Select Mood&Tone (maximum 3 items)"
                    multiple
                    chips
                    required
                    solo
                    v-model="selectedTone"
                    @change="selectMood"
                  ></v-combobox>
                </div>

                <!-- date -->
                <h4>Date</h4>
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
                        :rules="inputRule"
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
                        v-model="clock1"
                        :return-value.sync="startTime"
                        persistent
                        width="290px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            :rules="inputRule"
                            v-model="startTime"
                            label="Select Time"
                            solo
                            prepend-inner-icon="mdi-clock"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-time-picker
                          v-if="clock1"
                          v-model="startTime"
                          full-width
                          color="red lighten-1"
                          header-color="secondary"
                        >
                          <v-spacer></v-spacer>
                          <v-btn text color="secondary" @click="clock1 = false"
                            >Cancel</v-btn
                          >
                          <v-btn
                            text
                            color="secondary"
                            @click="$refs.dialog1.save(startTime)"
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
                        v-model="clock2"
                        :return-value.sync="endTime"
                        persistent
                        width="290px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            :rules="inputRule"
                            v-model="endTime"
                            label="Select Time"
                            solo
                            prepend-inner-icon="mdi-clock"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-time-picker
                          v-if="clock2"
                          v-model="endTime"
                          full-width
                          color="red lighten-1"
                          header-color="secondary"
                        >
                          <v-spacer></v-spacer>
                          <v-btn text color="secondary" @click="clock2 = false"
                            >Cancel</v-btn
                          >
                          <v-btn
                            text
                            color="secondary"
                            @click="$refs.dialog2.save(endTime)"
                            >OK</v-btn
                          >
                        </v-time-picker>
                      </v-dialog>
                    </div>
                  </v-col>
                </v-row>

                <!-- btn -->
                <v-card-actions class="d-flex justify-start ml-16 mb-5">
                  <v-btn
                    class="px-16"
                    color="secondary"
                    rounded
                    large
                    @click="onCreatePlan"
                    :loading="loading"
                  >
                    Save Plan
                  </v-btn>
                </v-card-actions>
              </v-form>
            </div>
          </v-col>
        </v-row>
      </v-card>
      <v-snackbar v-model="snackbar" :timeout="3000">
        Create plan successfully!

        <template v-slot:action="{ attrs }">
          <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
      <v-overlay absolute opacity="0" :value="loading" />
    </div>
  </v-app>
</template>
<script>
import Navbar from "../components/Organisms/Navbar.vue";
import { CreatePlan } from "../api/myplan/create";

export default {
  components: { Navbar },
  middleware: "auth",
  data() {
    return {
      name: "",
      tones: ["Dark", "Light", "Earthy", "Pastel"],
      styles: ["Minimal", "Japandi", "Modern", "Loft"],
      date: "",
      menu2: false,
      startTime: null,
      endTime: null,
      clock2: false,
      clock1: false,
      selectedTone: [],
      selectedStyle: null,
      snackbar: false,
      loading: false,
      inputRule: [
        (v) => !!v || "Required",
      ],
      comboboxRule: [
        (v) =>  v.length > 0 || "Required",
      ],
    };
  },
  updated() {
    console.log(this.time);
    console.log(this.test);
  },
  methods: {
    selectMood(item) {
      if (this.selectedTone.length > 3) this.selectedTone.pop();
    },
    async onCreatePlan() {
      const valid = this.$refs.form.validate();
      if (!valid) return;

      this.loading = true;
      const data = {
        name: this.name,
        tones: this.selectedTone,
        style: this.selectedStyle,
        date: this.date,
        duration: [this.startTime, this.endTime],
        userId: this.$store.state.user.uid,
      };

      const res=await CreatePlan(data);
      // console.log(res.data);
      this.snackbar = true;
      // this.$refs.form.reset()
      this.loading = false;
      this.$router.push({ path: `/plan/${res.data}` });
    },
  },
};
</script>
<style scoped>
.box {
  max-width: 345px !important;
}
.size {
  max-width: 150px !important;
}
.text {
  color: #f4592f;
}
#app {
  overflow: hidden;
  height: 115vh;
}
</style>
