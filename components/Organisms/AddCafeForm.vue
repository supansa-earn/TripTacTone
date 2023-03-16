<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="secondary"
        text
        rounded
        v-bind="attrs"
        v-on="on"
        class="mr-5"
      >
        Add Cafe
      </v-btn>
    </template>
    <v-card>
      <v-app-bar dark color="secondary" elevation="1">
        <v-card-title>
          <span class="text-h5">Add Cafe</span>
        </v-card-title>
      </v-app-bar>

      <v-card-text class="mt-6">
        <v-container>
          <v-row>
            <v-form ref="form">
              <div>
                <v-text-field
                  v-model="name"
                  label="Cafe Name"
                  required
                  outlined
                  :rules="inputRule"
                >
                </v-text-field>
              </div>
              <div>
                <v-textarea
                  v-model="address"
                  label="Address"
                  required
                  outlined
                  :rules="inputRule"
                  auto-grow
                  rows="2"
                  row-height="30"
                ></v-textarea>
              </div>
              <div>
                <v-textarea
                  v-model="detail"
                  label="Detail"
                  auto-grow
                  required
                  outlined
                  :rules="inputRule"
                ></v-textarea>
              </div>
              <div>
                <v-combobox
                  :items="tones"
                  label="Select Mood&Tone (maximum 3 items)"
                  multiple
                  chips
                  required
                  outlined
                  :rules="comboboxRule"
                  v-model="selectedTone"
                  @change="selectMood"
                ></v-combobox>
              </div>
              <v-row>
                <v-col class="d-flex" cols="6" sm="6">
                  <v-select
                    :items="styles"
                    label="Style"
                    v-model="selectedStyle"
                    :rules="inputRule"
                    required
                    outlined
                  ></v-select>
                </v-col>
                <v-col class="d-flex" cols="6" sm="6">
                  <v-select
                    :items="times"
                    label="Photogenic Time"
                    v-model="selectedTime"
                    :rules="inputRule"
                    required
                    outlined
                  ></v-select>
                </v-col>
              </v-row>

              <div>
                <h3>Color Palette</h3>
                <v-row class="d-flex justify-space-between">
                  <v-col class="d-flex" cols="7" sm="7">
                    <v-color-picker
                      mode.sync="hexa"
                      hide-inputs
                      v-model="holdColor"
                    ></v-color-picker>
                  </v-col>
                  <v-col cols="4" sm="4">
                    <v-btn block @click="onAddColor">Add</v-btn>
                    <div v-for="(color, i) in selectedColor" :key="i">
                      <v-chip
                        class="d-flex justify-center"
                        style="width: 100%; margin-top: 12px"
                        :color="color"
                        label
                        close
                        @click:close="onRemoveColor(i)"
                      >
                        {{ color }}
                      </v-chip>
                    </div>
                  </v-col>
                </v-row>
              </div>

              <div class="mt-5">
                <v-row class="d-flex align-center">
                  <h3>Open Close</h3>
                  <v-btn
                    color="secondary"
                    fab
                    x-small
                    class="ml-3"
                    @click="onAddOpenClose"
                    elevation="3"
                  >
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </v-row>

                <!-- <v-row

                > -->
                <!-- Open close time card -->

                <v-card class="mt-5 pa-3" v-for="(el, i) in openClose" :key="i">
                  <v-row class="d-flex justify-end">
                    <v-card-actions>
                      <v-btn
                        icon
                        x-small
                        @click="onRemoveOpenClose(i)"
                        color="red"
                      >
                        <v-icon dark> mdi-window-close </v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-row>
                  <v-row class="d-flex justify-space-between">
                    <v-col cols="3" sm="3" class="ml-5">
                      <v-row>
                        <v-text-field
                          v-model="el.openTime"
                          type="time"
                          label="Open"
                        ></v-text-field
                      ></v-row>
                      <v-row>
                        <v-text-field
                          v-model="el.closeTime"
                          type="time"
                          label="Close"
                        ></v-text-field
                      ></v-row>
                    </v-col>
                    <v-col cols="8" sm="8">
                      <v-combobox
                        :items="days"
                        multiple
                        chips
                        required
                        outlined
                        :rules="comboboxRule"
                        v-model="el.days"
                      ></v-combobox>
                    </v-col>
                  </v-row>
                </v-card>

                <!-- </v-row> -->
              </div>
              <!-- <div>
                <subtitle-1>Upload image to extract color</subtitle-1>
                <v-card height="50vh">
                  <v-card-text>
                    <v-img
                      :src="
                        image
                          ? imagePreview
                          : 'https://picsum.photos/id/11/500/300'
                      "
                      lazy-src="https://picsum.photos/id/11/10/6"
                      height="30vh"
                    ></v-img>
                    <v-file-input
                      v-model="image"
                      accept="image/png, image/jpeg, image/bmp"
                      placeholder="Pick an image"
                      prepend-icon="mdi-camera"
                      @change="selectImage"
                      @click:clear="clearImagePreview()"
                      label="Image"
                    ></v-file-input>
                  </v-card-text>
                </v-card>
              </div> -->
            </v-form>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="secondary" text @click="closeForm"> Close </v-btn>
        <v-btn color="secondary" text :loading="loading" @click="submit">
          Add
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { createCafes } from "../../api/cafe";
import axios from "axios";

export default {
  async asyncData() {
    const cafes = await createCafes(); //remove .slice(0, 8) after finish get on backend
    return { cafes: null };
  },
  data: () => ({
    dialog: false,
    name: "",
    address: "",
    detail: "",
    tones: ["Dark", "Light", "Earthy", "Pastel"],
    styles: ["Minimal", "Japandi", "Loft", "Modern"],
    times: ["08.00-10.00", "11.00-13.00", "15.00-17.00"],
    image: "",
    imagePreview: "",
    selectedTime: null,
    selectedTone: [],
    selectedStyle: null,
    inputRule: [(v) => !!v || "Required"],
    comboboxRule: [(v) => v.length > 0 || "Required"],
    selectedColor: [],
    holdColor: null,
    loading: false,
    openClose: [],
    days: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  }),
  methods: {
    closeForm() {
      this.dialog = false;
      this.$refs.form.reset();
    },
    async selectImage(e) {
      const file = e;
      if (!file) return;
      const readData = (f) =>
        new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(f);
        });
      const data = await readData(file);
      this.imagePreview = data;
    },
    async clearImagePreview() {
      this.imagePreview = "";
    },
    selectMood(item) {
      if (this.selectedTone.length > 3) this.selectedTone.pop();
    },
    onAddColor() {
      if (this.selectedColor.length < 4)
        this.selectedColor.push(this.holdColor.hex);
    },
    onRemoveColor(idx) {
      const a = this.selectedColor.slice(0, idx);
      const b = this.selectedColor.slice(idx + 1);
      this.selectedColor = [...a, ...b];
    },
    onAddOpenClose() {
      const el = {
        openTime: null,
        closeTime: null,
        days: [],
      };

      this.openClose.push(el);
    },
    onRemoveOpenClose(idx) {
      const a = this.openClose.slice(0, idx);
      const b = this.openClose.slice(idx + 1);
      this.openClose = [...a, ...b];
    },
    async submit() {
      const valid = this.$refs.form.validate();
      if (!valid) return;
      this.$emit("addCafe");
      this.loading = true;
      //  $axios.post('/admin',this.form);
      window.location.reload(true);
    },
  },
};
</script>
<style scoped></style>
