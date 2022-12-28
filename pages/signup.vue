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
              Create an Account
            </v-card-title>
            <v-card-subtitle class="d-flex justify-center"
              >Trip Tac Tone</v-card-subtitle
            >
            <v-card-actions class="d-flex justify-center">
              <v-form ref="form" lazy-validation>
                <v-text-field
                name="username"
                prepend-icon="mdi-account"
                type="text"
                v-model="name"
                label="Name"
                required

              >
              </v-text-field>

                <v-text-field
                  name="login"
                  prepend-icon="mdi-email"
                  type="text"
                  v-model="email"
                  :rules="emailRules"
                  label="Email"
                  required
                >
                </v-text-field>

                <v-text-field
                  name="password"
                  prepend-icon="mdi-lock"
                  type="password"
                  v-model="password"
                  label="Password"
                  required
                ></v-text-field>

                <div class="d-flex justify-center">
                  <v-btn rounded color="secondary" class="px-5" @click="login">
                    Sign Up
                  </v-btn>
                </div>
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
      email: "",
      password: "",
      errors: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log(user);
          this.$router.push("/home");
        })
        .catch((error) => {
          this.errors = error;
        });
    },
  },
};
</script>

<style>
#app {
  overflow: hidden;
  height: 100vh;
  background: linear-gradient(
      0deg,
      rgba(241, 239, 188, 0.562),
      rgba(255, 255, 255, 0.597)
    ),
    url(https://d1tm14lrsghf7q.cloudfront.net/media/files/rtf/2019_11_FRAME/labotory_cafe_oriente_22.jpg)
      no-repeat center center fixed;
}
</style>
