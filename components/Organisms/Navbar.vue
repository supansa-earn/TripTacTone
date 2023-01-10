<template>
  <div>
    <v-app-bar color="background" elevate-on-scroll fixed>
      <div @click="drawer = !drawer"><Hamburger></Hamburger></div>

      <v-toolbar-title class="font-weight-bold pl-8 headline text4"
        >Trip Tac Tone</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-btn color="secondary" text rounded to="/crplanform" class="mr-5" >
        Create Plan
      </v-btn>
      <LoginBtn :username="username"></LoginBtn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-img
        class="white--text align-end img"
        height="130px"
        src="https://i.pinimg.com/564x/55/34/95/553495660e062ee25d77647e58e54179.jpg"
      >
        <v-card-title class="text">Trip Tac Tone</v-card-title>
      </v-img>

      <v-list nav dense>
        <v-list-item-group v-model="group">
          <!-- Home -->
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title >Home</v-list-item-title>
          </v-list-item>

          <!-- Tone -->
          <v-list-group :value="false" no-action prepend-icon="mdi-palette-swatch-variant">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Mood & Tone</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="([title], i) in tones" :key="i" link>
              <v-list-item-title v-text="title"></v-list-item-title>
            </v-list-item>
          </v-list-group>

          <!-- CafeList -->
          <v-list-item to="/cafes">
            <v-list-item-icon>
              <v-icon>mdi-map-marker</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Cafe List</v-list-item-title>
          </v-list-item>

          <!-- Style -->
          <v-list-group :value="false" no-action prepend-icon="mdi-city">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Style</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="([title], i) in styles" :key="i" link>
              <v-list-item-title v-text="title"></v-list-item-title>
            </v-list-item>
          </v-list-group>

          <!-- LogOut -->
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-logout-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Log Out</v-list-item-title>
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
    tones: [["Dark"], ["Light"], ["Earthy"], ["Pastel"]],
    styles: [["Minimal"], ["Japandi"], ["Modern"], ["Loft"]],
  }),

  computed: {
    username() {
      return this.$store.state.user?.username || '';
    },
  },
};
</script>
<style scoped>
.img {
  opacity: 0.6;
}
.text {
  opacity: 1 !important;
  z-index: 2001;
  font-weight: bold;
  -webkit-text-stroke: 0.2px #f4592f;
  font-size: 22px;
  text-shadow: 2px 2px 0 #f4592f, -1px -1px 0 #f4592f, 1px -1px 0 #f4592f,
    -1px 1px 0 #f4592f, 1px 1px 0 #f4592f;
}
.text4{
  color: #f4592f;
  font-style: bold;
}
.v-btn:hover:before {
  background-color: currentColor;
}
</style>
