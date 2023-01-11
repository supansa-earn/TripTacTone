<template>
  <v-hover v-slot="{ hover }" open-delay="200">
    <v-card
      class="mx-auto mt-5"
      width="300px"
      max-height="500px"
      color="listcard"
      :elevation="hover ? 16 : 2"
      :class="{ 'on-hover': hover }"
      :to="`/cafes/${data.Cafe_ID}`"
      @mouseover="hoverTxt = 'Read full article'"
      @mouseleave="hoverTxt = ''"
    >
      <v-img
        class="white--text align-end"
        height="300px"
        :src="`${data.Cafe_Pics}`"
      >
      </v-img>
      <div
        class="text-center text-subtitle2 my-2 font-weight-bold teal--text text--darken-4"
      >
        {{ data.Cafe_Name }}
      </div>
      <div class="mx-2 text-caption font-weight-bold teal--text text--darken-4">
        Location
      </div>
      <div class="mx-2 text-caption">
        {{ data.Address }}
      </div>

      <div class="d-flex justify-end mt-2">
        <v-btn text color="blue darken-3" x-small>
          {{ hoverTxt }}
        </v-btn>
      </div>
    </v-card>
  </v-hover>
</template>
<style scoped>
.v-card {
  cursor: pointer;
}
</style>
<script>
export default {
  props: ["data"],
  data() {
    return {
      hoverTxt: "",
    };
  },
};
</script>
