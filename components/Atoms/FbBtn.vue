<template>
  <v-btn
  icon
  x-large
  color="blue"
  @click="login"
  >
   <v-icon>
    mdi-facebook
   </v-icon>
  </v-btn>
</template>
<script>
export default {
  methods: {
  login() {
    this.$auth.loginWith('facebook')
  }
}
}
</script>
