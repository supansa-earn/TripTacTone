<template>
  <v-app>
    <Navbar></Navbar>

    <v-row class="pt-13">
      <v-col md="12" sm="6" class="d-flex justify-center mt-13">
        <div>
          <h3
            class="font-weight-medium pl-4 headline d-flex justify-center"
            style="color: #f4592f"
          >
            Trip Tac Tone
          </h3>

          <h1 class="mt-3 font-weight-black text2 ml-6">It's cafe o'clock</h1>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col md="4" sm="6" v-for="(el, index) in cards" :key="index">
        <div class="d-flex align-end justify-center ml-5">
          <SearchCard :imgSrc="el.imgSrc" :actionType="el.action">
            <SelectCafe v-if="el.action == actionType.SELECT_CAFE" />
            <DropdownSearch
              v-if="
                el.action == actionType.SELECT_MOOD ||
                el.action == actionType.SELECT_STYLE
              "
              :items="el.items"
              :title="el.title"
              :actionType="el.action"
            />
          </SearchCard>
        </div>
      </v-col>
    </v-row>
    <!-- <v-row>
      <v-col>
        <div class="d-flex justify-center">
          <CreatePlan to="/login"></CreatePlan>
        </div>
      </v-col>
    </v-row> -->
  </v-app>
</template>

<style scoped>

.text2 {
  color: #f4592f;
  font-size: 50px;
  font-family: "Mansalva", cursive;
}
</style>

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
          title: "Select Mood & Tone",
          items: ["Dark", "Light", "Earthy", "Pastel"],
        },
        {
          imgSrc:
            "https://64.media.tumblr.com/b805a25cae7e15491829160595938fb5/28e94305105f294b-9f/s500x750/77ff3e2148eba1ef9ae1f3322176b61259644828.jpg",
          action: ACTION_TYPE.SELECT_STYLE,
          title: "Select Style",
          items: ["Minimal", "Japandi", "Modern", "Loft"],
        },
      ],
    };
  },
  methods: {
    check() {
      console.log(1234)
      // if(this.$data.cards.actionType == this.$data.cards.items){
      //   console.log(1234);
      // }

    },
  },
};
</script>
