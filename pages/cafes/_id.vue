<template>
  <v-app>
    <div class="frame mt-15">
      Hi
      <v-card
        class="mx-auto mt-5"
        width="700px"
        color="background"
        elevation="2"
      
      >
        ghjkl {{ data.Cafe_Name }}
      </v-card>
    </div>
    <div class="text-center mt-4">
      <v-btn class="px-10 ml-10" color="secondary" elevation="3" rounded to="/cafes"> Back </v-btn>
    </div>
  </v-app>
</template>
<script>
import { getCafes } from "../../api/cafe";
export default {
  props: ["data"],
  async asyncData() {
    const cafes = await getCafes();
    return { cafes };
  },
};
</script>
<style scoped>
.frame {
  background-color: #e7e0d8;

  height: 80%;
}
</style>
