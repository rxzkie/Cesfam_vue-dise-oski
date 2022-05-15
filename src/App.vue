<template>
  <div class="wrapper">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <div class="navbar-brand">
          <router-link style="color: white;" class="navbar-item" to="/">Cesfam</router-link>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/remedios">Remedios</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/nosotros">Sobre Nosotros</router-link>
            </li>
            <li class="nav-item">
              <div class="buttons">
                <router-link to="/carrito" class="button is-success">
                  <span class="icon"><i class="fas fa-shopping-cart"></i></span>
                  <span>Carrito ({{ cartTotalLength }})</span>
                </router-link> 
              </div> 
            </li>
          </ul>
          <form class="d-flex" method="get" action="/Search">
            <input class="input form-control me-2" type="text" placeholder="Buscar..." aria-label="Search" name="query">
            <button class="btn btn-outline-success" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>

    <section class="section">
      <router-view/>
    </section>

    <footer class="footer">
      <p class="has-text-centered">Copyright (c) 2022</p>
    </footer>

  </div>
</template>


<style lang="scss">
@import '../node_modules/bulma';
@import '../node_modules/bootstrap';
</style>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      carrito: {
        items: [],
      }
    }
  },
  beforeCreate() {
    this.$store.commit('initializedStore')
    const token = this.$store.state.token
    if (token) {
        axios.defaults.headers.common['Authorization'] = "Token " + token
    } else {
        axios.defaults.headers.common['Authorization'] = ""
    }
  },
  mounted() {
    this.carrito = this.$store.state.carrito
  },
  computed: { ///estas son variables calcuadas basadas en cosas que hay en toda la página
    cartTotalLength(){
      let totalLength = 0

      for (let i= 0; i < this.carrito.items.length; i++){
        totalLength += this.carrito.items[i].quantity
      }
      return totalLength
    }
  },
}
</script>
