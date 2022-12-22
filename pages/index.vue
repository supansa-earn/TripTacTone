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
      <v-col md="4" sm="6">
        <div class="d-flex align-end justify-center">
          <CardSelectCafe></CardSelectCafe>
          <!-- <SearchCard :imgSrc="tmpImgSrc"/> -->
        </div>
      </v-col>
      <v-col md="4" sm="6">
        <div class="d-flex align-end justify-center">
          <CardSelectMood></CardSelectMood>
        </div>
      </v-col>
      <v-col md="4" sm="6">
        <div class="d-flex align-end justify-center">
          <CardSelectStyle></CardSelectStyle>
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
import CardSelectCafe from "../components/Molecules/CardSelectCafe.vue";
import CardSelectMood from "../components/Molecules/CardSelectMood.vue";
import CardSelectStyle from "../components/Molecules/CardSelectStyle.vue";
import Navbar from "../components/Organisms/Navbar.vue";
import SearchCard from "../components/Molecules/searchCard.vue";
export default {
  components: {
    LoginBtn,
    Hamburger,
    CardSelectCafe,
    CardSelectMood,
    CardSelectStyle,
    CreatePlan,
    Navbar,
    SearchCard
},

data(){
  return {
    tmpImgSrc:"https://www.naibann.com/wp-content/uploads/2019/05/moc-little-farm-cafe-12.jpg"
  }
}
};
</script>
