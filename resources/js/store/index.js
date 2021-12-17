import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default function () {

    let Store = new Vuex.Store({
        state: {
            user: null,
            userToken: null,
        },
        actions: {
            login (context,credentials) {
                axios.get('/sanctum/csrf-cookie')
                     .then(response => {
                    axios.post('/api/login', credentials)
                         .then(response => {
                                let token = response.data.token
                                context.commit('setUserToken', token)
                                axios.defaults.headers.common["Authorization"] = 'Bearer ' + token
                                axios.get('/api/user')
                                     .then(response => {
                                         context.commit('setUserData',response.data)
                                     })
                            })
                })

            },
            logout (context) {
                context.commit('eraseUserData')
            },
            register (context, credentials) {
                console.log(credentials)
                return axios.post('/api/register',credentials)
                     .then(response => {
                         console.log(response)
                     })
            }
        },
        mutations: {
            setUserToken (state, data) {
                state.userToken = data
            },
            setUserData (state, data) {
                state.user = {
                    name: data.name,
                    email: data.email
                }
            },
            eraseUserData(state) {
                state.userToken = null
                state.user = null
                axios.defaults.headers.common["Authorization"] = null
            }
        },
        getters: {
            getUsername (state) {
                console.log(state.user.name)
                console.log(state.isAuth)
                return state.user.name
            },
            getUserToken (state) {
                return 'Bearer ' + state.userToken
            },
            isAuth (state) {
                return state.userToken ? true : false
            }
        }
    })

    return Store
}
