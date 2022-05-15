<template>
    <div class="page-iniciar-sesion">
        <h1 class="title">Iniciar Sesión</h1>

        <form @submit.prevent="submitForm">
            <div class="field">
                <label>Nombre de usuario</label>
                <div class="control">
                    <input type="text" class="input" v-model="usuario">
                </div>
            </div>

            <div class="field">
                <label>Contraseña</label>
                <div class="control">
                    <input type="password" class="input" v-model="contraseña">
                </div>
            </div>

            <div class="notification is-danger" v-if="errors.length">
                <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
            </div>

            <div class="field">
                <div class="control">
                    <button class="btn btn-outline-primary">Iniciar Sesión</button>
                </div>
            </div>

            <hr>

            O <router-link to="/registro">Precione aquí</router-link> para Registarse
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'IniciarSesion',
    data() {
        return {
            usuario: '',
            contraseña: '',
            errors: []
        }
    },
    mounted() {
        document.title = "Iniciar Sesión | Cesfam"
    },
    methods: {
        async submitForm(){
            axios.defaults.headers.common['Authorization'] = "" ///reseteamos y borramos el token para que no ocurra ningun error

            localStorage.removeItem("token")

            const formData = {
                username: this.usuario,
                password: this.contraseña, 
            }

            await axios 
                .post("/api/v1/token/login", formData)
                .then(response => {
                    const token = response.data.auth_token

                    this.$store.commit('setToken', token)

                    axios.defaults.headers.common["Authorization"] = "Token " + token

                    localStorage.setItem("token", token)

                    const toPath = this.$route.query.to || '/carrito'

                    this.$router.push(toPath)
                })
                .catch(error => {
                    if (error.response) {
                        for (const property in error.response.data) {
                            this.errors.push(`${property}: ${error.response.data[property]}`)
                        }
                    } else {
                        this.errors.push("Algo salio mal. Intentalo denuevo")

                        console.log(JSON.stringify(error))
                    }
                })
        }
    }
}
</script>