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
      Ayuda
    </div>

    <div style="padding-bottom: 10px">
      <v-card class="mx-auto"
        width="98%"
        max-width="1000">
        <v-tabs
          v-model="tabModel"
          background-color="#178649"
          grow
          dark>
          <v-tab
            v-for="tab in tabs"
            :key="tab">
            <div class="texto_tab">
              {{ tab }}
            </div>
          </v-tab>
        </v-tabs>

        <v-tabs-items
          v-model="tabModel">
          <v-tab-item>
            <v-card flat>
              <v-card-text style="text-align: justify">
                Usándola.
              </v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item>
            <v-card flat>
              <v-card-text>
                Hay plagas y enfermedades.
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </div>
    
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

  export default {
    data: () => ({
      tabModel: 0,
      tabs: [
        'CÓMO USAR LA APLICACIÓN',
        'PLAGAS Y ENFERMEDADES'
      ]
    })
  }

</script>

<style>

  .texto_tab {
    font-size: 9.17px
  }

  .boton_flotante {
    margin: 0 0 70px 0
  }

</style>