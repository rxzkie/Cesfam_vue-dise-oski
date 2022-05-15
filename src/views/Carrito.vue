<template>
    <div class="page-cart">
        <div class="column is-12">
            <h1 class="title">Carrito</h1>
        </div>

        <div class="column is-12 box">
            <table class="table is-fullwidth" v-if="cartTotalLength">
                <thead>
                    <tr>
                        <th>Remedio</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    <CarritoItem
                        v-for="item in carrito.items"
                        v-bind:key="item.remedio.id"
                        v-bind:initialItem="item"
                        v-on:removeFromCarrito="removeFromCarrito"/>
                </tbody>
            </table>

            <p v-else>todavía no haz agregado nada al carrito....</p>
        </div>
        <div class="column">
            <h2 class="subtitle">Summary</h2>

            <strong>${{ cartTotalPrice }}</strong>, {{ cartTotalLength }} remedios

            <hr>

            <router-link to="/carrito/pago" class="button is-dark">Proceder al Pago</router-link>
        </div>
        <!-- paypal --->
        <div id="app">
            <paypal-checkout
            amount="10.00"
            currency="USD"
            :client="paypal">
            </paypal-checkout>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'
import CarritoItem from '@/components/CarritoItem.vue'
export default {
    name: 'Carrito',
    components: {
        CarritoItem
    },
    data() {
        return{
            carrito: {
                items: []
            }
        }
        return {
            paypal: {
            sandbox: '<sandbox client id>',
            production: '<production client id>'
      }
    }
    },
    mounted(){
        this.carrito = this.$store.state.carrito
    },
    methods: {
        removeFromCarrito(item){
            this.carrito.items = this.carrito.items.filter(i => i.remedio.id !== item.remedio.id)
        }
    },
    computed:{
        cartTotalLength(){
            return this.carrito.items.reduce((acc, curVal) => { ///la funcion reduce() de js nos permite hacer un loop en todos los items del carrito, para asi poder incrementar el valor
                return acc += curVal.quantity
            }, 0)
        },
        cartTotalPrice(){
            return this.carrito.items.reduce((acc, curVal) => { ///la funcion reduce() de js nos permite hacer un loop en todos los items del carrito, para asi poder incrementar el valor o el largo del carrito
                return acc += curVal.remedio.precioRemedio * curVal.quantity
            }, 0)
        },
    }
}
</script>