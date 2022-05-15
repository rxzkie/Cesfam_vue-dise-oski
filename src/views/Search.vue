<template>
    <div class="page-search">
        <div class="columns is-multiline">
            <div class="column is-12">
                <h1 class="title">Busqueda</h1>

                <h2 class="is-size-5 has-text-gray">Resultados para: "{{ query }}"</h2>
            </div>

            <RemediosBox
            v-for="remedio in remedios"
            v-bind:key="remedio.id"
            v-bind:remedio="remedio"
            />
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import RemediosBox from '@/components/RemediosBox.vue'
export default {
    name: 'Search',
    components: {
        RemediosBox
    },
    data(){
        return {
            remedios: [],
            query: ''
        }
    },
    mounted() {
        document.title = 'Busqueda | Cesfam'

        let uri = window.location.search.substring(1)
        let params = new URLSearchParams(uri)

        if (params.get('query')){
            this.query = params.get('query')

            this.performSearch()
        }
    },
    methods: {
        performSearch(){
            axios
                .post('/api/v1/remedios/search/', {'query': this.query})
                .then(response => {
                    this.remedios = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>