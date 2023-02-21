<template>
  <v-card class="mx-auto" width="300px"  color="card" elevation="4">
    <v-img
      class="white--text align-end"
      height="300px"
      :src="imgSrc"
    >
    </v-img>

    <v-card-actions class="d-flex align-center justify-center">
      <slot></slot>
    </v-card-actions>
  </v-card>
</template>
<script>


export default {
  props: ['imgSrc'],

};
</script>
