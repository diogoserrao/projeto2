<template>
    <div>
      <div id="cart">
        <h2>Carrinho de Compras</h2>
        <ul>
          <li v-for="(item, index) in carrinho" :key="index">{{ item.id }} {{ item.title }} </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup> 
  import { ref } from "vue";
  const carrinho = ref([])
  carrinho.value = JSON.parse(localStorage.getItem('carrinho') || '[]')
  console.log(carrinho)
  </script>
  
  <style scoped>
  .store-item {
    margin-bottom: 20px;
  }
  </style>