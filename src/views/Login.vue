<template>
    <div>
        <div class="container">
            <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="email" placeholder="Email" id="email" v-model="pessoa.email">
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                    </span>
                </p>
                </div>
                <div class="field">
                <p class="control has-icons-left">
                    <input class="input" type="password" placeholder="Password" id="senha" v-model="pessoa.senha">
                    <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                    </span>
                </p>
            </div>
            <!-- <form novalidate="true" @submit.prevent="checkLogin(), $router.push('/agenda')"> -->
            <form novalidate="true" v-on:submit.prevent="checkEmail(), checkSenha(), $router.push('/agenda')">
                <p v-if="errors.length"> 
                    <b>Por favor, corrija o(s) seguinte(s) erro(s)</b>
                    <ul>
                        <li v-for="error in errors" :key="error">{{error}}</li>
                    </ul>
                </p>
                <div class="btn-login">
                    <button class="button is-primary">
                        Entrar
                    </button>
                </div>
            </form>
            <p>
                Você não tem uma conta?
                <router-link to="/signup">Crie uma conta</router-link>
            </p>
        </div>
    </div>
</template>

<script>

    // import Pessoa from '@/services/pessoas'
    // import Login from '@/services/login'

    export default {
        name: "login",
        data(){
            return{
                loginError: false,
                error: false,
                errors: [],
                pessoa: {
                    email: '',
                    senha: ''
                }
            };
        },
        methods: {
            checkEmail: function(e) {
                this.errors = [];

                if(!this.pessoa.email){
                    this.errors.push('Email obrigatório');
                } 
                else if(!this.validEmail(this.pessoa.email)){
                    this.errors.push('Email ou senha incorretos')
                }

                if(!this.errors.length){
                    return true; 
                }

                e.preventDefault();
            },
            checkSenha: function(e) {
                this.errors = [];

                if(!this.pessoa.senha){
                    this.errors.push('Senha obrigatória');
                } 
                else if(!this.validSenha(this.pessoa.senha)){
                    this.errors.push('Email ou senha incorretos')
                }

                if(!this.errors.length){
                    return true; 
                }

                e.preventDefault();
            },

            validEmail: function(email){
                if(email === 'joao@email.com'){
                    return true;
                } else {
                    return false;
                }
            },
            validSenha: function(senha){
                if(senha === '1234'){
                    return true;
                } else{
                    return false;
                }
            }
            // buscar(email){
            //     Pessoa.buscar(email).then(resposta => {
            //         this.pessoa = resposta;
            //     })
            // }
        }
    }
</script>

<style>

</style>
