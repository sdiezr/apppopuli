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
      Iniciar sesión
    </div>

    <div class="cuerpo">
      <v-container fluid style="width: 95%; max-width: 500px">
        <v-form>
          <v-text-field
            append-outer-icon="mdi-account"
            label="Teléfono o correo electrónico"
            color="#178649">
          </v-text-field>
          
          <v-text-field
            :append-outer-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            label="Contraseña"
            color="#178649"
            @click:append-outer="show = !show">
          </v-text-field>
          
          <v-divider />

          <br>

          <v-btn
            dark
            width="100%"
            height="50"
            color="#178649"
            @click="saveInforme"
            to="/">
            iniciar sesión
          </v-btn>
        </v-form>
      </v-container>
    </div>

  </div>
</template>

<script>

  export default {
    data() {
      return {
        show: false,

        rules: {
            reglaExtension: value => {
            const pattern = /^[1-9][0-9]?$|^100$/
            return pattern.test(value) || 'Introduce un valor numérico entre 1 y 100'
            }
        },
      }
    },

    methods: {

    }
  }

</script>

<style>

  .direccion {
    font-size: 10px;
    color: #178649
  }

</style>
