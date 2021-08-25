<template>
    <div>
        <div class="container">
            <form @submit.prevent="salvar(), listar()">
                <label>NOME</label>
                <input class="input" type="text" placeholder="Digite o nome do serviço" required v-model="servico.nome">
                <label>VALOR</label>
                <input class="input" type="number" placeholder="Digite o valor do serviço" required v-model="servico.valor">
                <label>TEMPO</label>
                <input class="input" type="number" placeholder="Digite o tempo do serviço" required v-model="servico.tempo">

                <button class="button is-primary mt-2">Salvar<i class="material-icons left"></i></button>
            </form>

            <table class="table mt-2">
                <thead>
                    <tr>
                        <th>NOME</th>
                        <th>VALOR</th>
                        <th>TEMPO</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="servico of servicos" :key="servico.id">
                        <td>{{servico.nome}}</td>
                        <td>{{servico.valor}}</td>
                        <td>{{servico.tempo}}</td>
                        <td>
                        <button @click="editar(servico), this.listar()" class="button is-success"><i class="material-icons">Editar </i></button>
                        <button @click="remover(servico), this.listar()" class="button is-danger"><i class="material-icons">Excluir </i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>

    </div>
</template>

<script>

import Servico from '@/services/servicos'

export default {
    data(){
        return{
            servico:{
                id: '',
                nome: "",
                valor: "",
                tempo: ""
            },
            servicos:[]
        }
    },
    // computed:{
    //     listar: function(){
    //         return Servico.listar().then(resposta => {
    //            this.servicos = resposta.data;
    //         })
    //     }
    // },
    mounted(){
        this.listar();
    },
    methods:{
        listar(){
            Servico.listar().then(resposta => {
                this.servicos = resposta.data;
            })
        },
        salvar(){
            if(!this.servico.id){
                Servico.salvar(this.servico);
                alert("Salvo com sucesso!");
                this.servico = {}
            } else {
                Servico.atualizar(this.servico);
                alert("Atualizado com sucesso!");
                this.servico = {}
                this.servico.id()
            }
            this.listar();
        },
        editar(servico){
            this.servico = servico;
        },
        remover(servico){
            Servico.apagar(servico);
            alert("Serviço removido");
            this.listar();
        }
    }
}
</script>

<style>

</style>
