import { createStore } from 'vuex'

export default createStore({
  state: { /// son las variables o información
    carrito: {
      items: [],
    },
    isAuthenticated: false,
    token: '', /// esta se ocupa cuando se añada el login
    isLoading: false,
  },
  getters: { 
  },
  mutations: { ///son las mutaciones sincronicas a las variables, ya que, no se pueden cambiar directamente
    initializedStore(state){ /// esta función nos permite guardar cosas el almacenamiento local
      if (localStorage.getItem('carrito')){
        state.carrito = JSON.parse(localStorage.getItem('carrito'))
      } else {
        localStorage.setItem('carrito', JSON.stringify(state.carrito))
      }

      if (localStorage.getItem('token')){ ///verificamos si existe un item llamado token en el storage
        state.token = localStorage.getItem('token')
        state.isAuthenticated = true
      }else {
        state.token = ''
        state.isAuthenticated = false
      }
    },
    addToCart(state, item){ /// funcion para añadir un remedio al carrito
      const exist = state.carrito.items.filter(i => i.remedio.id === item.remedio.id) /// primero verificamos si existe el remedio en el carrito o no

      if (exist.length){ /// si existe, o sea, si el largo es mayor a 0 entonces añadimos + 1 a la cantidad, si no existe entonces añadimos el remedio al carrito
        exist[0].quantity = parseInt(exist[0].quantity) + parseInt(item.quantity)
      } else {
        state.carrito.items.push(item)
      }

      localStorage.setItem('carrito', JSON.stringify(state.carrito)) /// guardando esto nos permite que, cuando refresquemos la página, todo este guardado
    },

    setToken(state, token){
      state.token = token
      state.isAuthenticated = true
    },

    removeToken(state){
      state.token = ''
      state.isAuthenticated = false
    }
  },
  actions: { /// son las funciones asincronicas para cambiarlas
  },
  modules: {
  }
})
