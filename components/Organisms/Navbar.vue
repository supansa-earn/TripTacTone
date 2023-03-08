<template>
  <div>
    <v-app-bar color="background" elevate-on-scroll fixed>
      <div @click="drawer = !drawer"><Hamburger></Hamburger></div>

      <v-toolbar-title class="font-weight-bold pl-8 headline text4 web-title">
        <div>Trip Tac Tone</div>
        <v-img :width="60" class="ml-1" src="./Untitled.png" style="border: 1px solid transparent" />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="secondary" text rounded to="/crplanform" class="mr-5">
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
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <!-- Tone -->
          <!-- <v-list-group
            prepend-icon="mdi-palette-swatch-variant"
            class="nav-item-hover"
          >
            <template v-slot:activator>
              <v-icon slot="prependIcon" large color="primary"></v-icon>
              <v-list-item-title>Mood & Tone</v-list-item-title>
            </template>

            <router-link tag="v-list-item" link to="/styles" class="ml-5">
              <v-list-item-title>Dark</v-list-item-title>
            </router-link>

            <router-link tag="v-list-item" link to="/styles" class="ml-5">
              <v-list-item-title>Light</v-list-item-title>
            </router-link>

            <router-link tag="v-list-item" link to="/styles" class="ml-5">
              <v-list-item-title>Earthy</v-list-item-title>
            </router-link>

            <router-link tag="v-list-item" link to="/styles" class="ml-5">
              <v-list-item-title>Pastel</v-list-item-title>
            </router-link>
          </v-list-group> -->

          <!-- Tone -->
          <v-list-group :value="false" no-action prepend-icon="mdi-palette-swatch-variant">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Mood & Tone</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="tone in tones" :key="tone.text" @click="tone.redirect()">
              <v-list-item-title>{{tone.text}}</v-list-item-title>
            </v-list-item>
          </v-list-group>



          <!-- <v-list-group :value="false" no-action prepend-icon="mdi-palette-swatch-variant">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Mood & Tone</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="([title], i) in tones" :key="i" link>
              <v-list-item-title v-text="title"></v-list-item-title>
            </v-list-item>
          </v-list-group> -->

          <!-- CafeList -->
          <v-list-item to="/cafes">
            <v-list-item-icon>
              <v-icon>mdi-coffee</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Cafe List</v-list-item-title>
          </v-list-item>

          <!-- style -->
          <!-- <v-list-group prepend-icon="mdi-city" class="nav-item-hover">
            <template v-slot:activator>
              <v-icon slot="prependIcon" large color="primary"></v-icon>
              <v-list-item-title>Style</v-list-item-title>
            </template> -->

            <!-- <nuxt-link
              v-for="(style, idx) in styles"
              link
              :key="idx"
              :to="style.url"
              tag="v-list-item"
              class="ml-5"
            >
              <v-list-item-title>{{ style.text }}</v-list-item-title>
            </nuxt-link>
          </v-list-group> -->

          <!-- Style -->
          <v-list-group :value="false" no-action prepend-icon="mdi-city">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Style</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="style in styles" :key="style.text" @click="style.redirect()">
              <v-list-item-title>{{style.text}}</v-list-item-title>
            </v-list-item>
          </v-list-group>

          <!-- Myplan -->
          <v-list-item v-if="username" to="/myPlan">
            <v-list-item-icon>
              <v-icon>mdi-notebook</v-icon>
            </v-list-item-icon>
            <v-list-item-title>My Plan</v-list-item-title>
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
    styles: [
      {
        text: "Minimal",
        redirect: () =>
          (window.location.href = "/cafes?filter=style&value=Minimal"),
      },
      {
        text: "Japandi",
        redirect: () =>
          (window.location.href = "/cafes?filter=style&value=Japandi"),
      },
      {
        text: "Modern",
        redirect: () =>
          (window.location.href = "/cafes?filter=style&value=Modern"),
      },
      {
        text: "Loft",
        redirect: () =>
          (window.location.href = "/cafes?filter=style&value=Loft"),
      },
    ],
    tones:[
      {
        text: "Dark",
        redirect: () =>
          (window.location.href = "/cafes?filter=mood&value=Dark"),
      },
      {
        text: "Light",
        redirect: () =>
          (window.location.href = "/cafes?filter=mood&value=Light"),
      },
      {
        text: "Earthy",
        redirect: () =>
          (window.location.href = "/cafes?filter=mood&value=Earthy"),
      },
      {
        text: "Pastel",
        redirect: () =>
          (window.location.href = "/cafes?filter=mood&value=Pastel"),
      },
    ]
  }),

  computed: {
    username() {
      return this.$store.state.user?.username || "";
    },
  },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

.web-title{
  font-family: 'Pacifico' !important;
  display: flex;
  align-items: center;
}

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
.text4 {
  color: #f4592f;
  font-style: bold;
}
.v-btn:hover:before {
  background-color: currentColor;
}
</style>
