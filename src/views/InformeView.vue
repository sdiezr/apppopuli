<template>
  <div id="informe">

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

    <div class="cuerpo">
      <v-container fluid style="max-width: fit-content">
        <v-form>
          <v-select
            label="Plaga/Enfermedad"
            color="#178649"
            :items="plagas">
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
              <v-spacer />
              <v-card-text>
                <div style="padding-top: 10px; margin-bottom: -10px; height: 400px">
                  <InformeMapa v-model="location" />
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

          <v-select
            label="Total de árboles dañados"
            color="#178649"
            suffix="árbol/es"
            :items="extension">
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

          <v-text-field
            v-model="porcentajeExtension"
            label="Porcentaje de pies afectados"
            color="#178649"
            suffix="%"
            :rules="[rules.porcentajeExtension]">
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
          </v-text-field>

          <v-select
            v-model="severidadDefault"
            label="Severidad del daño"
            color="#178649"
            suffix="% de la copa o el tronco dañado"
            :items="severidad">
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
          
          <v-textarea
            color="#178649"
            auto-grow>
            <template v-slot:label>
              Observaciones
            </template>
          </v-textarea>

          <v-text-field
            v-model="contacto"
            label="Teléfono o correo electrónico"
            color="#178649"
            :rules="[rules.contacto]">
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
          </v-text-field>
          
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

  </div>
</template>

<script>

  import InformeMapa from "../components/InformeMapa"

  export default {
    components: {
      InformeMapa
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

      // campo extension del daño
      extension: [
        '1',
        '2-10',
        '10-100',
        'Más de 100'
      ],
      porcentajeExtension: '',
      rules: {
        porcentajeExtension: value => {
          const pattern = /^[1-9][0-9]?$|^100$/
          return pattern.test(value) || 'Introduce un valor numérico entre 1 y 100'
        }
      },

      // campo severidad del daño
      severidad: [
        '0-25',
        '25-75',
        'Más del 75'
      ],
      severidadDefault: '0-25'
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

  .direccion {
    font-size: 10px;
    color: #178649
  }

</style>
