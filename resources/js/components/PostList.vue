<template>
    <div class="container">
        <div class="row" v-if="isAuth">
            <router-link to="/post/create">
                <button class="btn btn-success">
                    Criar Post
                </button>
            </router-link>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-10 col-sm-12">
                <div v-for="(item, key) in posts" :key="key">
                    <post :post="item"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    // name: 'PostList',
    mounted(){
        this.fetchPosts()
    },
    methods:{
        ...mapActions([
            'fetchPosts'
        ])
    },
    computed:{
        ...mapGetters([
            'posts','isAuth'
        ])
    }
}
</script>
