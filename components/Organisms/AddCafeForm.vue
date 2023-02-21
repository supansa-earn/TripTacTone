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
      </v-btn></template
    >
    <v-card>
      <v-app-bar
      dark
      color="secondary"
      elevation="1"
      >
      <v-card-title>
        <span class="text-h5">Add Cafe</span>
      </v-card-title>
    </v-app-bar>

      <v-card-text class="mt-6">
        <v-container>
          <v-row>
            <form>
              <div>
                <v-text-field label="Cafe Name" required outlined></v-text-field>
              </div>
              <div>
                <v-text-field label="Detail" required outlined></v-text-field>
              </div>
              <div>
                <v-text-field label="Address" required outlined></v-text-field>
              </div>
              <div>
                <v-combobox
                  :items="items"
                  label="Select Mood&Tone"
                  multiple
                  chips
                  required
                  outlined
                ></v-combobox>
              </div>
              <v-row>
              <v-col class="d-flex" cols="6" sm="6">
                <v-select :items="styles" label="Style" required outlined></v-select>
              </v-col>
              <v-col class="d-flex" cols="6" sm="6">
                <v-select :items="times" label="Photogenic Time" required outlined></v-select>
              </v-col>
            </v-row>
             <div>
              <h3>Color Palette</h3>
              <subtitle-1>Upload image to extract color</subtitle-1>
              <v-card height="50vh">
                <v-card-text>
                  <v-img
                    :src="image ? imagePreview : 'https://picsum.photos/id/11/500/300'"
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

             </div>

            </form>
          </v-row>
        </v-container>

      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="secondary" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="secondary" text @click="dialog = false"> Add </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { createCafes } from "../../api/cafe";
export default {
  async asyncData() {
    const cafes = (await createCafes()); //remove .slice(0, 8) after finish get on backend
    return { cafes };
  },
  data: () => ({
    dialog: false,
    items: ["Dark", "Light", "Earthy", "Pastel"],
    styles: ["Minimal", "Japandi", "Loft", "Modern"],
    times: ["8.00-10.00", "11.00-13.00", "15.00-17.00"],
    image: "",
    imagePreview: "",
  }),
  methods: {
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
  },
};
</script>
<style scoped></style>
