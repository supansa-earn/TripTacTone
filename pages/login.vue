<template>
<div>
    <v-app>
        <v-row>
            <v-col>
                <v-card color="primary" class="mx-auto pa-5 my-16" max-width="344">
                    <v-card-title class="d-flex justify-center">
                        Welcome to Trip Tac Tone
                    </v-card-title>
                    <v-card-actions class="d-flex justify-center">
                        <v-form ref="form" lazy-validation>
                            <v-text-field v-model="email" :rules="emailRules" label="Email" required solo>
                            </v-text-field>

                            <v-text-field v-model="password" :rules="passwordRules" label="Password" required solo></v-text-field>
                            <div class="d-flex justify-center">
                              <LoginBtn></LoginBtn>
                            </div>
                            <FbBtn></FbBtn>
                        </v-form>

                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-app>

</div>
</template>

<script>
import FbBtn from '../components/Atoms/FbBtn.vue';
import LoginBtn from '../components/Atoms/LoginBtn.vue';

export default {
    email: "",
    emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    components: {
    LoginBtn,
    FbBtn
}

};
</script>

<style>
#app {
    background: url('https://d1tm14lrsghf7q.cloudfront.net/media/files/rtf/2019_11_FRAME/labotory_cafe_oriente_22.jpg') no-repeat center center fixed !important;
    background-size: cover;
}
</style>
