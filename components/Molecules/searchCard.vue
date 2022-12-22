<template>
  <v-card class="mx-auto" max-width="300px" color="card">
    <v-img
      class="white--text align-end"
      height="300px"
      :src="imgSrc"
    >
    </v-img>

    <v-card-action class="pt-3 d-flex align-center justify-center pb-6">
      <SelectCafe></SelectCafe>
    </v-card-action>
  </v-card>
</template>
<script>
import SelectCafe from "../Atoms/SelectCafe.vue";

export default {
  props: ['imgSrc'],
  components: { SelectCafe },
};
</script>
