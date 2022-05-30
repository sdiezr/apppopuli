<template>
  <div class="ayuda">

    <div class="icono_usuario">
      <v-icon
        large
        color="#178649">
        mdi-account-circle
      </v-icon>
    </div>

    <div class="titulo">
      Explorar
    </div>

    <div style="padding-bottom: 15px">
      <v-card class="mx-auto"
        width="98%"
        max-width="1000">
        <v-tabs
          v-model="tabModel"
          background-color="#178649"
          grow
          dark>
          <v-tab>
            <div class="texto_tab">
              HISTORIAL DE INFORMES
            </div>
          </v-tab>
        </v-tabs>

        <v-tabs-items
          v-model="tabModel">
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                Una tabla con el historial de informes.
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </div>

    <v-dialog
        v-model="dialog">
        <template
            v-slot:activator="{ on, attrs }">
            <v-btn class="boton_flotante"
                fab
                dark
                fixed
                bottom
                left
                color="#178649"
                v-bind="attrs"
                v-on="on">
                <v-icon>mdi-map</v-icon>
            </v-btn>
        </template>
        <v-card flat>
            <div style="height: 400px">
                <InformeMapa />
            </div>
        </v-card>
    </v-dialog>    
    
    <v-btn class="boton_flotante"
      fab
      dark
      fixed
      bottom
      right
      color="#ff5d55"
      to="/informe">
      <v-icon>mdi-launch</v-icon>
    </v-btn>
  </div>
</template>

<script>

  import InformeMapa from "../components/InformeMapa"

  export default {
    components: {
      InformeMapa
    },

    data: () => ({
        tabModel: 0,
        dialog: false
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
    }
  }

</script>

<style>

</style>