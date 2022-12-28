<template>
  <v-btn
  icon
  x-large
  color="red"
  @click="$auth.loginWith('google')"
  >
   <v-icon>
    mdi-google
   </v-icon>
  </v-btn>
</template>
<script>
export default {

}
</script>
