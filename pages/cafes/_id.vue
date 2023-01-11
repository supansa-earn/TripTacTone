<template>
  <v-app>
    <div class="frame mt-15">
      Hi
      <v-card
        class="mx-auto mt-5"
        width="700px"
        color="background"
        elevation="2"
        :data="cafe"
      >
        fghjkl
      </v-card>
    </div>
    <div class="text-center mt-4">
      <v-btn class="px-10 ml-10" color="secondary" elevation="3" rounded to="/cafes"> Back </v-btn>
    </div>
  </v-app>
</template>
<script>
export default {
  props: ["data"],
};
</script>
<style scoped>
.frame {
  background-color: #e7e0d8;

  height: 80%;
}
</style>
