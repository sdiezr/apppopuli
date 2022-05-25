<template>
  <v-app>

    <div class="icono_usuario">
      <v-icon
        large
        color="#178649">
        mdi-account-circle
      </v-icon>
    </div>

    <div class="logotipo">
      <img src="../assets/logo.png"
        width="180" height="144" />
    </div>

    <div class="botones">
      <v-btn class="white--text"
        width="275"
        height="50"
        color="#ff5d55">
        enviar informe
      </v-btn>

      <br><br>

      <v-divider />

      <br>

      <v-btn class="white--text"
        width="275"
        height="50"
        color="#178649">
        iniciar sesión
      </v-btn>
    </div>

  </v-app>
</template>

<style>

  .icono_usuario {
    text-align: left;
    padding-top: 10px;
    padding-left: 10px
  }

  .logotipo {
    text-align: center
  }

  .botones {
    text-align: center;
    margin-top: 35px
  }

</style>
