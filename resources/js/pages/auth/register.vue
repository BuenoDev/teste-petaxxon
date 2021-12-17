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
                                <input id="name" type="text" class="form-control" name="name"  required autocomplete="name" autofocus>

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

                                <!-- @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror -->
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Senha</label>

                            <div class="col-md-6">
                                <input id="password" v-model="password" type="password" class="form-control" :class="invalidPassword ? ' is-invalid' : ''" name="password" required autocomplete="current-password">

                                <!-- @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror -->
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
            invalidPassword: false,
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    },
    methods: {
        ...mapActions([
            'register'
        ]),
        validateAndRegister() {
            if(this.password === this.confirmPassword) {
                this.invalidPassword = false
                this.register(this.credentials)
            }
            else this.invalidPassword = true
        }
    },
    computed: {
        credentials () {
            return {
                name: this.name,
                email: this.email,
                password: this.password
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
