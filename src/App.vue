<template>
  <div>
    <Cabecalho/>
  </div>
</template>

<script>

import Cabecalho from '@/components/CabecalhoRotas.vue'

export default {
  name: 'cabecalho',
  components: {
    Cabecalho
  }
}
</script>

<style>
html{
  background-color: rgb(22, 7, 137) !important;
}
label, b, p{
  color: aliceblue;
}
button, table{
  margin-top: 10px !important;
}
</style>
