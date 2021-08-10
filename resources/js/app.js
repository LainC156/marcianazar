/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import Vuetify from 'vuetify'
//import Router from 'vue-router'
require('./bootstrap');

window.Vue = require('vue').default;

Vue.use(Vuetify)

import Vuex from 'vuex'

Vue.use(Vuex)

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: require('./routes').default
})

const store = new Vuex.Store({
    state: {
        products: [],
        product: []
    },
    mutations: {
        updateProducts(state, products) {
            state.products = products
            console.log('mutation updateProducts: ', state.products)
        },
        addToCart(state, product) {
            let productInCartIndex = state.cart.findIndex(
                item => item.slug === product.slug
            )
            if (productInCartIndex !== -1) {
                state.cart[productInCartIndex].quantity++
                return;
            }

            product.quantity = 1;
            state.cart.push(product)
        },
        removeFromCart(state, index) {
            state.cart.splice(index, 1)
        },
        updateOrder(state, order) {
            state.order = order
        },
        updateCart(state, cart) {
            state.cart = cart
        }
    },
    actions: {
        getLastProducts({ commit }) {
            axios.get('/sanctum/csrf-cookie').then(res => {
                axios.get('/api/products/lastupdates')
                    .then((response) => {
                        commit('updateProducts', response.data)
                    })
                    .catch((error) => console.error(error))
            }).catch(err => console.log('err at created vue app', err))
        },
        getProducts({ commit }) {
            axios.get('/sanctum/csrf-cookie').then(res => {
                axios.get('/api/products/clothing')
                    .then(response => {
                        commit('updateProducts', response.data)
                    }).catch(err => console.log('products err: ', err.response))
            }).catch(err => console.log('err: ', err.response))
        },
        getPlants({ commit }) {
            axios.get('/sanctum/csrf-cookie').then(res => {
                axios.get('/api/products/plants')
                    .then(response => {
                        commit('updateProducts', response.data)
                    }).catch(err => console.log('Plants err: ', err.response))
            }).catch(err => console.log('err: ', err.response))
        }
    }
})
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('app', require('./components/Products/IndexComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    router,
    store,
    el: '#app',
    vuetify: new Vuetify(),
    created() {
        store.dispatch('getLastProducts')
            .then(_ => { })
            .catch(err => console.log('err'))
    }
});
