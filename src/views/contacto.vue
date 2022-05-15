<template>

  <body>

    <!--formulario de contacto  -->

    <div class="card p-3">
      <div class="flex-column">
        <h1>Contacto</h1>


        <form>
          <div class="form-group"><label for="contactNameInput">Su nombre (requerido)</label><input type="text"
              class="form-control" id="contactNameInput" name="contactName" required="" value=""></div>
          <div class="form-group"><label for="contactEmailInput">Su e-mail (requerido)</label><input type="email"
              class="form-control" id="contactEmailInput" name="contactEmail" required="" value=""></div>
          <div class="form-group"><label for="contactSubjectInput">Asunto (requerido)</label><input type="text"
              class="form-control" id="contactSubjectInput" name="contactSubject" required="" value=""></div>
          <div class="form-group"><label for="contactMessageInput">Su mensaje (requerido)</label><textarea
              class="form-control" id="contactMessageInput" rows="3" name="contactMessage" required=""></textarea></div>
          <br><br><br><button type="submit" class="btn btn-primary">Enviar</button>
          <br><br>

        </form>
      </div>

      <!--mapa  -->
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.915874993557!2d-71.49672142182922!3d-33.032346735650655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689debc1f81f17d%3A0x4401b442b47937b5!2sCentro%20de%20Salud%20Familiar%20Doctor%20JC%20Baeza!5e0!3m2!1ses-419!2scl!4v1652174046585!5m2!1ses-419!2scl"
        width="1200" height="450" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>

    </div>



  </body>

</template>