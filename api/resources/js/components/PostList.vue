<template>
    <div class="container">
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

export default {
    // name: 'PostList',
    mounted(){
        axios.get('sanctum/csrf-cookie').then(response => {
            console.log(response)
        })
        axios.get('/api/post').then(response => {
            // console.log(response)
            this.posts = response.data
        });
    },
    data() {
        return {
            posts: []
        }
    }
}
</script>
