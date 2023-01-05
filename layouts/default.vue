<template>
  <nuxt />
</template>

<style scoped>
#app {
  background: #f6f1eb;
}
</style>
<script>
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../plugins/firebase";
let currentUser = null;
onAuthStateChanged(auth, (user) => {
  if (user) {
    currentUser = {
      username: user.displayName,
      accessToken: user.accessToken,
      uid: user.uid,
      email: user.email,
      photoURL: user.photoURL,
    };
  }
});

export default {
  beforeMount() {
    this.$store.commit("ON_AUTH_STATE_CHANGED_MUTATION", currentUser);
  },
};
</script>
