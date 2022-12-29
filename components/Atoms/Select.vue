<template>
  <div class="box">
    <v-select :items="items" :label="title" solo dense></v-select>
  </div>
</template>
<script>
export default {
  props: ["title", "items"],
};
</script>
<style scoped>
.box {
  max-width: 195px !important;

}
</style>
