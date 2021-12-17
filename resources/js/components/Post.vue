<template>
    <div class="col-md-8">
        <div class="card">
            <div class="card-header"> {{ post.title }} </div>
            <div class="card-body">
                {{ post.content }}
            </div>
            <div class="card-footer">
                <a @click="selectPost()">
                    veja mais
                </a>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    props:['post'],
    methods: {
        ...mapActions([
            'setSelectedPost'
        ]),
        selectPost() {
            this.setSelectedPost(this.post).then(() => {
                this.$router.push('/post')
            })
        }
    }
}
</script>
<style scoped>
.card{
    margin-bottom: 30px;
}
</style>
