<template>
    <tr>
        <td><router-link :to="item.remedio.get_absolute_url">{{ item.remedio.nombreRemedio }}</router-link></td>
        <td>${{ item.remedio.precioRemedio }}</td>
        <td>
            {{ item.quantity }}
            <a @click="decrementQuantity(item)">-</a>
            <a @click="incrementQuantity(item)">+</a>
        </td>
        <td>${{ getItemTotal(item) }}</td>
        <td><button class="delete" @click="removeFromCarrito(item)"></button></td>
    </tr>
</template>

<script>
export default {
    name: 'CarritoItem',
    props: {
        initialItem: Object
    },
    data(){
        return{
            item: this.initialItem
        }
    },
    methods: {
        getItemTotal(item){
            return item.quantity * item.remedio.precioRemedio
        },
        decrementQuantity(item){
            item.quantity -= 1

            if (item.quantity === 0){
                this.$emit('removeFromCarrito', item)
            }

            this.updateCarrito()
        },
        incrementQuantity(item){
            item.quantity += 1

            this.updateCarrito()
        },
        updateCarrito(){
            localStorage.setItem('carrito', JSON.stringify(this.$store.state.carrito))
        },
        removeFromCarrito(item){
            this.$emit('removeFromCarrito', item)

            this.updateCarrito()
        }
    },
}
</script>