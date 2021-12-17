<template>
    <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Cadastrar</div>

                <div class="card-body">
                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">Nome</label>

                            <div class="col-md-6">
                                <input id="name" v-model="name" type="text" class="form-control" name="name"  required autocomplete="name" autofocus>

                                <!-- @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror -->
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                            <div class="col-md-6">
                                <input id="email" v-model="email" type="email" class="form-control" :class="invalidEmail ? ' is-invalid' : ''" name="email"  required autocomplete="email" autofocus>

                                    <span v-if="invalidEmail" class="invalid-feedback" role="alert">
                                        <strong>{{ invalidEmailMsg }}</strong>
                                    </span>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Senha</label>

                            <div class="col-md-6">
                                <input id="password" v-model="password" type="password" class="form-control" :class="invalidPassword ? ' is-invalid' : ''" name="password" required autocomplete="current-password">

                                    <span v-if="invalidPassword"  class="invalid-feedback" role="alert">
                                        <strong>{{ invalidPasswordMsg }}</strong>
                                    </span>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password-confirm" class="col-md-4 col-form-label text-md-right">Confirmar senha</label>

                            <div class="col-md-6">
                                <input id="password-confirm" v-model="confirmPassword" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button @click="validateAndRegister" class="btn btn-primary">
                                    Cadastrar
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
import { mapActions } from 'vuex'
export default {
    data () {
        return {
            invalidEmail: false,
            invalidEmailMsg: '',
            invalidPassword: false,
            invalidPasswordMsg: '',
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    },
    methods: {
        ...mapActions([
            'register','login'
        ]),
        validateAndRegister() {

            if(this.password === this.confirmPassword) {
                this.invalidPassword = false
                this.register(this.credentials)
                    .then(response => {
                        //TODO: coloca um alert descente
                        alert('usuario criado com sucesso')
                        this.$router.push('/login')
                    })
                    .catch(error => {
                    console.log(error.response.data)
                    let errorResponse = error.response.data.errors

                    if(errorResponse.email){
                        this.invalidEmail = true
                        this.invalidEmailMsg = errorResponse.email[0]
                    }
                    if(errorResponse.password){
                        this.invalidPassword = true
                        this.invalidPasswordMsg = errorResponse.password[0]
                    }

                })
            }
            else this.invalidPassword = true
        }
    },
    computed: {
        credentials () {
            return {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.confirmPassword
            }
        }
    }
}
</script>
<style scoped>
.container{
    margin-top: 50px;
}
</style>
