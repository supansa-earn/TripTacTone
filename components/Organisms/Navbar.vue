<template>
  <div>
    <v-app-bar color="primary" elevate-on-scroll fixed>
      <div @click="drawer = !drawer"><Hamburger></Hamburger></div>


      <v-toolbar-title class="font-weight-bold pl-8 headline"
        >Trip Tac Tone</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-btn text color="secondary" class="radius rounded-xl">
        Create Plan
      </v-btn>
      <LoginBtn></LoginBtn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import Hamburger from "../Atoms/Hamburger.vue";
import LoginBtn from "../Atoms/LoginBtn.vue";

export default {
  components: { Hamburger, LoginBtn },
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
