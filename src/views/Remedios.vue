<template>
    <div class="home">
        <div class="column form-floating">
            <button type="button" class="btn btn-secondary">
                <router-link to="/analgesicos">Analgésicos</router-link>
                </button>
        </div>
        <div class="column form-floating">
            <button type="button" class="btn btn-secondary">
                <router-link to="/antiacidos">Antiácidos</router-link>
            </button>
        </div>

        <div class="columns is-multiline">
            <div class="column is-12">
                <h2 class="is-size-2 has-text-centered">Remedios</h2>
            </div>

            <RemediosBox
            v-for="remedio in latestRemedios"
            v-bind:key="remedio.id"
            v-bind:remedio="remedio"
            />
            
        </div>
    </div>
    
</template>

<script>
import axios from 'axios'
import RemediosBox from '@/components/RemediosBox'
export default {
    name: 'Remedios',
    data(){
        return{
            latestRemedios: []
        }
    },
    components: {
        RemediosBox
    },
    mounted(){ 
        this.getLatestRemedios()
        document.title = 'Remedios' + ' | Cesfam'
    },
    methods:{
        getLatestRemedios() {
            axios
                .get('/api/v1/latest-remedios/')
                .then(response => {
                    this.latestRemedios = response.data
                })
                .catch(error =>{
                    console.log(error)
                })
        }
    }
}
</script>

