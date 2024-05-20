<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="page">
  <header>
    <div class="cabecalho">
    <div class="categorias">
      <RouterLink to="/" class="Inicio">Inicio</RouterLink>
      <div>Series</div>
      <nav>
        <div>Filmes</div>
      </nav>
    </div>
    <div class="categoriasdireita">
      <RouterLink to="/login" class="Inicio">Login</RouterLink>
      <RouterLink to="/carrinho" class="Inicio">Carrinho</RouterLink>
    </div>
  </div>

    <div class="wrapper">


    </div>
  </header>

  <RouterView />
</div>
</template>

<style scoped>
.cabecalho{
  display: flex;
  border-bottom: 2px solid #ccc;
  justify-content: space-between;
  margin-bottom: 20px;
}
.categorias{
  display: flex;
  padding: 20px;
  gap: 30px;
}
.categoriasdireita{
  display: flex;
  padding: 20px;
  gap: 30px;
  margin-right: 40px;
}

.Inicio{
    color: black;
    text-align: center;
    z-index: 2;
}
</style>
