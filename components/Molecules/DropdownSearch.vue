<template>
  <div class="container mt-7">
    <div class="d-flex justify-space-between">
      <Select :items="items" :title="title" @selectItem="selectItem"></Select>
      <v-btn fab small @click="redirect">
        <v-icon> mdi-magnify </v-icon>
      </v-btn>
    </div>
  </div>
</template>
<script>
import Select from "../Atoms/Select.vue";
const ACTION_TYPE = {
  SELECT_CAFE: "selectCafe",
  SELECT_MOOD: "selectMood",
  SELECT_STYLE: "selectStyle",
};

export default {
  components: { Select },
  props: ["title", "items", "actionType"],
  data() {
    return {
      seletedItem: "",
    };
  },
  methods: {
    redirect() {
      let filter = "";
      if (this.actionType == ACTION_TYPE.SELECT_STYLE) filter = "style";
      else if (this.actionType == ACTION_TYPE.SELECT_MOOD) filter = "mood";

      const url = filter ? `/cafes?filter=${filter}&value=${this.selectItem}` : `/cafes?=filter=all`;
      this.$router.push({ path: url });
    },
    selectItem(item) {
      this.selectItem = item;
    },
  },
};
</script>
<style scoped>
.container {
  width: 93%;
}
</style>
