<template>
  <div>
    <v-app>
      <v-row>
        <v-col>
          <v-card
            color="background"
            class="mx-auto pa-3 my-16"
            max-width="344"
            elevation="9"
          >
            <v-card-title class="d-flex justify-center" style="color: #f4592f">
              Welcome to Trip Tac Tone
            </v-card-title>
            <v-card-subtitle class="d-flex justify-center"
              >Login to create your plan</v-card-subtitle
            >
            <v-card-actions class="d-flex justify-center">
              <v-form ref="form" lazy-validation>
                <v-text-field
                  name="login"
                  prepend-icon="mdi-email"
                  type="text"
                  v-model="email"
                  :rules="emailRules"
                  label="Email"
                  required
                  solo
                >
                </v-text-field>

                <v-text-field
                  name="password"
                  prepend-icon="mdi-lock"
                  type="password"
                  v-model="password"
                  :rules="passwordRules"
                  label="Password"
                  required
                  solo
                ></v-text-field>
                <div class="d-flex justify-center">
                  <v-btn rounded color="secondary" class="px-5" @click="login">
                    Login
                  </v-btn>
                </div>
                <v-card-subtitle class="d-flex justify-center">
                  or login via social link
                </v-card-subtitle>
                <v-row class="d-flex justify-center pb-5">
                  <FbBtn></FbBtn>
                  <GGBtn></GGBtn>
                </v-row>
                <v-divider></v-divider>
                <v-card-text class="d-flex justify-center">
                  <v-btn text rounded x-small color="secondary" to="/signup">
                    Create an Account
                  </v-btn></v-card-text>

                  <div class="d-flex justify-center"><v-btn outlined rounded x-small color="blue" to="/">
                      Back Home<v-icon small>mdi-home</v-icon>
                    </v-btn></div>

              </v-form>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-app>
  </div>
</template>

<script>
import FbBtn from "../components/Atoms/FbBtn.vue";
import GGBtn from "../components/Atoms/GGBtn.vue";
import LoginBtn from "../components/Atoms/LoginBtn.vue";


export default {
  components: {
    LoginBtn,
    FbBtn,
    GGBtn,
  },

  data() {
    return {
        email: '',
        password: '',
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  methods:{
    login(){
      alert('form submitted')
    }
  }
  // methods: {
  //   login() {
  //     let that = this;
  //     this.$fire.auth
  //       .signInWithEmailAndPassword(this.auth.email, this.auth.password)
  //       .then((user) => {
  //         //we are signed in
  //         $nuxt.$router.push("/");
  //       });
  //   },
  // },
};
</script>

<style>
#app {
  overflow: hidden;
  height: 100vh;
  background: linear-gradient(
    0deg,
    rgba(206, 187, 157, 0.76),
    rgba(246, 241, 235, 0.459)
    ),
    url(https://d1tm14lrsghf7q.cloudfront.net/media/files/rtf/2019_11_FRAME/labotory_cafe_oriente_22.jpg)
      no-repeat center center fixed;
}
</style>
