<template>
  <v-btn
    class="radius rounded-xl"
    color="button red--text"
    @click="authHandler"
    @mouseover="onMouseOver"
    @mouseleave="onMouseLeave"
  >
    {{ authBtn }}
    <v-icon> mdi-account </v-icon>
  </v-btn>
</template>

<script>
import { logout } from "../../plugins/firebase";
export default {
  props: ["username"],
  data() {
    return {
      authBtn: this.username || "Log in",
    };
  },
  methods: {
    authHandler() {
      if (this.username) logout();
      else this.$router.push({ path: "/login" });
    },
    onMouseOver() {
      this.authBtn = Boolean(this.username) ? "Log Out" : "Log in";
    },
    onMouseLeave() {
      this.authBtn = Boolean(this.username) ? this.username : "Log in";
    },
  },
};
</script>
