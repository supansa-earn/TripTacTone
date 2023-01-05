<template>
  <div id="firebaseui-auth-container"></div>
</template>
<script>
export default {
  mounted() {
    console.log(process.env)
    const firebaseui = require("firebaseui");
    require("firebaseui/dist/firebaseui.css");

    const ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(this.$fire.auth);

    const config = {
      signInOptions: [
        this.$fireModule.auth.EmailAuthProvider.PROVIDER_ID,
        this.$fireModule.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      signInSuccessUrl: "/",
    };
    ui.start("#firebaseui-auth-container", config);

    const loginWithEmailBtn = document.querySelector(
      ".firebaseui-idp-password .firebaseui-idp-text"
    );
    loginWithEmailBtn.innerHTML = "Email Sign in/Sign up";
  },
};
</script>
