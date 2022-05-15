<template>
    <div class="registro-page">
        <h1 class="title">Registrar Usuario</h1>

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

            <div class="field">
                <label>Repita la contraseña</label>
                <div class="control">
                    <input type="password" class="input" v-model="contraseña2">
                </div>
            </div>

            <div class="notification is-danger" v-if="errors.length">
                <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
            </div>

            <div class="field">
                <div class="control">
                    <button class="btn btn-outline-primary">Registarse</button>
                </div>
            </div>

            <hr>

            O <router-link to="/iniciar-sesion">Precione aquí</router-link> para iniciar sesión

        </form>
        
    </div>
</template>

<script>
import axios from 'axios'
import { toast } from 'bulma-toast'
export default {
    name: 'Resgistro',
    data(){
        return{
            usuario: '',
            contraseña: '',
            contraseña2: '',
            correo: '',
            errors: [] 
        }
    },
    mounted() {
        document.title = "Registro | Cesfam"
    },
    methods: {
        submitForm(){
            this.errors = []

            if (this.usuario === ''){
                this.errors.push('Ingrese un nombre de usuario')
            }
            if (this.contraseña === ''){
                this.errors.push('Ingrese una contraseña')
            }
            if (this.contraseña2 !== this.contraseña){
                this.errors.push('Las contraseñas no coinciden')
            }

            if (!this.errors.length){
                const formData = {
                    username: this.usuario,
                    password: this.contraseña
                }

                axios
                .post("/api/v1/users/", formData)
                .then(response =>{
                    toast({
                        message: 'La cuenta fue creada con exito',
                        type: 'is-success',
                        dismissible: true,
                        pauseOnHover: true,
                        duration: 2000,
                        position: 'bottom-right',
                    })

                    this.$router.push('/iniciar-sesion')
                })
                .catch(error =>{
                    if (error.response) {
                        for (const property in error.response.data){
                            this.errors.push(`${property}: ${error.response.data[property]}`)
                        }

                        console.log(JSON.stringify(error.response.data))
                    } else if (error.message) {
                        this.errors.push("Algo salio mal. Intenta denuevo")

                        console.log(JSON.stringify(error))
                    }
                })
            }
        },
    },
}
</script>