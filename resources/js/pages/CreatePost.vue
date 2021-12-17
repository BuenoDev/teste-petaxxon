<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-body">
                <div class="form-group">
                    <label for="title" class="label">
                        Titulo
                    </label>
                    <input type="text" class="form-control" v-model="title">
                    <label for="content">
                        Postagem
                    </label>
                    <textarea type="text" class="form-control" v-model="content">
                    </textarea>
                    <button class="btn btn-success" @click="sendPost">
                        Enviar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    data () {
        return {
            title: '',
            content: ''
        }
    },
    methods: {
        ...mapActions([
            'createPost'
        ]),
        sendPost (){
            this.createPost({
                title: this.title,
                content: this.content
            }).then(() => {
                this.$router.push('/')
            })
        },
        clearFields () {
            this.title = ''
            this.content = ''
        }
    }
}
</script>
