<template>
    <div class="page-categoria">
        <div class="columns is-multiline">
            <div class="column is-12">
                <h2 class="is-size-2 has-text-centered">{{ categoria.nombreCategoria }}</h2>
            </div>
            <RemediosBox
            v-for="remedio in categoria.remedios"
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
    name: 'Categoria',
    data(){
        return{
            categoria: {
                remedios: []
            }
        }
    },
    components: {
        RemediosBox
    },
    mounted() {
        this.getCategoria()
    },
    watch: {
        $route(to, from) {
            if (to.name === "Categoria"){
                this.getCategoria()
            }
        }
    },
    methods: {
        getCategoria(){
            const categoriaSlug = this.$route.params.categoria_slug

            axios
                .get(`/api/v1/remedios/${categoriaSlug}`)
                .then(response =>{
                    this.categoria = response.data

                    document.title = this.categoria.nombreCategoria + ' | Cesfam'
                })
                .catch(error => {
                    console.log(error)
                })
        }
    },
}
</script>