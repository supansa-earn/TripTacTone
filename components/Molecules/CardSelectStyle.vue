<template>
  <v-card
    class="mx-auto"
    max-width="300px"
  >
    <v-img
      class="white--text align-end"
      height="300px"
      src="https://64.media.tumblr.com/b805a25cae7e15491829160595938fb5/28e94305105f294b-9f/s500x750/77ff3e2148eba1ef9ae1f3322176b61259644828.jpg"
    >
    </v-img>

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
