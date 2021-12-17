import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

export default function () {
    const Router = new VueRouter({
        routes
    })

    
    Router.beforeEach((to, from, next) => {
        let isAuth = Router.app.$store.getters['auth/isAuth']
        let allowGuest = to.meta.allowGuest

        /**
         * Redireciona o usuário caso o mesmo não esteja autenticado
         * a menos que a proxima rota seja para login ou cadastro
         * ou qualquer outra que aceite visitantes
         */
        if (!isAuth && !allowGuest) next('/login')
        /**
         * Redireciona para home se usuario tentar entrar nas rotas
         * login ou cadastro
         */
        if (isAuth && allowGuest) next('/home')

        next()
      })
    return Router
}
