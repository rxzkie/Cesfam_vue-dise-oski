<template>

    <div class="description-wrapper pb-xs-0 rt-xs-0">
<div class="product-content">

<div id="product-heart">
</div>
<span class="sku" sku="432432">SKU: 432432</span><div class="info">
<h2 class="product-info">
Paracetamol
</h2>
<h1 class="product-name product_name_pdp">
Paracetamol (B) 500mg 16Com.

</h1>
</div>
<div class="description">
<p class="mb-0">Principio Activo: Paracetamol / Forma Farmaceutica: Comprimidos / Dosis por Forma Farmaceutica: 500mg

</p>
</div>
<div class="stock with-stock"><strong>true</strong></div>
</div>
<div id="product-price"><div class="price"><div class="product-measurement-price"><p>Precio por unidad de medida: <span>$56</span><span> por </span><span>COMPRIMIDOS</span></p></div><div class="normal"></div><div class="old-prices"><span class="normal-price no-decoration extra-price">Oferta: $879</span><span class="old">$999</span></div><div class="normal-salcobrand"><p class="sbpay-price"><span><img class="style-img-sbpay" src="https://d1tjllbjmslitt.cloudfront.net/assets/icons/card-sbpay-597a1263e6b6fdc6357c263375b639265bcc34d7970aa73c5eacc5149a58e144.svg" alt="Card sbpay" width="33" height="21">Sbpay: $799</span></p></div></div></div><script>var prices = {"432432":{"normal":"$999","oferta":"$879","tarjeta":"$799","internet":null}};</script><script>$(document).ready(function() {
  $(".normal-price.sale-price").removeClass('extra-price')
});</script>



<form accept-charset="UTF-8" action="/orders/populate" data-remote="true" method="post">
<div class="product-form">

<div class="product-options">
<div class="product-types"><div class="product-label">Detalles del medicamento:</div><div class="row m-0"><div class="col-xs-12 col-md-6 pl-0"><div class="sale_type sale_type__plp not_drug"></div></div><div class="col-xs-12 col-md-6 pl-0"><div class="product-bioequivalente"><img loading="lazy" src="https://d1tjllbjmslitt.cloudfront.net/assets/icono-bioequivalente-c851bf5dee459918330da678b3fa4aac371757bed95222edc082b3863af9884b.png" alt="Icono bioequivalente" width="24" height="24"><div class="txt-plp">Bioequivalente</div></div></div></div></div>
<div class="product-shipments"><div class="product-label"><span>Tipos de entrega</span><span class="commune"></span><span>:</span></div><div class="row m-0"><div class="col-xs-12 col-md-6 pl-0"><div class="shipment-methods pickup pickup_delivery"><div class="shipment-methods-title-desc"><div class="title">Retiro en tienda</div><div class="desc">Disponible en San Bernardo</div></div></div></div><div class="col-xs-12 col-md-6 px-0"><div class="shipment-methods home_delivery mt-sm package_delivery"><div class="shipment-methods-title-desc"><div class="title">Despacho a domicilio</div><div class="desc">Disponible</div></div></div></div><div class="col-xs-12 col-sm-12 px-0 hidden"><text-underline class="check-stock">Consultar stock en otras farmacias</text-underline></div></div></div>
</div>
<div class="row">
<div class="col-md-12 overflow-needed">
<div class="format">
<div class="col-xs-6 col-sm-6 col-md-4 col-lg-5 format-picker pfr"><label>Formato</label><div class="input-group"><select class="last" id="variant_id" name="variant_id"><option badge="-12%" sku="432432" state="state_active" value="18898">16 Comprimidos</option></select><i class="fa fa-chevron-down down"></i></div></div>



</div>
<div class="col-xs-6 col-sm-6 col-md-3 col-lg-2 pfr">
<div class="quantity">
<label>
Cantidad
</label><div class="input-group">
<i class="fa fa-chevron-up up" id="quantity-up">
</i><input type="number" name="quantity" id="product-quantity" value="1" class="show">
<i class="fa fa-chevron-down down" id="quantity-down">

</i>
</div>
</div>
</div>
<div class="col-xs-12 col-sm-12 col-md-4 col-lg-5 px-0">
<div class="prices-content">
<div data-hook="inside_product_cart_form" id="inside-product-cart-form">

<div class="addtocart-mobile">
<button class="btn btn-warning cta btn-block" data-disable-with="Agregando ..." id="add-to-cart-button" type="submit"><span class="txt">Añadir al carro</span></button><button class="btn btn-flat-special cta btn-block hidden" id="request-variant" type="button"><span class="txt">Avísame cuando llegue </span><p class="stock-message"></p></button><button class="btn btn-flat btn-flat-special disabled btn-block hidden" id="no-variant-btn" type="button"><span class="txt">Producto no disponible</span><p class="stock-message"></p></button>
<div class="dropdown-menu email-dropdown" id="user_email_dropdown" style="">
<label class="mb-0">Email</label>
<div class="input-group">
<input type="text" name="user_email" id="user_email" placeholder="Ingrese su correo" class="form-control">
<a class="btn btn-flat btn-flat-send">
Enviar

</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</form><script type="text/javascript">

  var sended = false;
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  var openMenu = function(){
    $('#user_email_dropdown').slideDown(350);
    $('#user_email').focus();
  };

  var closeMenu = function(){
    $('#user_email').val('');
    $('#user_email_dropdown').slideUp(350);
  };

  var requestProduct = function(){
    email = $('#user_email').val();

    if ( email == null || email == '' || !regex.test(email) ){
      openMenu();
    }
    else if(sended == false && $('select.last').children(":selected").val() != '') {
      $("#request-variant").prop('disabled', true);
      $.ajax({
        url: "/requests",
        type: "POST",
        data: { request: { email: email, variant_id: $('select.last').children(":selected").val() } },
        success: function(data, textStatus) {
          $("p.stock-message").addClass('padding').html(data.message);
     
          setTimeout(() => {
            $("p.stock-message").hide();
          }, 3400);

        },
        error: function() {
          $("p.stock-message").html("Ha ocurrido un error, inténtalo más tarde.");
          $("#request-variant").prop('disabled', false);
        }
      });
      sended = true;
      closeMenu();
    }
  };

  $("#close-email").on("click", function(){
    closeMenu();
  });

  $("#request-variant, #request-variant-2").on("click", function(){
    requestProduct()
  });

  $('#user_email_dropdown input#user_email').on('keydown', function(e) {
    if (e.which == 13) {
      e.preventDefault();
      requestProduct();
    }
  });

  $(document).on('click', '.btn-flat-send', function(){
    requestProduct();
  });

  $('body,html').click(function(e) {
    if (!(document.getElementById('user_email_dropdown').contains(e.target)) && 
      !e.target.parentNode.classList.contains('btn-flat-special') && !e.target.classList.contains('btn-flat-special')) {
      closeMenu();
    }
  });

  $('.overflow-needed .format-picker > label').text('Formato'); 
</script>



</div>
</template>