<template>





  <div class="home">
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="http://media.biobiochile.cl/wp-content/uploads/2012/10/V%C3%ADctor-Lillo-RBB-sbnsa.jpg"
            class=" w-100" alt="1">
          <div class="carousel-caption">
            <h5>Consulta por tu atencion medica</h5>
            <p>Los lunes a viernes desde 8:00 a 12:00.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D1BAQEwAXy-FRCi7Q/company-background_10000/0/1524076168528?e=2147483647&v=beta&t=Hp8bD6QjvMeEG-Ze2yeplxTNZAcSW9bXTj8V7Br5erw"
            class=" w-100" alt="2">
          <div class="carousel-caption">
            <h5>Farmacia online</h5>
            <p>Consulta por el stock de remedios y has tu pedido para retirar!.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://www.clinicadentalceballos.com/wp-content/uploads/2019/10/ClinicaDentalCeballos-odontologiaConservadora-paciente.jpg"
            class="w-100" alt="3">
          <div class="carousel-caption">
            <h5>Atencion odontologica</h5>
            <p>Consulta por tu atencion odontologica de Lunes a jueves 8:00 a 17:00.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next">
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
            <img src="https://lasillarotarm.blob.core.windows.net/images/2020/05/07/consultoriodisponiblehidalgo_1.jpg"
              alt="Raiting" class="card-img card-img-filter">
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
            <img src="https://orientacion.banmedica.cl/wp-content/uploads/2021/08/medi2-1.jpg" alt="Raiting"
              class="card-img card-img-filter">
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
            <img src="https://www.ucinmedica.com/wp-content/uploads/2020/07/consulta-medica.jpg" alt="Raiting"
              class="card-img card-img-filter">
            <div class="card-img-overlay text-white d-flex flex-column justify-content-center text-center">
              <h4>Consulta por nuestra diferentes atenciones</h4>
              <p>
                Descubre aqui mismo las atenciones disponibles para ti.
              </p>
              <a href="{% url 'nosotros' %}" class="text-reset">Averigua más</a>
            </div>
          </div>
        </article>

        <section class="container">
          <div class="row">
            <!--titulo-->
            <h2 class="col-12 text-center">
              <span class=" h6 text-uppercase" style="color:#10c8fe;">Un poco sobre</span><br />
              <span class="text-capitalize">Nuestra Area</span><br>

            </h2>
            <!--1 descripcion-->
            <p class="col-6">
              El Área de Salud de la Corporación Municipal tiene por misión el cuidado de la salud de la población
              beneficiaria inscrita en los centros de salud municipal de Viña del Mar. Con el fin de conformar una
              institución
              organizada, descentralizada, con funcionarios y equipos calificados, que considere a la Atención Primaria
              de
              Salud como estrategia de desarrollo, al individuo como responsable en su auto-cuidado, a la familia como
              núcleo
              central, y a la comunidad organizada en actividades y decisiones en salud.
            </p>
            <!--2 descripcion-->
            <p class="col-6">
              El Área de Salud es una unidad de gestión directiva de los modelos y programas comunales de APS,
              dependiente de
              la gerencia de la corporación municipal de Viña del Mar, que planifica, programa, supervisa y evalúa los
              planes
              locales y su ejecución de cada centro de salud que dependen de ella.
              Establece planes de Capacitación y Perfeccionamiento y desarrollo de competencias, para la consecución de
              los
              planes y da cuenta de los recursos sectoriales comunales y municipales de salud. La estructura de
              funcionamiento
              del Área de Salud se ha ido modificando en la medida que sus funciones se han ido complejizando para dar
              respuestas a las diversas necesidades de orientación a los centros de salud y a la diversa necesidad de
              otorgar
              información válida a toda la red de salud, municipal y de los usuarios
              <br>
              <br>
            </p>




            <!--Preguntas-->
            <!-- <div class="col-3 text-center">
        <h3 class=" h6" style="color:#10c8fe;">¿Por qué comprar?</h3>
        <p class="font-weight-bold text-capitalize">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
      <div class="col-3 text-center">
        <h3 class="text-warning h6">¿Cuanto se demora un pedido a llegar a destino?</h3>
        <p class="font-weight-bold text-capitalize">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
      <div class="col-3 text-center">
        <h3 class="text-warning h6">¿Donde queda ubicado Grupo zero?</h3>
        <p class="font-weight-bold text-capitalize">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div> -->




            <!--boton-->
            <div class="w-100"></div>
            <div class="center">
              <a href="/remedios"><button class="btn btn-primary">
                  Farmacia online!
                </button></a>
            </div>
          </div>
        </section>














      </div>
    </section>

  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  },
  mounted() {
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
.card-img-filter {
  filter: brightness(0.5);
}

.card {
  transition-duration: .6s;
  clip-path: polygon(50% 0, 100% 0, 100% 50%, 100% 100%, 50% 100%, 0 100%, 0 50%, 0 0);
}

.card-effect:hover .card {
  clip-path: polygon(50% 0, 50% 0, 100% 50%, 100% 50%, 50% 100%, 50% 100%, 0 50%, 0 50%);

}

.card-effect:hover:hover .card-img-overlay {
  transform: scale(.9);

}

.card-img-overlay {
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
