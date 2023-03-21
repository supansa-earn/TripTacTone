<template>
  <v-app>
      <v-app-bar color="background" elevate-on-scroll fixed>
        <div @click="drawer = !drawer"><Hamburger></Hamburger></div>

        <v-toolbar-title class="font-weight-bold pl-8 headline text4 web-title">
          <div>Trip Tac Tone</div>
          <v-img :width="60" class="ml-1" src="./Untitled.png" style="border: 1px solid transparent" />
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <AddCafeForm @addCafe="onAddCafe"/>
        <LoginBtn/>
      </v-app-bar>

    <v-container class="mt-10 pt-15">
      <v-data-table
        :headers="headers"
        :items="cafes"
        item-key="name"
        class="elevation-1 pa-6"
      >
       <template v-slot:header.Photogenic_Time >
        <button @click.stop="dialog2=true">Photogenic Time
          <v-icon small>mdi-information-outline</v-icon>
        </button>
      </template>
        <template v-slot:top>
          <!-- v-container, v-col and v-row are just for decoration purposes. -->
          <v-container fluid>
            <v-row>
              <v-col cols="6" class="d-flex align-center">
                <h2 class="red--text text--lighten-1">DATA TABLE</h2>
              </v-col>

              <v-col cols="6">
                <v-row class="pa-6">
                  <!-- Filter for cafe name-->
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
          <!-- <v-btn icon color="red darken-3">
            <v-icon>mdi-pencil</v-icon>
          </v-btn> -->
          <EditCafeForm @editCafe="onEditCafe" :cafe="item"

          />
          <!-- <div v-for="(d, i) in cafe.openclose"
                    :key="i"
                    class="text-caption">


          </div> -->


          <v-btn
            icon
            color="red darken-3"
            @click.stop="confirmDeleteCafe(item)"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-container>

    <v-dialog v-model="dialog" max-width="700">
      <v-card>
        <v-card-title class="text-h5">
          Are you sure you want to delete {{ selectedCafeName }}?
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="secondary" text @click="dialog = false">
            Cancel
          </v-btn>

          <v-btn color="secondary" text @click="deleteCafe" :loading="loading">
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog2" max-width="700">
      <v-card>
        <v-card-title class="text-h5">
         Photogenic Time Information
        </v-card-title>
        <v-card-text>
          Photogenic Time is the time of the light that is suitable for taking pictures. <br><br>

          There are 3 durations <br>
          &nbsp&nbsp&nbsp 0 : 08.00 - 10.00 - outdoor photo spot<br>
          &nbsp&nbsp&nbsp 1 : 11.00 - 14.00 - indoor photo spot<br>
          &nbsp&nbsp&nbsp 2 : 15.00 - 17.00 - outdoor photo spot<br>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="secondary" text @click="dialog2 = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-overlay
      absolute
      opacity="0"
      :value="loading"
      z-index="1000"
    />
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
.web-title{
  font-family: 'Pacifico' !important;
  display: flex;
  align-items: center;
}

</style>
<script>
import LoginBtn from "../../components/Atoms/LoginBtn.vue";
import AddCafeForm from "../../components/Organisms/AddCafeForm.vue";
import { getAllDetailCafes } from "../../api/cafe";
import { deleteCafe } from "../../api/cafe/delete";
import EditCafeForm from "../../components/Organisms/EditCafeForm.vue";

