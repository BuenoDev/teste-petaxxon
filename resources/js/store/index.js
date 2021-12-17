import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default function () {

    let Store = new Vuex.Store({
        state: {
            user: null,
            userToken: null,
            posts: [],
            selectedPost: null
        },
        actions: {
            login (context,credentials) {
                return axios.get('/sanctum/csrf-cookie')
                     .then(function(response){
                    return axios.post('/api/login', credentials)
                         .then(function(response){
                                let token = response.data.token
                                context.commit('setUserToken', token)
                                axios.defaults.headers.common["Authorization"] = 'Bearer ' + token
                                return axios.get('/api/user')
                                     .then(function(response){
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
            },
            createPost (context, payload){
                return axios.post('/api/post',payload).then(response => {
                    alert('Postagem criada com sucesso')
                })
            },
            fetchPosts (context) {
                axios.get('/api/post').then(response => {
                    console.log('posts:')
                    console.log(response.data)
                    context.commit('setPosts', response.data)
                });
            },
            setSelectedPost(context,post) { //TODO: Lazy Loading de Comentários?
                context.commit('setSelectedPost', post)
            },
            saveComment(context, comment) {
                let postId = context.getters.selectedPost.id
                let url = '/api/post/' + postId + '/comment'
                axios.post(url,{ comment: comment }).then( () => {
                    context.dispatch('resetSelectedPostComments').then(() => {
                        alert('Comentário Salvo com sucesso')
                    })
                })
            },
            resetSelectedPostComments(context){
                let selected = context.getters.selectedPost
                axios.get('/api/post/'+selected.id+'/comments').then(response => {
                    // chama a mutation para modificar o array de comentarios do post selecionado
                    context.commit('updateSelectedPostComments',response.data)
                })
            },
            // TODO: verificar o funcionamento da funcao para varios usuarios
            deleteComment(context, id) {
                axios.delete('/api/comment/' + id).then(response => {
                    context.dispatch('resetSelectedPostComments')
                })
            }
        },
        mutations: {
            setUserToken (state, data) {
                state.userToken = data
            },
            setUserData (state, data) {
                state.user = {
                    id: data.id,
                    name: data.name,
                    email: data.email
                }
            },
            eraseUserData(state) {
                state.userToken = null
                state.user = null
                axios.defaults.headers.common["Authorization"] = null
            },
            setPosts(state, data) {
                state.posts = data
            },
            setSelectedPost(state, data) {
                state.selectedPost = data
            },
            updateSelectedPostComments (state, data){
                state.selectedPost.comments = data
            }
        },
        getters: {
            getUsername (state) {
                return state.user.name
            },
            getUserToken (state) {
                return 'Bearer ' + state.userToken
            },
            getUserId (state) {
                return state.user.id
            },
            isAuth (state) {
                return state.userToken ? true : false
            },
            posts (state) {
                return state.posts
            },
            selectedPost (state) {
                return state.selectedPost
            }
        }
    })

    return Store
}
