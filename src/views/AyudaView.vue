<template>
  <div class="ayuda">

    <IconoUsuario />

    <div class="titulo">
      Ayuda
    </div>

    <div style="padding-bottom: 10px">
      <v-card class="mx-auto"
        width="98%"
        max-width="800">
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
            <v-card class="mx-auto"
              width="98%"
              flat>

              <v-list>
                <v-list-group
                  v-for="patogeno in patogenos"
                  :key="patogeno"
                  color="#178649"
                  no-action>
                  <template v-slot:activator>
                    <v-list-item-title style="color: #178649; font-weight: bold;">
                      <i>{{ patogeno.nombre_cientifico }}</i> ({{ patogeno.nombre_vulgar }})
                    </v-list-item-title>
                  </template>
                  
                  <v-card flat>
                    <v-list-item>
                      <v-list-item-content style="text-align: justify">
                        <div class="titulo_patogeno">
                          ¿A quién ataca?
                          <br><br>
                        </div>
                        {{ patogeno.parrafo_quien }}

                        <div class="titulo_patogeno">
                          <br>
                          ¿Cómo identificarlo?
                          <br><br>
                        </div>
                        {{ patogeno.parrafo_como }}

                        <div class="cuerpo">
                          <v-btn style="margin-top: 30px"
                            dark
                            width="100%"
                            max-width="500px"
                            height="50"
                            color="#178649"
                            @click="show(patogeno.id)">
                            figura 1
                          </v-btn>
                        </div>

                        <div class="titulo_patogeno">
                          <br>
                          ¿Qué daños causa?
                          <br><br>
                        </div>
                        {{ patogeno.parrafo_que }}

                        <div class="titulo_patogeno">
                          <br>
                          ¿Cuándo verlo?
                          <br><br>
                        </div>
                        {{ patogeno.parrafo_cuando }}
                        
                        <div class="cuerpo">
                          <v-btn style="margin-top: 30px"
                            dark
                            width="100%"
                            max-width="500px"
                            height="50"
                            color="#ff5d55"
                            @click="download(patogeno.id)">
                            descargar ficha en formato pdf
                          </v-btn>
                        </div>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card>
                </v-list-group>
              </v-list>

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

  import IconoUsuario from "../components/IconoUsuario"
  import PatogenoDataService from "../services/PatogenoDataService"
  import FileService from "../services/FileService"

  export default {

    components: {
      IconoUsuario
    },

    data: () => ({
      tabModel: 0,
      tabs: [
        'CÓMO USAR LA APLICACIÓN',
        'PLAGAS Y ENFERMEDADES'
      ],

      patogenos: []
    }),

    methods: {
      mostrarPatogenos() {
        PatogenoDataService.getAll()
          .then((response) => {
            this.patogenos = response.data.map(this.getMostrarPatogeno);
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
      },

      getMostrarPatogeno(patogeno) {
        return {
          id: patogeno.id,
          nombre_cientifico: patogeno.nombre_cientifico,
          nombre_vulgar: patogeno.nombre_vulgar,
          parrafo_quien: patogeno.parrafo_quien,
          parrafo_como: patogeno.parrafo_como,
          parrafo_que: patogeno.parrafo_que,
          parrafo_cuando: patogeno.parrafo_cuando,
          parrafo_confundir: patogeno.parrafo_confundir
        };
      },

      download(file) {
        FileService.download(file)
          .then((response) => {
            var fileURL = window.URL.createObjectURL(new Blob([response.data]));
            var fileLink = document.createElement('a');

            fileLink.href = fileURL;
            fileLink.setAttribute('download', `${file}.pdf`);
            document.body.appendChild(fileLink);

            fileLink.click();
          })
          .catch((e) => {
            console.log(e);
          });
      },

      show(file) {
        FileService.show(file)
          .then((response) => {
            var fileURL = window.URL.createObjectURL(new Blob([response.data]));
            var fileLink = document.createElement('a');

            fileLink.href = fileURL;
            fileLink.setAttribute('display', `${file}.jpg`);
            document.body.appendChild(fileLink);

            fileLink.click();
          })
          .catch((e) => {
            console.log(e);
          });
      }

    },

    mounted() {
      this.mostrarPatogenos();
    }
  }

</script>

<style>

  .texto_tab {
    font-size: 9px
  }

  .boton_flotante {
    margin: 0 0 70px 0
  }

  .titulo_patogeno {
    text-align: center;
    font-family: 'Quicksand', sans-serif;
    font-size: 25px;
    color: #178649
  }

</style>