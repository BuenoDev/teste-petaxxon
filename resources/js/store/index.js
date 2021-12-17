import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default function () {

    let Store = new Vuex.Store({
        state: {
            user: null,
        },
        actions: {
            
        },
        mutators: {

        },
        getters: {

        }
    })

    return Store
}
