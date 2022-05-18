<template>
    <div class="detalle_remedio">
        <div class="columns is-multiline">
            <!--imagen  -->
            <div class="card" style="width: 33rem;">
                <img class="card-img-top" v-bind:src="remedio.get_thumbnail" alt="" loading="lazy" width="500"
                    height="500">
            </div>

            <div class="card" style="width: 44rem;">

                <div class="card-body">
                    <h5 class="card-title">
                        <h2 class="subtitle"></h2>
                    </h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                        <h2 class="subtitle">{{ remedio.nombreRemedio }}</h2>
                    </h6>
                    <p class="card-text">{{ remedio.descripcionRemedio }}.</p>
                    <p><strong>Precio: </strong>$ {{ remedio.precioRemedio }}</p>
                    <p><strong>Cantidad: </strong>{{ remedio.cantidadRemedio }}</p>
                    <p><strong>Stock: </strong>{{ remedio.stockRemedio }}</p>

                        <!--selector cantidad  -->
                    <div class="col-md-12 overflow-needed">

                        <div class="col-xs-6 col-sm-6 col-md-3 col-lg-2 pfr">
                            <div class="quantity">
                                <label>
                                    Cantidad
                                </label>
                                <div class="input-group">
                                    <i class="fa fa-chevron-up up" id="quantity-up">
                                    </i><input type="number" class="input" min="1" v-model="quantity"
                                        id="product-quantity">
                                    <i class="fa fa-chevron-down down" id="quantity-down">
                                    </i>
                                </div>
                            </div>
                        </div>



                    </div>

                    <!--boton añadir--> 
                    <div class="control">
                        <br>

                        <div class="add-to-cart"><button class="btn btn-primary" data-disable-with="Agregando ..."
                                id="add-to-cart-button" @click="addToCart">Añadir al carro<span><img
                                        src="https://d1tjllbjmslitt.cloudfront.net/assets/shopping_cart_icon_white-e9d947ffee21ece11fe275b55f3ebc35cd7979255ec6d4f4bdda66721efa350e.svg"
                                        alt="Shopping cart icon white" width="13" height="15"></span></button>
                        </div>
                    </div>





                    <!-- 
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a> -->
                </div>
            </div>



















        </div>
    </div>



</template>




<script>
import axios from 'axios'
import { toast } from 'bulma-toast'
export default {
    name: "Detalle_remedio",
    data() {
        return {
            remedio: {},
            quantity: 1
        }
    },
    mounted() {
        this.getRemedio()
    },
    methods: {
        getRemedio() {
            const categoria_slug = this.$route.params.categoria_slug
            const remedio_slug = this.$route.params.remedio_slug

            axios
                .get(`/api/v1/remedios/${categoria_slug}/${remedio_slug}`)
                .then(response => {
                    this.remedio = response.data

                    document.title = this.remedio.nombreRemedio + ' | Cesfam'
                })
                .catch(error => {
                    console.log(error)
                })
        },
        addToCart() {
            if (isNaN(this.quantity) || this.quantity < 1) {
                this.quantity = 1
            }

            const item = {
                remedio: this.remedio,
                quantity: this.quantity,
            }

            this.$store.commit('addToCart', item)

            toast({
                message: 'El producto fue añadido al carrito',
                type: 'is-success',
                dismissible: true,
                pauseOnHover: true,
                duration: 2000,
                position: 'bottom-right',
            })
        }
    },
}
</script>