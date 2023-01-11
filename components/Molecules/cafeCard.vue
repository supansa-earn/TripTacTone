<template>
  <v-card
    class="mx-auto mt-5"
    width="300px"
    max-height="500px"
    color="listcard"
    elevation="4"
    :data="cafe"
  >
    <v-img
      class="white--text align-end"
      height="300px"
      :src="`${data.Cafe_Pics}`"
    >
    </v-img>
    <div class="text-center text-subtitle2 my-2 font-weight-bold teal--text text--darken-4">
      {{ data.Cafe_Name }}
    </div>
    <div class="mx-2 text-caption font-weight-bold teal--text text--darken-4">
      Location
    </div>
    <div class="mx-2 text-caption ">
      {{ data.Address }}
    </div>

    <div class="d-flex justify-end">
      <v-btn text color="blue darken-3" x-small rounded> Read full article </v-btn>
    </div>
  </v-card>
</template>
<style scoped></style>
<script>
export default {
  props: ["data"],
};
</script>
