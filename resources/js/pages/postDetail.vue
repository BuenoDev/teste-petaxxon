<template>
<div class="row justify-content-center">
    <div class="col-md-10 mt-5" v-if="selectedPost !== null">
        <div class="card">
            <div class="card-header">
                <h2>
                    {{ selectedPost.title }}
                </h2>
            </div>
            <div class="card-body">
                {{ selectedPost.content }}
            </div>
            <div class="card-footer">
                <h4>Comentários</h4>
                <div class="input-group" v-if="isAuth">
                    <input type="text" v-model="comment" class="form-control">
                    <div class="input-group-append">
                        <button class="form-control btn-success" @click="sendComment">
                            Enviar
                        </button>
                    </div>
                </div>
                <div class="comments-list">
                    <div class="comment mt-4" v-for="(comment, key) in selectedPost.comments" :key="key">
                        <span>
                            {{ comment.content }}
                        </span>
                        <div class="btn-group" v-if="comment.user_id === getUserId">
                            <button class="form-group btn-primary btn-sm">
                                <!-- <font-awesome-icon :icon="['fas' ,'fa-edit']" alt="Editar"/> -->
                                Editar
                            </button>
                            <button class="form-group btn-danger btn-sm"  @click="deleteComment(comment.id)">
                                Deletar
                                <!-- <font-awesome-icon icon="trash" alt="Deletar" /> -->
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data (){
        return {
            comment: null
        }
    },
    computed: {
        ...mapGetters([
            'getUserId', 'selectedPost', 'isAuth'
        ])
    },
    methods: {
        //TODO: A nomeacao dos metodos/actions ficaria muito melhor se feito de forma modular
        ...mapActions([
            'saveComment','deleteComment'
        ]),
        sendComment() {
            if(this.isAuth) {
                this.saveComment(this.comment).then(() => {
                    this.comment = ''
                })
            }
        },
    }

}
</script>
