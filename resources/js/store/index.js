import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default function () {

    let Store = new Vuex.Store({
        state: {
            user: null,
        },
        actions: {
            login (context,credentials) {
                console.log(credentials)
            },
            logout (context) {
                console.log('action logout')
            },
            register (context, credentials) {
                console.log(credentials)
                return axios.post('/api/register',credentials)
                     .then(response => {
                         console.log(response)
                     })
            }
        },
        mutators: {

        },
        getters: {
            getUsername () {
                // return this.state.user.name
                return 'gustavo'
            },
            isAuth () {
                return false
            }
        }
    })

    return Store
}
