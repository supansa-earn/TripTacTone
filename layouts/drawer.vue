<template>
<v-main>
    <v-app>
        <v-row class="ma-7">
            <v-col cols="12" sm="6" md="12">
                <v-btn
                click.stop="drawer = !drawer"
                class="mx-2"
                fab
                small>
                    <v-icon>
                        mdi-menu
                    </v-icon>

                </v-btn>
                <v-navigation-drawer v-model="drawer"
                absolute
                temporary
               >
                    <v-list>
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

 </v-col>
        </v-row>
    </v-app>
</v-main>
</template>

<script>
export default {
    data: () => ({
        drawer: false,
        group: null,
    }),

    watch: {
        group() {
            this.drawer = false
        },
    },
}
</script>
