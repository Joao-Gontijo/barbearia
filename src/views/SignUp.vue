<template>
  <div>
    <div class="container">

      <form novalidate="true" @submit.prevent="checkEmail(), cadastrarCpf(), salvar()">

      <p v-if="errors.length">
          <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
          <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
        </p>

          <label>NOME</label>
          <input class="input" type="text" placeholder="Digite seu nome" name="name" id="name" required v-model="pessoa.nome" >
          <label>CPF</label>
          <input class="input" type="text" placeholder="Digite seu CPF" required v-model="pessoa.cpf" >
          <label>E-mail</label>
          <input class="input" type="email" name="email" id="email" placeholder="Digite seu E-mail" v-model="pessoa.email">
          <label>Senha</label>
          <input class="input" type="password" placeholder="Digite sua senha" required v-model="senha1">
          <label>Repita a senha</label>
          <input class="input" type="password" placeholder="Confirme sua senha" required v-model="senha2">

          <button class="button is-primary">Criar conta<i class="material-icons left"></i></button>

      </form>
    </div>
  </div>
</template>

<script>

  import Pessoa from '@/services/pessoas'
  // import axios from 'axios';
  
  export default{

    data(){
      return {
        errors: [], 
        pessoa:{
          id:'',
          nome:"",
          cpf:'',
          email:'',
          senha:''

        },
        senha1:[],
        senha2:[],

        pessoas:[]
      }
    },

    methods:{
      cadastrarCpf: function(e){
      
        if(!this.pessoa.cpf){
          this.errors.push('O cpf é obrigatório.');
          e.preventDefault();
        } else if (!this.validaCpf(this.pessoa.cpf)){
          this.errors.push('Utilize um cpf válido.');
          e.preventDefault();
        }

    },
    
    validaCpf(c){
      if((c = c.replace(/[^\d]/g,"")).length != 11){
        return false 
      }

      if (c == "00000000000" || c == "11111111111" || c == "22222222222" || c == "33333333333" || c == "44444444444" || c == "55555555555" ||  c == "66666666666" ||
          c == "77777777777" || c == "88888888888" || c == "99999999999"){
            return false;
        }

      var r;
      var s = 0;

      for (let i=1; i<=9; i++){
        s = s + parseInt(c[i-1]) * (11 - i);
      }
      r = (s * 10) % 11;

      if ((r == 10) || (r == 11)){
        r = 0;
      }
      if (r != parseInt(c[9])){
        return false;
      }
      s = 0;

      for (let i = 1; i <= 10; i++){
        s = s + parseInt(c[i-1]) * (12 - i);
      }
      r = (s * 10) % 11;

      if ((r == 10) || (r == 11)){
        r = 0;
      }
      if (r != parseInt(c[10])){
        return false;
      }
      return true;
      },
      checkEmail: function (e) {
        this.errors = [];

        if (!this.pessoa.nome) {
          this.errors.push('O nome é obrigatório.');
        }
        if (!this.pessoa.email) {
          this.errors.push('O e-mail é obrigatório.');
        } else if (!this.validEmail(this.pessoa.email)) {
          this.errors.push('Utilize um e-mail válido.');
        }
        if (!this.errors.length) {
         return true;
        }

        e.preventDefault();
      },
      validEmail: function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      },

      salvar(){
        // const data = {
        //   nome: this.pessoa.nome,
        //   cpf: this.pessoa.cpf,
        //   email: this.pessoa.email,
        //   senha1: this.pessoa.senha,
        //   senha2: this.pessoa.senha,
        // }

        // axios.post('http://localhost:8080/barbearia/cliente', data).then(res => {
        //   console.log(res);
        // }).catch(err => {
        //   console.log(err);
        // })
        if(this.senha1 === this.senha2){

          this.pessoa.senha = this.senha1
          if(!this.pessoa.id){
            Pessoa.salvar(this.pessoa)
            alert('salvo com sucesso! ')
            console.log(this.pessoa);
            this.pessoa = {}
            this.senha1=""
            this.senha2=""

          }else {
            Pessoa.atualizar(this.pessoa)
            alert('Atualizado com sucesso!')
            this.pessoa = {}
            this.senha1=""
            this.senha2=""
            this.pessoa.id()
          }

        }else {
          alert("As senhas não combinam")
        }
       
      },

      editar(pessoa){
        this.pessoa = pessoa
      },

    //   remover(pessoa){
    //     Pessoa.apagar(pessoa);
    //     alert("Cliente removido");
    //     this.listar();
    //   } 
    }
  }

  
</script>

<style>

</style>