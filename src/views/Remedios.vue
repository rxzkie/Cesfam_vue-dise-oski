<template>

    <div class=topcorner data-hook="navigation" style="width: 13rem; height: 7rem;">
        <h3 class="panel-heading filter-title">Categorías</h3>
        <div class="ais-HierarchicalMenu">
            <li class="text-bg-primary p-3">
                <ul class="ais-HierarchicalMenu-list ais-HierarchicalMenu-list--child">
                    <li class="ais-HierarchicalMenu-item"><a class="ais-HierarchicalMenu-link" href="/analgesicos"><span
                                class="ais-HierarchicalMenu-label">Analgésicos</span> <span
                                class="ais-HierarchicalMenu-count">5</span></a></li>
                    <li class="ais-HierarchicalMenu-item"><a class="ais-HierarchicalMenu-link" href="#"><span
                                class="ais-HierarchicalMenu-label">Higiene</span> <span
                                class="ais-HierarchicalMenu-count">40</span></a></li>
                    <li class="ais-HierarchicalMenu-item"><a class="ais-HierarchicalMenu-link" href="#"><span
                                class="ais-HierarchicalMenu-label">Incontinencia Leve</span> <span
                                class="ais-HierarchicalMenu-count">15</span></a></li>
                    <li class="ais-HierarchicalMenu-item"><a class="ais-HierarchicalMenu-link" href="#"><span
                                class="ais-HierarchicalMenu-label">Pañales Adultos</span> <span
                                class="ais-HierarchicalMenu-count">26</span></a></li>
                    <li class="ais-HierarchicalMenu-item"><a class="ais-HierarchicalMenu-link" href="#"><span
                                class="ais-HierarchicalMenu-label">Cuidado Bucal</span> <span
                                class="ais-HierarchicalMenu-count">5</span></a></li>
                    <li class="ais-HierarchicalMenu-item"><a class="ais-HierarchicalMenu-link" href="#"><span
                                class="ais-HierarchicalMenu-label">Higiene</span> <span
                                class="ais-HierarchicalMenu-count">40</span></a></li>
                    <li class="ais-HierarchicalMenu-item"><a class="ais-HierarchicalMenu-link" href="#"><span
                                class="ais-HierarchicalMenu-label">Incontinencia Leve</span> <span
                                class="ais-HierarchicalMenu-count">15</span></a></li>
                    <li class="ais-HierarchicalMenu-item"><a class="ais-HierarchicalMenu-link" href="#"><span
                                class="ais-HierarchicalMenu-label">Pañales Adultos</span> <span
                                class="ais-HierarchicalMenu-count">26</span></a></li>
                    <li class="ais-HierarchicalMenu-item"><a class="ais-HierarchicalMenu-link" href="#"><span
                                class="ais-HierarchicalMenu-label">Cuidado Bucal</span> <span
                                class="ais-HierarchicalMenu-count">5</span></a></li>
                    <li class="ais-HierarchicalMenu-item"><a class="ais-HierarchicalMenu-link" href="#"><span
                                class="ais-HierarchicalMenu-label">Higiene</span> <span
                                class="ais-HierarchicalMenu-count">40</span></a></li>
                    <li class="ais-HierarchicalMenu-item"><a class="ais-HierarchicalMenu-link" href="#"><span
                                class="ais-HierarchicalMenu-label">Incontinencia Leve</span> <span
                                class="ais-HierarchicalMenu-count">15</span></a></li>
                    <li class="ais-HierarchicalMenu-item"><a class="ais-HierarchicalMenu-link" href="#"><span
                                class="ais-HierarchicalMenu-label">Pañales Adultos</span> <span
                                class="ais-HierarchicalMenu-count">26</span></a></li>
                </ul>
            </li>

        </div>




    </div>




    <div class="container">

        <RemediosBox v-for="remedio in latestRemedios" v-bind:key="remedio.id" v-bind:remedio="remedio" />
    </div>
















    <!--filtro  -->
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

        <div class="column form-floating">
            <button type="button" class="btn btn-secondary">
                <router-link to="/antiacidos">Antitusivos</router-link>
            </button>
        </div>
    </div>


</template>

   <style>
.container {
    display: flex;
    align-items: center;
    left: 105px;
}


.container {
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;


    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    align-items: center;
}

.topcorner {
    position: absolute;
    top: 90px;
    left: 1px;
}
</style>



<script>
import axios from 'axios'
import RemediosBox from '@/components/RemediosBox'
export default {
    name: 'Remedios',
    data() {
        return {
            latestRemedios: []
        }
    },
    components: {
        RemediosBox
    },
    mounted() {
        this.getLatestRemedios()
        document.title = 'Remedios' + ' | Cesfam'
    },
    methods: {
        getLatestRemedios() {
            axios
                .get('/api/v1/latest-remedios/')
                .then(response => {
                    this.latestRemedios = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>




