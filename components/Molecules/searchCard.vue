<template>
  <v-card class="mx-auto" width="300px"  color="card" elevation="4">
    <v-img
      class="white--text align-end"
      height="300px"
      :src="imgSrc"
    >
    </v-img>

    <v-card-action class="d-flex align-center justify-cente">
      <slot></slot>
      <!-- <SelectCafe></SelectCafe> -->
    </v-card-action>
  </v-card>
</template>
<script>


export default {
  props: ['imgSrc'],

};
</script>
