<template>
  <v-app>

    <div class="icono_usuario">
      <v-icon
        large
        color="#178649">
        mdi-account-circle
      </v-icon>
    </div>

    <div class="titulo">
      Informe
    </div>

    <div class="formulario">
      <v-container fluid style="max-width: fit-content;">
        <v-form>
          <v-select
            label="Plaga/Enfermedad"
            color="#178649"
            :items="plagas">
            <v-tooltip top slot="append-outer">
              <template v-slot:activator="{ on }">
                <v-icon
                  v-on="on"
                  size="20"
                  color="#178649">
                  mdi-help
                </v-icon>
              </template>
              <span>si me disculpa</span>
            </v-tooltip>
          </v-select>

          <v-menu
            v-model="menuDate"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="auto">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="computedDateFormatted"
                label="Fecha"
                color="#178649"
                hint="DD/MM/AA"
                readonly
                v-bind="attrs"
                v-on="on" />
            </template>
            <v-date-picker
              v-model="date"
              no-title
              :first-day-of-week="1"
              locale="es-es"
              color="#178649"
              @input="menuDate = false" />
          </v-menu>

          <v-text-field
            label="Localización"
            readonly
          ></v-text-field>
          
          <v-divider />

          <br>

          <v-btn class="white--text"
            width="275"
            height="50"
            color="#ff5d55">
            enviar
          </v-btn>
        </v-form>
      </v-container>
    </div>

  </v-app>
</template>

<script>
export default {
  data: vm => ({
    plagas: [
      'Chrysomela populi',
      'Cossus cossus',
      'Saperda populnea'
    ],
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    dateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
    menuDate: false
  }),

  computed: {
    computedDateFormatted () {
      return this.formatDate(this.date)
    },
  },

  methods: {
    formatDate (date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${day}/${month}/${year}`
    }
  }
}
</script>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');

  .icono_usuario {
    text-align: left;
    padding-top: 10px;
    padding-left: 10px
  }

  .titulo {
    text-align: center;
    font-family: 'Quicksand', sans-serif;
    font-size: 40px;
    color: #178649
  }

  .formulario {
    text-align: center;
    margin-top: 25px
  }

</style>
