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
      ¡Gracias!
    </div>

    <div class="cuerpo">
      <v-card class="mx-auto"
        width="90%"
        max-width="800"
        elevation="0">
        Tu informe se ha enviado <b>correctamente</b>.
        <br><br>
        <b>¡Ayúdanos a mejorar!</b>
        Queremos saber tu <b>opinión</b> 
        sobre nuestra <b>aplicacón</b>. 
        Rellenar este <a style="color: #178649" href="url">formulario</a> 
        solo te llevará unos <b>minutos</b>.
      </v-card>

      <br><br>

      <v-btn class="white--text"
        width="275"
        height="50"
        color="#ff5d55"
        to="/">
        no, gracias
      </v-btn>
    </div>
  </div>
</template>

<script>

</script>

<style>

</style>