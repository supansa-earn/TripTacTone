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
import { createCafes } from "../../api/cafe";

export default {
  components: { LoginBtn, AddCafeForm },
  async asyncData() {
    const cafes = (await createCafes()); //remove .slice(0, 8) after finish get on backend
    return { cafes };
  },
  data() {
    return {
      // Filter models.
      cafeFilterValue: "",

      // Table data.
      cafes: [
        {
          name: "Frozen Yogurt",
          calories:
            "gbhnm,lk nmkl;lkjhg nm,.,mdvh jddfidjkdjdgyusdk dcigyjmlmcxgtzyh kczxhnzl;hzyxg xjccxncx xxczhjnz ggxklzznllkv",
          fat: "Loft",
          carbs: "Dark",
          protein: "#df54h",
          iron: "13.00-15.00",
          iron1: "Monday:15.00",
          addr: " 200 ถนน สุเทพ ตำบลสุเทพ อำเภอเมืองเชียงใหม่ เชียงใหม่ 50200",
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: "Modern",
          carbs: "Earthy",
          protein: "#df54h",
          iron: "13.00-15.00",
          iron1: "Saturday:15.00",
        },
        {
          name: "Eclair",
          calories: 262,
          fat: "Minimal",
          carbs: "Pastel",
          protein: "#df54h",
          iron: "09.00-11.00",
          iron1: "Thursday:15.00",
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: "Japandi",
          carbs: "Light",
          protein: "#df54h",
          iron: "09.00-11.00",
          iron1: "Wednesday:15.00",
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "15.00-17.00",
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "15.00-17.00",
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "15.00-17.00",
        },
        {
          name: "The baristro asian style",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "13.00-15.00",
        },
        {
          name: "Koff & Things",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "09.00-11.00",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "09.00-11.00",
        },
      ],
    };
  },
  computed: {
    headers() {
      return [
        {
          text: "Cafe Name",
          align: "left",
          sortable: false,
          value: "name",
          filter: this.nameFilter,
          class: "red--text lighten-2 subtitle-2",
        },
        {
          text: "Detail",
          value: "calories",
          sortable: false,
          width: "300px",
        },
        { text: "Style", value: "fat", sortable: false },
        { text: "Tone", value: "carbs", sortable: false },
        { text: "Color_1", value: "protein", sortable: false },
        { text: "Color_2", value: "protein", sortable: false },
        { text: "Color_3", value: "protein", sortable: false },
        { text: "Color_4", value: "protein", sortable: false },
        { text: "Photogenic Time", value: "iron", width: "120px" },
        { text: "Open", value: "iron1", sortable: false, width: "130px" },
        { text: "Close", value: "iron1", sortable: false, width: "130px" },
        { text: "Address", value: "addr", sortable: false, width: "200px" },
        { text: "Upload_Photo", value: "", sortable: false },
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