export default {
  components: { LoginBtn, AddCafeForm, EditCafeForm },
  // async asyncData() {
  //   const cafes = await getAllDetailCafes(); //remove .slice(0, 8) after finish get on backend
  //   return { cafes};
  // },
  async asyncData() {
    const res = await getAllDetailCafes();
    const cafes = res.map((el) => {
      let selectedTime;
      if(el.Photogenic_Time==1){
        selectedTime="08.00-10.00"
      }else if(el.Photogenic_Time==2){
        selectedTime="11.00-14.00"
      }else if(el.Photogenic_Time==3){
        selectedTime="15.00-17.00"
      }
      return {...el,selectedTime};
    });

    // const open=[]
    // for(const eachcafe of cafes){
    //   for(const time of eachcafe.openClose){

    //   }
    // }

    // const dayweight = {
    //     Monday: 1,
    //     Tuesday: 2,
    //     Wednesday: 3,
    //     Thursday: 4,
    //     Friday: 5,
    //     Saturday: 6,
    //     Sunday: 7,
    //   };
    //   const dayfill = [
    //     {
    //       day: "Monday",
    //       isfill: false,
    //       default: { isclosed: true, day: "Monday" },
    //     },
    //     {
    //       day: "Tuesday",
    //       isfill: false,
    //       default: { isclosed: true, day: "Tuesday" },
    //     },
    //     {
    //       day: "Wednesday",
    //       isfill: false,
    //       default: { isclosed: true, day: "Wednesday" },
    //     },
    //     {
    //       day: "Thursday",
    //       isfill: false,
    //       default: { isclosed: true, day: "Thursday" },
    //     },
    //     {
    //       day: "Friday",
    //       isfill: false,
    //       default: { isclosed: true, day: "Friday" },
    //     },
    //     {
    //       day: "Saturday",
    //       isfill: false,
    //       default: { isclosed: true, day: "Saturday" },
    //     },
    //     {
    //       day: "Sunday",
    //       isfill: false,
    //       default: { isclosed: true, day: "Sunday" },
    //     },
    //   ];

    //   const openclose = [];
    //   console.log(cafes.openClose);
    //   if (Array.isArray(cafes.openClose)) {
    //     for (const time of cafes.openClose) {
    //       if (Array.isArray(time.day)) {
    //         for (const day of time.day) {
    //           const check = dayfill.find((cafes) => cafes.day == day);
    //           check.isfill = true;
    //           openclose.push({
    //             day,
    //             open: time.open,
    //             close: time.close,
    //             isclosed: false,
    //           });
    //         }
    //       }
    //     }
    //   }
    //   dayfill.forEach((cafes) => {
    //     if (!cafes.isfill) openclose.push(cafes.default);
    //   });
    //   openclose.sort((a, b) => {
    //     if (dayweight[a.day] > dayweight[b.day]) {
    //       return 1;
    //     } else if (dayweight[b.day] > dayweight[a.day]) {
    //       return -1;
    //     }
    //   });

      // <div
      //               v-for="(d, i) in cafe.openclose"
      //               :key="i"
      //               class="text-caption"
      //               :class="{ today: todayIndex == i + 1 }"
      //             >
      //               {{
      //                 !d.isclosed
      //                   ? d.day + "|" + d.open + "-" + d.close
      //                   : d.day + "closed"
      //               }}
      //             </div>

        // console.log(openclose)
    return { cafes };
  },
  data() {

    return {
      // Filter models.

      cafeFilterValue: "",
      dialog: false,
      dialog2:false,
      selectedCafeName: null,
      selectedCafeID: null,
      loading:false,

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
        { text: "Address", value: "Address", sortable: false, width: "200px" },

        {
          text: "Open",
          value: "openClose[0].open",
          sortable: false,
          width: "130px",
        },
        { text: "Close", value: "openClose[0].close", sortable: false, width: "130px" },
        // { text: "open-close", value: "openclose", sortable: false, width: "200px" },
        { text: "Photogenic Time", value: "Photogenic_Time", width: "120px", sortable:false },
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
      return value?.toLowerCase().includes(this.cafeFilterValue.toLowerCase());
    },
    // openForm(){
    //   if(openForm == )
    // },
    confirmDeleteCafe(cafe) {
      console.log(cafe);
      this.selectedCafeID = cafe.Cafe_ID;
      this.selectedCafeName = cafe.Cafe_Name;
      this.dialog = true;
    },
    testLog(cafe) {
      console.log(cafe);
    },
    onAddCafe(){
      this.loading=true;
    },
    onEditCafe(){
      this.loading=true;
    },
    async deleteCafe() {
      this.loading=true;
      await deleteCafe(this.selectedCafeID);
      window.location.reload(true);
    },
  },
};
</script>
