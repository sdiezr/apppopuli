<template>
  <div id="informe">

    <IconoUsuario />

    <div class="titulo">
      Iniciar sesión
    </div>

    <div class="cuerpo">
      <v-container fluid style="width: 95%; max-width: 500px">

        <v-form
          v-model="valid"
          ref="form"
          lazy-validation>
          <v-text-field
            v-model="user.contact"
            required
            :rules="reglaObligatorio"
            append-outer-icon="mdi-account"
            label="Teléfono o correo electrónico"
            color="#178649">
          </v-text-field>
          
          <v-text-field
            v-model="user.password"
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
            @click="login">
            iniciar sesión
          </v-btn>

          <br><br>

          <div v-if="message" class="alert alert-danger">
            {{ message }}
          </div>
        </v-form>

        <br>

        <div class="registro">
          ¿No tienes cuenta?
          <router-link to="/register" style="font-weight: bold; color: #ff5d55; text-decoration: none">
            Regístrate
          </router-link>
        </div>

      </v-container>
    </div>

  </div>
</template>

<script>

  import IconoUsuario from "../components/IconoUsuario"
  import User from "../models/user"

  export default {
    components: {
      IconoUsuario
    },

    data() {
      return {
        valid: false,
        show: false,

        reglaObligatorio: [
          v => !!v || 'Este campo es obligatorio'
        ],

        user: new User("", ""),
        message: ""
      }
    },

    computed: {
      loggedIn() {
        return this.$store.state.auth.status.loggedIn;
      }
    },

    methods: {
      login() {
        this.$refs.form.validate()
        
        if (this.user.contact && this.user.password) {
          this.$store.dispatch('auth/login', this.user).then(
            () => {
              this.$router.push('/');
            },
            error => {
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            }
          );
        }

      }
    },

    mounted() {
      if (this.loggedIn) {
        this.$router.push('/');
      }
    }
  }

</script>

<style>

  .direccion {
    font-size: 10px;
    color: #178649
  }

  .registro {
    color: #686868
  }

</style>
