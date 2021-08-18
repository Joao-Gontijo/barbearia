<template>
    <div >
        <nav class="navbar is-dark">
            <div class="column"></div>
            <nav id="navbar-burger" class="navbar-burger is-dark" @click="ligarMenu()">
                <span></span>
                <span></span>
                <span></span>
            </nav>
            <nav class="navbar-menu">
                <router-link class="navbar-item" to="/">
                    <p>
                        Home
                    </p>
                </router-link>
                <router-link class="navbar-item" to="/barbeiro">
                    <p>
                        Barbeiros
                    </p>
                </router-link>
                <router-link class="navbar-item" to="/cliente">
                    <p>
                        Clientes
                    </p>
                </router-link>
                <router-link class="navbar-item" to="/servico">
                    <p>
                        Serviços
                    </p>
                </router-link>
                <router-link class="navbar-item" to="/agenda">
                    <p>
                        Agendas
                    </p>
                </router-link>
                <router-link class="navbar-item" to="/about">
                    <p>
                        Sobre
                    </p>
                </router-link>        
            </nav>
        </nav>
    </div>
    <router-view/>
</template>

<script>
export default {
    data(){
        return{
            showMenu: false
        }
    },
    methods:{
        ligarMenu() {
            var menu = document.querySelector('.navbar-menu');
            var burger = document.querySelector('.navbar-burger');
            // burger.addEventListener('click', function() {
            
            menu.classList.toggle('is-active');
            burger.classList.toggle('is-active');
            // });

        }
    }
}

</script>
<style>
p{
    color: rgb(88, 85, 85) !important;
}

</style>
