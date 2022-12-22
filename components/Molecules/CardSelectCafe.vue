<template>
  <v-card
    class="mx-auto"
    max-width="300px"
    color="card"
  >
    <v-img
      class="white--text align-end"
      height="300px"
      src="https://www.naibann.com/wp-content/uploads/2019/05/moc-little-farm-cafe-12.jpg"
    >
    </v-img>
<v-card-title class="pt-3">

</v-card-title>
<v-card-action class="d-flex align-center justify-center pb-6">

  <SelectCafe></SelectCafe>

</v-card-action>




  </v-card>
</template>
<script>
import SelectCafe from '../Atoms/SelectCafe.vue';


export default {
    components: { SelectCafe }
}
</script>
