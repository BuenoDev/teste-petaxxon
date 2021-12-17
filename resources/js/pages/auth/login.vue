<template>
    <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Login</div>

                <div class="card-body">

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">E-mail</label>

                            <div class="col-md-6">
                                <input id="email" v-model="email" type="email" class="form-control" :class="invalidEmail ? ' is-invalid' : ''" name="email"  required autocomplete="email" autofocus>

                                <!-- @error('email') ??????????-->
                                    <!-- <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span> -->
                                <!-- @enderror -->
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Senha</label>

                            <div class="col-md-6">
                                <input id="password" v-model="password" type="password" class="form-control" :class="invalidPassword ? ' is-invalid' : ''" name="password" required autocomplete="current-password">

                                <!-- @error('password') -->
                                    <!-- <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span> -->
                                <!-- @enderror -->
                            </div>
                        </div>

                        <!-- <div class="form-group row">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                    <label class="form-check-label" for="remember">
                                        {{ __('Remember Me') }}
                                    </label>
                                </div>
                            </div>
                        </div> -->

                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button class="btn btn-primary" @click="submitLogin()">
                                    Login
                                </button>

                                <!-- @if (Route::has('password.request'))
                                    <a class="btn btn-link" href="{{ route('password.request') }}">
                                        {{ __('Forgot Your Password?') }}
                                    </a>
                                @endif -->
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
            email: '',
            password: ''
        }
    },
    methods: {
        ...mapActions([
            'login'
        ]),
        submitLogin() {
            /**
             * TODO: router push está sendo chamado
             * ANTES das chamadas serem finalizadas
             *
             * Talvez pelo fato da propria action ser uma Promise?
             *
             * Não é o ideal, mas importar routes/index.js dentro
             * do store e utilizar o push por la resolveria esse problema
             */
            this.login(this.credentials).then(response => {
                this.$router.push('/')
            })
        }
    },
    computed: {
        credentials () {
            return {
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
