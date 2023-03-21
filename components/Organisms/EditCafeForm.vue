<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon color="red darken-3" v-bind="attrs" v-on="on">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-app-bar dark color="secondary" elevation="1">
        <v-card-title>
          <span class="text-h5">Edit Cafe</span>
        </v-card-title>
      </v-app-bar>

      <v-card-text class="mt-6">
        <v-container>
          <v-row>
            <v-form ref="form">
              <div>
                <v-text-field
                  v-model="Cafe_Name"
                  label="Cafe Name"
                  outlined

                >
                </v-text-field>
              </div>
              <div>
                <v-textarea
                  v-model="address"

                  label="Address"
                  outlined
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
                  outlined
                ></v-textarea>
              </div>
              <div>
                <v-combobox
                  :items="tones"
                  label="Select Mood&Tone (maximum 3 items)"
                  multiple
                  chips
                  outlined
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
                    outlined
                  ></v-select>
                </v-col>
                <v-col class="d-flex" cols="6" sm="6">
                  <v-select
                    :items="times"
                    label="Photogenic Time"
                    v-model="cafe.selectedTime"
                    outlined
                  >

                  </v-select>
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
                  <h3 class="ml-3">Open Close</h3>
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
                          v-model="el.open"
                          type="time"
                          label="Open"
                        ></v-text-field
                      ></v-row>
                      <v-row>
                        <v-text-field
                          v-model="el.close"
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
                        outlined
                        v-model="el.day"
                      ></v-combobox>
                    </v-col>
                  </v-row>
                </v-card>

                <!-- </v-row> -->
              </div>

              <div class="mt-10">
                <h3>Upload a photo</h3>
              </div>

              <div class="mt-2">
                <div>
                  <v-btn @click="selectImg" small>choose photo</v-btn>
                  <input
                    type="file"
                    ref="input1"
                    multiple
                    style="display: none"
                    @change="previewImage"
                    accept="image/*"
                  />
                </div>

                <div
                  class="mt-2"
                  v-for="(img, idx) in imgPreview"
                  :key="'img-' + idx"
                >
                  <img class="preview" height="268" width="356" :src="img" />
                  <br />
                </div>
              </div>
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
import { updateCafe } from "../../api/cafe";
import axios from "axios";
// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";
import { storage } from "../../plugins/firebase";

export default {
  props: ["cafe"],

  cafes() {
    return {
      hoverTxt: "",
    };
  },

  data: ({ cafe }) => ({
    dialog: false,
    Cafe_Name: cafe.Cafe_Name,
    address: cafe.Address,
    detail: cafe.Detail,
    tones: ["Dark", "Light", "Earthy", "Pastel"],
    styles: ["Minimal", "Japandi", "Loft", "Modern"],
    times: ["08.00-10.00", "11.00-14.00", "15.00-17.00"],

    imgPreview: cafe.Cafe_Pics,
    imageData: "",
    // selectedTime:  cafe.Photogenic_Time,
    selectedTone: cafe.Tone,
    selectedStyle: cafe.Style,
    inputRule: [(v) => !!v || "Required"],
    comboboxRule: [(v) => v.length > 0 || "Required"],
    selectedColor: cafe.Color,
    holdColor: null,
    loading: false,
    openClose: cafe.openClose,
    days: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    selectedImgs: cafe.Cafe_Pics,

    editing: false,
  }),
  methods: {
    closeForm() {
      this.dialog = false;
      this.$refs.form.reset();
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
        open: null,
        close: null,
        day: [],
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
      this.loading = true;
      const uploadImg = await this.onUpload();
      const data = {
        Cafe_Name: this.Cafe_Name,
        Address: this.address,
        Detail: this.detail,
        Tone: this.selectedTone,
        Style: this.selectedStyle,
        Color: this.selectedColor,
        openClose: this.openClose,
        Cafe_Pics: uploadImg.imgURLs,
        Img_Ref_Path: uploadImg.imgRefPath,
        Photogenic_Time: this.times.indexOf(this.selectedTime),
      };

      // if(this.selectedTime=="08.00-10.00"){
      //   return this.cafe.Photogenic_Time==1
      // }else if(this.selectedTime=="11.00-14.00"){
      //   return this.cafe.Photogenic_Time==2
      // }else if(this.selectedTime=="15.00-17.00"){
      //   return this.cafe.Photogenic_Time==3
      // }
      this.$emit("editCafe");
      await updateCafe(data, this.cafe.Cafe_ID);
      window.location.reload(true);
    },
    selectImg() {
      this.$refs.input1.click();
    },
    previewImage(event) {
      this.uploadValue = 0;
      this.imageData = event.target.files[0];
      if (event.target.files.length > 4) alert("Upload is limited by 4 images");
      else {
        this.imgPreview = [];
        this.selectedImgs = event.target.files;
        for (const file of this.selectedImgs) {
          this.imgPreview.push(URL.createObjectURL(file));
        }
      }
    },
    async onUpload() {
      const imgURLs = [];
      const uuid = self.crypto.randomUUID();
      for (const file of this.selectedImgs) {
        const storageRef = storage.ref(`cafes/${uuid}/${file.name}`);
        const res = await storage
          .upload(storageRef, file)
          .catch((err) => console.error(err));
        const url = await storage.getDownloadURL(res.ref);
        imgURLs.push(url);
      }

      return { imgRefPath: uuid, imgURLs: imgURLs };
    },
  },
};
</script>
<style scoped></style>
