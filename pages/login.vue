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
                <v-row class="d-flex justify-center pb-5">
                  <signin></signin>
                </v-row>
                <v-divider></v-divider>
                <div class="d-flex justify-center pt-5">
                  <v-btn outlined rounded x-small color="blue" to="/">
                    Back Home<v-icon small>mdi-home</v-icon>
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
import signin from "../components/Organisms/signin.vue";

export default {
  components: {
    LoginBtn,
    FbBtn,
    GGBtn,
    signin,
  },
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
