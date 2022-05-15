<template>
  <div class="home">
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="http://media.biobiochile.cl/wp-content/uploads/2012/10/V%C3%ADctor-Lillo-RBB-sbnsa.jpg" class=" w-100" alt="1">
              <div class="carousel-caption">
                <h5>Consulta por tu atencion medica</h5>
                <p>Los lunes a viernes desde 8:00 a 12:00.</p>
              </div>
          </div>
        <div class="carousel-item">
          <img src="https://cdn.onepiecechapters.com/file/CDN-M-A-N/op_nextlvl_1045_023.png" class=" w-100" alt="2">
          <div class="carousel-caption">
            <h5>Farmacia online</h5>
            <p>Consulta por el stock de remedios y has tu pedido para retirar!.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://cdn.onepiecechapters.com/file/CDN-M-A-N/op_nextlvl_1045_023.png" class="w-100" alt="3">
          <div class="carousel-caption">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <section class="container">
      <div class="row">

        <!--textos-->
        <div class="col-12 text-center">
          <h2 class="text-warning tex-uppercase h6"></h2>
          <h3 class="text-capitalize"> Pide tu medicamento online! </h3>
          <p class="text-muted">
            Usa nuestra nueva herramienta digital para no tener que ir a buscar tus medicamentos.
          </p>
        </div>
        <!--tarjetas-->
        <!--tarjeta #1-->
        <article class="col-4 card-effect">
        <div class="card">
                  <img src="https://lasillarotarm.blob.core.windows.net/images/2020/05/07/consultoriodisponiblehidalgo_1.jpg" alt="Raiting" class="card-img card-img-filter"> 
                  <div class="card-img-overlay text-white d-flex flex-column justify-content-center text-center">
                    <h4>Reserva tu consulta ya!</h4>
                    <p>
                     Acercate a las instalaciones y reserva ya tu hora.
                    </p>
                    <a href="lista-productos.html" class="text-reset">Averigua más</a>
                  </div>
                </div>
              </article>
              <!-- tarjeta #2-->
              <article class="col-4 card-effect">
                <div class="card">
                  <img src="https://orientacion.banmedica.cl/wp-content/uploads/2021/08/medi2-1.jpg" alt="Raiting" class="card-img card-img-filter"> 
                  <div class="card-img-overlay text-white d-flex flex-column justify-content-center text-center">
                    <h4>Pide tus medicamentos hoy y recibelos mañana</h4>
                    <p>
                      Pide tus medicamentos ahora mismo con nuestra plataforma online.
                    </p>
                    <router-link to="/remedios" class="text-reset">Averigua más</router-link>
                  </div>
                </div>
              </article>
              <!-- tarjeta #3-->
              <article class="col-4 card-effect">
                <div class="card">
                  <img src="https://www.ucinmedica.com/wp-content/uploads/2020/07/consulta-medica.jpg" alt="Raiting" class="card-img card-img-filter"> 
                  <div class="card-img-overlay text-white d-flex flex-column justify-content-center text-center">
                    <h4>Consulta por nuestra diferentes atenciones</h4>
                    <p>
                      Descubre aqui mismo las atenciones disponibles para ti.
                    </p>
                    <a href="{% url 'nosotros' %}" class="text-reset">Averigua más</a>
                  </div>
                </div>
              </article>

            </div>
          </section>

  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  },
  mounted(){
    document.title = 'Inicio' + ' | Cesfam'
  },
}
</script>

<style>
.carousel-inner img {
    filter: brightness(0.5);
    height: 550px;
}

/* tarjetas */
.card-img-filter{
    filter: brightness(0.5);
}

.card{
   transition-duration: .6s;
   clip-path: polygon(50% 0, 100% 0, 100% 50%, 100% 100%, 50% 100%, 0 100%, 0 50%, 0 0 ); 
}

.card-effect:hover .card{
    clip-path: polygon(50% 0, 50% 0, 100% 50%, 100% 50%, 50% 100%, 50% 100%, 0 50%, 0 50% );

}

.card-effect:hover:hover .card-img-overlay{
    transform: scale(.9);

}

.card-img-overlay{
    transition-duration: .6s;
}

.w-33 {
    width: 33.33%;
    background-color: orange;
  }
  
.center {
    text-align: center;
  }
</style>
