/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = require('./pages/Home.vue').default

Vue.use(VueRouter)


Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const routes = [
{
    path: '/' ,
    component: Home
}
]

const router = new VueRouter({
    mode: 'history',
    routes
})


const app = new Vue({
    el: '#app',
    router
});
