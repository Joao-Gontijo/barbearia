<template>
  <div class="container">
    <div class="login">
      <img alt="Vue logo" src="../assets/logo.png">
      <Login msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '../views/Login.vue'

export default {
  name: 'login',
  components: {
    Login
  }
}
</script>
