<template>
    <div class="container">
        <div class="column">
            <label>Campo 1</label>
            <input class="column" type="datetime-local">
            <label>Campo 2</label>
            <input class="input" type="text">
            <label>Campo 3</label>
            <input class="input" type="text">
            <label>Barbeiro</label>
            <br>
            <div class="select">
                <select>
                    <option>Selecione o Barbeiro</option>
                    <option v-for="barbeiro in barbeiros" :key="barbeiro.id">{{barbeiro.nome}}</option>
                </select>
            </div>
            <!-- <div class="dropdown">
                <div class="dropdown-trigger">
                    <button class="button" @click="ligarDropdown(), listar()" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span>Dropdown button</span>
                    <span class="icon is-small">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                    </button>
                </div>
                <div class="dropdown-menu" id="dropdown-menu" role="menu">
                    <div class="dropdown-content">
                    <div v-for="barbeiro in barbeiros" :key="barbeiro.id">
                        <a href="#" class="dropdown-item">
                            {{barbeiro.nome}}
                        </a>
                    </div>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>

import Barbeiro from '@/services/barbeiros'

export default {
    data(){
        return{
            barbeiros:[]
        }
    },
    mounted(){
        this.listar();
    },
    methods:{
        ligarDropdown() {
            var menu = document.querySelector('.dropdown');
            // var burger = document.querySelector('.navbar-burger');
            // burger.addEventListener('click', function() {
            
            menu.classList.toggle('is-active');
            // burger.classList.toggle('is-active');
            // });

        },
        listar(){
            Barbeiro.listar().then(resposta => {    
            this.barbeiros = resposta.data;
            console.log(this.barbeiros);
            })
        }
    }
}
</script>

<style>

</style>
