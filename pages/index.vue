<template>
  <v-app>
    <Navbar></Navbar>

    <v-row class="pt-15">
      <v-col md="12" sm="6" class="d-flex justify-center mt-16">
        <div>
          <h3 class="font-weight-medium pl-8 headline">Trip Tac Tone</h3>

          <h1 class="mt-5 font-weight-black">It's cafe o'clock</h1>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col md="4" sm="6" v-for="(el, index) in cards" :key="index">
        <div class="d-flex align-end justify-center">
          <SearchCard :imgSrc="el.imgSrc">
            <SelectCafe v-if="el.action == actionType.SELECT_CAFE"/>
            <DropdownSearch
              v-if="
                el.action == actionType.SELECT_MOOD ||
                el.action == actionType.SELECT_STYLE
              "
              :items="el.items"
              :title="el.title"
            />
          </SearchCard>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="d-flex justify-center">
          <CreatePlan></CreatePlan>
        </div>
      </v-col>
    </v-row>
  </v-app>
</template>

<style scoped></style>

<script>
import LoginBtn from "../components/Atoms/LoginBtn.vue";
import Hamburger from "../components/Atoms/Hamburger.vue";
import CreatePlan from "../components/Atoms/CreatePlan.vue";
import Navbar from "../components/Organisms/Navbar.vue";
import SearchCard from "../components/Molecules/searchCard.vue";
import SelectCafe from "../components/Atoms/SelectCafe.vue";
import DropdownSearch from "../components/Molecules/DropdownSearch.vue";
const ACTION_TYPE = {
  SELECT_CAFE: "selectCafe",
  SELECT_MOOD: "selectMood",
  SELECT_STYLE: "selectStyle",
};

export default {
  components: {
    LoginBtn,
    Hamburger,
    CreatePlan,
    Navbar,
    SearchCard,
    SelectCafe,
    DropdownSearch,
  },

  data() {
    return {
      actionType: ACTION_TYPE,
      cards: [
        {
          imgSrc:
            "https://www.naibann.com/wp-content/uploads/2019/05/moc-little-farm-cafe-12.jpg",
          action: ACTION_TYPE.SELECT_CAFE,
        },
        {
          imgSrc:
            "https://i.pinimg.com/564x/a0/1c/08/a01c08b33d2df14b566e7bfd767398a0.jpg",
          action: ACTION_TYPE.SELECT_MOOD,
          title: "Select Mood&Tone",
          items: ["m1", "m2", "m3", "m4"],
        },
        {
          imgSrc:
            "https://64.media.tumblr.com/b805a25cae7e15491829160595938fb5/28e94305105f294b-9f/s500x750/77ff3e2148eba1ef9ae1f3322176b61259644828.jpg",
          action: ACTION_TYPE.SELECT_STYLE,
          title: "Select Style",
          items: ["s1", "s2", "s3", "s4"],
        },
      ],
    };
  },
};
</script>
