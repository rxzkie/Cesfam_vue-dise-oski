<template>
    <div class="detalle_remedio">
        <div class="columns is-multiline">
            <div class="column is-9">

                <!--imagen remedio  -->
                <img v-bind:src="remedio.get_thumbnail" class="elementor-animation-grow attachment-full size-full"
                    alt="" loading="lazy" width="700" height="700">





                 <!--desc remedio  -->
                <h1 class="title">Descripción</h1>
                <p>{{ remedio.descripcionRemedio }}</p>
            </div>
            <div class="column is-3">
                <h1 class="title">Información</h1>
                <h2 class="subtitle">{{ remedio.nombreRemedio }}</h2>
                <p><strong>Stock: </strong>{{ remedio.stockRemedio }}</p>
                <p><strong>Precio: </strong>$ {{ remedio.precioRemedio }}</p>
                <p><strong>Cantidad: </strong>{{ remedio.cantidadRemedio }}</p>

                <div class="field has-addons mt-6">
                    <!-- el has-addons indica que el botón y el input van a estar juntos el uno del otro -->
                    <div class="control">
                        <input type="number" class="input" min="1" v-model="quantity" width="20" height="2">
                    </div>

                    <div class="control">

                        <div class="add-to-cart"><button class="btn btn-warning" data-disable-with="Agregando ..."
                                id="add-to-cart-button" @click="addToCart">Añadir al carro<span><img
                                        src="https://d1tjllbjmslitt.cloudfront.net/assets/shopping_cart_icon_white-e9d947ffee21ece11fe275b55f3ebc35cd7979255ec6d4f4bdda66721efa350e.svg"
                                        alt="Shopping cart icon white" width="15" height="15"></span></button>
                                
                                
                                       

                    </div>
                </div>
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