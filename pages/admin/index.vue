<template>
  <v-app>
    <v-app-bar color="background" elevate-on-scroll fixed>
      <v-toolbar-title class="font-weight-bold pl-8 headline text4"
        >Trip Tac Tone</v-toolbar-title
      >
      <v-spacer></v-spacer>

      <AddCafeForm />
      <LoginBtn />
      <!-- <LoginBtn :username="username"></LoginBtn> -->
    </v-app-bar>

    <v-container class="mt-10 pt-15">
      <v-data-table
        :headers="headers"
        :items="cafes"
        item-key="name"
        class="elevation-1 pa-6"
      >
        <template v-slot:top>
          <!-- v-container, v-col and v-row are just for decoration purposes. -->
          <v-container fluid>
            <v-row>
              <v-col cols="6" class="d-flex align-center">
                <h2 class="red--text text--lighten-1">DATA TABLE</h2>
              </v-col>

              <v-col cols="6">
                <v-row class="pa-6">
                  <!-- Filter for dessert name-->
                  <v-text-field
                    v-model="cafeFilterValue"
                    type="text"
                    label="Cafe Name"
                  ></v-text-field>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </template>

        <template #item.actions="{ item }">
          <v-btn icon color="red darken-3">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn icon color="red darken-3">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-container>
  </v-app>
</template>
<style scoped>
.text {
  opacity: 1 !important;
  z-index: 2001;
  font-weight: bold;
  -webkit-text-stroke: 0.2px #f4592f;
  font-size: 22px;
  text-shadow: 2px 2px 0 #f4592f, -1px -1px 0 #f4592f, 1px -1px 0 #f4592f,
    -1px 1px 0 #f4592f, 1px 1px 0 #f4592f;
}
.text4 {
  color: #f4592f;
  font-style: bold;
}
</style>
<script>
import LoginBtn from "../../components/Atoms/LoginBtn.vue";
import AddCafeForm from "../../components/Organisms/AddCafeForm.vue";
import { getAllDetailCafes } from "../../api/cafe";

export default {
  components: { LoginBtn, AddCafeForm },
  async asyncData() {
    const cafes = (await getAllDetailCafes()); //remove .slice(0, 8) after finish get on backend
    console.log(cafes)
    return { cafes };
  },

  data() {
    return {
      // Filter models.
      cafeFilterValue: "",

     
    };
  },
  computed: {
    headers() {
      return [
        {
          text: "Cafe Name",
          align: "left",
          sortable: false,
          value: "Cafe_Name",
          filter: this.nameFilter,
          class: "red--text lighten-2 subtitle-2",
        },
        {
          text: "Detail",
          value: "Detail",
          sortable: false,
          width: "300px",
        },
        { text: "Style", value: "Style", sortable: false },
        { text: "Tone", value: "Tone", sortable: false },
        { text: "Color1", value: "Color[0]", sortable: false },
        { text: "Color2", value: "Color[1]", sortable: false },
        { text: "Color3", value: "Color[2]", sortable: false },
        { text: "Color4", value: "Color[3]", sortable: false },
        { text: "Photogenic Time", value: "Photogenic_Time", width: "120px" },
        { text: "Open", value: "openClose[0].open", sortable: false, width: "130px" },
        { text: "Close", value: "close", sortable: false, width: "130px" },
        { text: "Address", value: "Address", sortable: false, width: "200px" },
        { text: "Upload_Photo", value: "Cafe_Pics", sortable: false },
        {
          text: "Edit/Delete",
          value: "actions",
          sortable: false,
          align: "center",
        },
        
      ];
    },
  },
  methods: {
    /**
     * Filter for dessert names column.
     * @param value Value to be tested.
     * @returns {boolean}
     */
    nameFilter(value) {
      // If this filter has no value we just skip the entire filter.
      if (!this.cafeFilterValue) {
        return true;
      }

      // Check if the current loop value (The dessert name)
      // partially contains the searched word.
      return value.toLowerCase().includes(this.cafeFilterValue.toLowerCase());
    },
  },
};
</script>
