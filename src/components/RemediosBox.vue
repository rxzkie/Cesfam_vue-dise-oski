<template>
    <div class="card" style="width: 18rem; height: 23rem;">
        <img v-bind:src="remedio.get_thumbnail" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">{{ remedio.nombreRemedio }}</h5>
            <p class="card-text">${{ remedio.precioRemedio }}</p>
            <router-link v-bind:to="remedio.get_absolute_url" class="button is-dark mt4">Ver Detalle</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "RemediosBox",
    props: {
        remedio: Object
    }
}
</script>

<style scoped>
    .image{
        margin-top: -1.25rem;
        margin-left: -1.25rem;
        margin-right: -1.25rem;
    }
</style>