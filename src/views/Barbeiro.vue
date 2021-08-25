<template>
    <div>

    <div class="container">

      <form @submit.prevent="salvar(), listar()">

          <label>NOME</label>
          <input class="input" type="text" placeholder="Digite seu nome" required v-model="barbeiro.nome" >
          <label>CPF</label>
          <input class="input" type="text" placeholder="Digite seu CPF" required v-model="barbeiro.cpf" >
          <label>E-mail</label>
          <input class="input" type="text" placeholder="Digite seu E-mail" required v-model="barbeiro.email">
          <label>TIPO</label>
          <input class="input" type="text" placeholder="Digite o tipo" required v-model="barbeiro.tipo">
          <label>Senha</label>
          <input class="input" type="password" placeholder="Digite sua senha" required v-model="senha1">
          <label>Repita a senha</label>
          <input class="input" type="password" placeholder="Confirme sua senha" required v-model="senha2">
            
          <button class="button is-primary">Salvar<i class="material-icons left"></i></button>

      </form>

      <table class="table">

        <thead>
          <tr>
            <th>NOME</th>
            <th>CPF</th>
            <th>E-mail</th>
          </tr>
        </thead>

        <tbody>

          <tr v-for="barbeiro of barbeiros" :key="barbeiro.id">

            <td>{{ barbeiro.nome }}</td>
            <td>{{ barbeiro.cpf }}</td>
            <td>{{ barbeiro.email }}</td>
            <td>
              <button @click="editar(barbeiro), this.listar()" class="button is-success"><i class="material-icons">Editar </i></button>
              <button @click="remover(barbeiro), this.listar()" class="button is-danger"><i class="material-icons">Excluir </i></button>
              <button @click="listarServicos(barbeiro), this.listar()" class="button is-success"><i class="material-icons">Serviços </i></button>

            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Barbeiro from '@/services/barbeiros'
  
  export default{

    data(){
      return {
        
        barbeiro:{
          id:'',
          nome:"",
          cpf:'',
          email:'',
          senha:'',
          tipo:''

        },
        senha1:[],
        senha2:[],

        barbeiros:[]
      }
    },
    mounted(){
      this.listar();
    },

    methods:{

      listar(){
        Barbeiro.listar().then(resposta => {    
        this.barbeiros = resposta.data;
        })
      },
      listarServicos(){
          alert("Em construção");
      },

      salvar(){
        if(this.senha1 === this.senha2){

          this.barbeiro.senha = this.senha1
          if(!this.barbeiro.id){
            Barbeiro.salvar(this.barbeiro)
            alert('salvo com sucesso! ')
            this.barbeiro = {}
            this.senha1=""
            this.senha2=""

          }else {
            Barbeiro.atualizar(this.barbeiro)
            alert('Atualizado com sucesso!')
            this.barbeiro = {}
            this.senha1=""
            this.senha2=""
            this.barbeiro.id()
          }

        }else {
          alert("As senhas não combinam")
        }
        this.listar();
      },

      editar(barbeiro){
        this.barbeiro = barbeiro
      },

      remover(barbeiro){
        Barbeiro.apagar(barbeiro);
        alert("Barbeiro removido");
        this.listar();
      } 
    }
  }
</script>

<style>

</style>
