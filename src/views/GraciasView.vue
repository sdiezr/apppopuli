<template>
  <div class="ayuda">

    <IconoUsuario />

    <div class="titulo">
      ¡Gracias!
    </div>

    <div class="cuerpo">
      <v-card class="mx-auto"
        width="90%"
        max-width="800"
        elevation="0">
        Tu informe se ha enviado correctamente.
        <br><br>
        ¡Ayúdanos a mejorar!
        Queremos saber tu opinión
        sobre nuestra aplicacón. 
        Rellenar este <a style="font-weight: bold; color: #ff5d55; text-decoration: none" href="url">formulario</a> 
        solo te llevará unos minutos.
      </v-card>

      <br><br>

      <v-btn class="white--text"
        style="text-decoration: none"
        width="275"
        height="50"
        color="#178649"
        to="/">
        no, gracias
      </v-btn>
    </div>
  </div>
</template>

<script>

  import IconoUsuario from "../components/IconoUsuario"

  export default {
    components: {
      IconoUsuario
    }
  }

</script>