<template>
  <div class="box">
    <v-select :items="items" :label="title" @change="selectItem" solo dense></v-select>
  </div>
</template>
<script>
export default {
  props: ["title", "items"],
  methods:{
    selectItem(item){
      this.$emit('selectItem',item)
    }
  }
};
</script>
<style scoped>
.box {
  max-width: 195px !important;

}
</style>
