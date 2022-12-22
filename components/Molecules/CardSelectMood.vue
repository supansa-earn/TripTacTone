<template>
  <v-card
    class="mx-auto"
    max-width="300px"
  >
    <v-img
      class="white--text align-end"
      height="300px"
      src="https://i.pinimg.com/564x/a0/1c/08/a01c08b33d2df14b566e7bfd767398a0.jpg"
    >
    </v-img>
    <v-card-title class="pt-2">

    </v-card-title>
<v-card-action class="d-flex align-center justify-center">

<SelectMood></SelectMood>
<v-btn
  fab
  small
>
  <v-icon>
    mdi-magnify
  </v-icon>
</v-btn>
</v-card-action>




  </v-card>
</template>
<script>
import SelectMood from '../Atoms/SelectMood.vue';




export default {
    components: { SelectMood }
}
</script>
