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
      <img src="../assets/logo.png"
        width="180" height="144" />
    </div>

    <div class="cuerpo">
      <v-container fluid style="width: 95%; max-width: 500px">
        <v-btn style="text-decoration: none"
          dark
          width="100%"
          height="50"
          color="#ff5d55"
          to="/informe">
          enviar informe
        </v-btn>

        <br><br>

        <v-divider />

        <br>

        <v-btn style="text-decoration: none"
          dark
          width="100%"
          height="50"
          color="#178649"
          to="/login">
          iniciar sesión
        </v-btn>
      </v-container>
    </div>

  </v-app>
</template>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');

  .icono_usuario {
    text-align: left;
    padding-top: 10px;
    padding-left: 10px
  }

  .titulo {
    text-align: center;
    padding-bottom: 25px;
    font-family: 'Quicksand', sans-serif;
    font-size: 40px;
    color: #178649
  }

  .cuerpo {
    text-align: center
  }

</style>
