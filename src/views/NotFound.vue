<script setup>

</script>
<template>
  <div class="corpo">
    <div class="preto"></div>
    <div class="estrutura">
        <div class="texto1">Front-End</div>
        <h1 class="numero">404</h1>
        <div class="texto2">The link you clicked may be broken or the page <br>may have burst</div>
        <a  class="texto3" href="/">Visit the home page</a>
      </div>  
  </div>
</template>
<style scoped>
.preto{
  background-color: black;
  height: 100px;
  margin: 20px;
  margin-top: 0;
  width: 100%;
}
.corpo{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
}

.estrutura{
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
}

.numero{
    font-size: 180px;
    color: white;
    margin:0px; 
    font-family: system-ui;
   color: black;
}

.texto1{
    color: black;
    text-align: center;
    margin-bottom: 77px;
}

.texto2{
    color: black;
    text-align: center;
    margin-bottom: 60px;
}

.texto3{
    color: black;
    text-align: center;
    z-index: 2;

}

</style>