<template>
    <v-app>
        <Navbar></Navbar>
        <v-card width="1000"
        class="d-flex justify-center"
        color="crcard"
        elevation="2"
        >
           <v-row>
<v-col col="6">
<v-img
    height="600px"
    width="400px"
    src="https://www.naibann.com/wp-content/uploads/2019/05/moc-little-farm-cafe-6.jpg">
</v-img>
</v-col>
<v-col>
    <v-card-title class="mt-12">
        Create Plan
    </v-card-title>
    <v-card-actions class="d-flex justify-center">
        <v-form ref="form" lazy-validation>
            <v-card-text>
                Plan Name
                <v-text-field
                    v-model="name"
                    :rules="emailRules"
                    label="Plan Name"
                    required solo
                >
                </v-text-field>
            </v-card-text>
            <v-card-text>
                Mood & Tone
                <v-checkbox
                label="Dark Tone"
                color="secondary"
                >
                </v-checkbox>
                <v-checkbox
                label="Light Tone"
                color="secondary"
                >
                </v-checkbox>
                <v-checkbox
                label="Pastel Tone"
                color="secondary"
                >
                </v-checkbox>
                <v-checkbox
                label="Earthy Tone"
                color="secondary"
                >
                </v-checkbox>
            </v-card-text>
            <v-card-text>
                Style
            <v-select
          :items="items"
          label="Select Style"
          solo
        ></v-select>
    </v-card-text>
    <v-menu
    ref="menu1"
    v-model="menu1"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
      solo
        v-model="dateFormatted"
        label="Date"
        hint="MM/DD/YYYY format"
        persistent-hint
        prepend-icon="mdi-calendar"
        v-bind="attrs"
        @blur="date = parseDate(dateFormatted)"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      v-model="date"
      no-title
      @input="menu1 = false"
    ></v-date-picker>
  </v-menu>

  <v-menu
  ref="menu"
  v-model="menu2"
  :close-on-content-click="false"
  :nudge-right="40"
  :return-value.sync="time"
  transition="scale-transition"
  offset-y
  max-width="290px"
  min-width="290px"
>
  <template v-slot:activator="{ on, attrs }">
    <v-text-field
    solo
      v-model="time"
      label="Start time"
      prepend-icon="mdi-clock-time-four-outline"
      readonly
      v-bind="attrs"
      v-on="on"
    ></v-text-field>
  </template>
  <v-time-picker
    v-if="menu2"
    v-model="time"
    full-width
    @click:minute="$refs.menu.save(time)"
  ></v-time-picker>
</v-menu>

        </v-form>

    </v-card-actions>
</v-col>
           </v-row>
        </v-card>
    </v-app>
</template>
<script>
import Navbar from '../components/Organisms/Navbar.vue';

export default {
    components: { Navbar },
    data: () => ({
      items: ['Minimal', 'Japandi', 'Modern', 'Loft'],
    }),
    data: vm => ({
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      dateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
      menu1: false,
      menu2: false,
    }),

    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      },
    },

    watch: {
      date (val) {
        this.dateFormatted = this.formatDate(this.date)
      },
    },

    methods: {
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
    },
    data () {
      return {
        time: null,
        menu2: false,
        modal2: false,
      }
    },
}
</script>
