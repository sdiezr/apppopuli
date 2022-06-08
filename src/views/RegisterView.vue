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
      Registrarse
    </div>

    <div class="cuerpo">
      <v-container fluid style="width: 95%; max-width: 500px">
        <v-form
          v-model="valid"
          ref="form"
          lazy-validation>
          <v-text-field
            required
            :rules="reglaObligatorio"
            append-outer-icon="mdi-account"
            label="Teléfono o correo electrónico"
            color="#178649">
          </v-text-field>
          
          <v-text-field
            required
            :rules="reglaObligatorio"
            :append-outer-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            label="Contraseña"
            color="#178649"
            @click:append-outer="show = !show">
          </v-text-field>
          
          <v-divider />

          <v-btn class="white--text"
            width="100%"
            height="50"
            color="#178649"
            :disabled="!valid"
            @click="validar">
            registrarse
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
        valid: false,
        show: false,

        reglaObligatorio: [
          v => !!v || 'Este campo es obligatorio'
        ]
      }
    },

    methods: {
      validar() {
        this.$refs.form.validate()
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
