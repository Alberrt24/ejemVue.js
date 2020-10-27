// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//Archivo principal de vue.js
import Vue from 'vue'
//importacion de la aplicacion
import App from './App'
//importar biblioteca de importacion de datos
import vueResource from 'vue-resource'
Vue.use(vueResource)
//importar el modulo de navegacion
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//importar somponentes para las rutas
import Test from './components/test'
import User from './components/user'


const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes:[
    {
      path:'/',
      component: User
    },
    {
      path:'/test',
      component: Test
    }
  ]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')
