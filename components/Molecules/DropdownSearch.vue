<template>
  <div class="container mt-7">
    <div class="d-flex justify-space-between">
      <Select :items="items" :title="title"></Select>
      <v-btn fab small>
        <v-icon> mdi-magnify </v-icon>
      </v-btn>
    </div>
  </div>
</template>
<script>
import Select from "../Atoms/Select.vue";

export default {
  components: { Select },
  props: ["title", "items"],
};
</script>
<style scoped>
.container {
  width: 93%;
}
</style>
