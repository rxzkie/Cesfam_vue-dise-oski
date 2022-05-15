<template>
  <!-- cabezera -->
  <div class="wrapper">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <div class="navbar-brand">
          <router-link style="color: white;" class="navbar-item" to="/">Cesfam</router-link>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
              <router-link class="nav-link active" aria-current="page" to="/contacto">Contacto</router-link>
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
      <router-view />
    </section>
    <!-- footer -->
    <footer class="bg-dark text-white pt-2 pb-1">
      <div class="container-fluid mt-2" id="cesfam-footer">
        <div class="row pb-3">
          <div class="col-12 col-md-4">
            <h3 class="page-header">Corporación Municipal Viña del Mar</h3>
            <div class="row">
              <div class="col-4 logo-container"><a target="_blank" rel="noopener nofollow"><img
                    src="https://i0.wp.com/www.laopiniononline.cl/wp-content/uploads/2014/07/logo-municipalidad-vi%C3%B1a.jpg?ssl=1"
                    alt="lun"></a>
              </div>
              <div class="col-8">Informate de tus beneficios y actividades en nuestra web
                <br>
                <p><a class="text-secondary" href="https://www.munivina.cl/">Buscanos aqui</a></p>
              </div>

            </div>

          </div>
          <div class="col-12 col-md-5">
            <h3 class="page-header">Ministerio de salud</h3>
            <div class="row">
              <div class="col-4 logo-container"><a
                  href="http://www.lun.com/Pages/NewsDetail.aspx?dt=2010-08-19&amp;PaginaId=18&amp;bodyid=0"
                  target="_blank" rel="noopener nofollow"><img
                    src="data:image/png;base64,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"
                    alt="lun"></a>
              </div>
              <div class="col-8">Para mas informacion consulta alguno de nuestros nuestro sitios web destinados a la
                salud.
                Busca mas informacion sobre Covid-19 aqui<br>
                <p><a class="text-secondary" href="https://www.minsal.cl/">
                    Informate aqui!
                  </a></p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-3">
            <h3 class="page-header">Encuentranos en</h3>
            <address>Avda. Tamarugal 350 - El Olivar<br>Viña del mar - Chile<br></address>Teléfono: 32 2272445<br><a
              class="text-secondary" rel="noopener nofollow" href="/contacto"> <br>Mas informacion</a>
          </div>
        </div>
      </div>
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
  data() {
    return {
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
    cartTotalLength() {
      let totalLength = 0

      for (let i = 0; i < this.carrito.items.length; i++) {
        totalLength += this.carrito.items[i].quantity
      }
      return totalLength
    }
  },
}
</script>
