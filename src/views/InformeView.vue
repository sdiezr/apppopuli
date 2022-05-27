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

          <v-dialog
            v-model="dialog"
            width="500">
            <template
              v-if="!location.position"
              v-slot:activator="{ on, attrs }">
              <v-text-field
                label="Localización"
                color="#178649"
                readonly
                v-bind="attrs"
                v-on="on"/>
            </template>

            <template
              v-else
              v-slot:activator="{ on, attrs }">
              <v-text-field
                :value="location.address"
                label="Localización"
                color="#178649"
                readonly
                v-bind="attrs"
                v-on="on"/>
            </template>
            
            <v-card>
              <v-card-title />
              <v-divider />
              <br>

              <v-spacer />
              <v-card-text>
                <div style="height: 300px">
                  <LocalizacionMapa v-model="location" />
                </div>
              </v-card-text>
              <v-divider />

              <v-card-actions class="justify-center">

                <v-btn class="white--text"
                  width="50%"
                  height="50"
                  color="#ff5d55"
                  @click="dialog = false">
                  aceptar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          
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
import LocalizacionMapa from "../components/LocalizacionMapa"

export default {
  components: {
    LocalizacionMapa
  },

  data: vm => ({
    // campo plaga/enfermedad
    plagas: [
      'Chrysomela populi',
      'Cossus cossus',
      'Saperda populnea'
    ],

    // campo fecha
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    dateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
    menuDate: false,
    
    // campo localizacion
    dialog: false,
    location: {},
  }),

  watch: {
    /* cuando se abre el dialogo del campo localizacion
    redimensiona la ventana para que el mapa se ajuste
    al tamaño del cuadro de dialogo y se muestre correctamente */
    dialog (visible) {
      if (visible) {
        setTimeout(() => {
          window.dispatchEvent(new Event("resize"));
        }, 100);
      }
    }
  },

  computed: {
    computedDateFormatted () {
      return this.formatDate(this.date)
    }
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

  .direccion {
    font-size: 10px;
    color: #178649
  }

</style>
