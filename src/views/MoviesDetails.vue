
<template>

  <div class="tudo">
    <div class="imagem">
      <div>
        <img
          :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
          width="200px"
        />
      </div>
      <div>
        {{ movie.title }}
      </div>
      <div>
        {{ movie.release_date }}
      </div>
    </div>
    <div class="descricao"> 
      " {{ movie.overview}} "
      <div class="nota">
        <div>Avaliações: {{ movie.vote_count}}</div>
        <div>Classificação: {{ movie.vote_average}}</div>
      </div>
      <button @click="addToCart(movie.id, movie.title)" class="add-to-cart" style="max-width: 180px;">Adicionar ao carrinho</button>
      <li v-for="(item, index) in cartItems" :key="index">{{ item.name }} - R$ {{ item.price.toFixed(2) }}</li>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRoute } from 'vue-router'

const route = useRoute()
const movie = ref([]);
const movieid = route.params.id

const addToCart = (id, title) => {
  console.log("Entrei no add to cart", id)
  var carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
    // Adiciona pessoa ao cadastro
    carrinho.push({
        id: id,
        title: title
    });

    // Salva a lista alterada
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}
const getmovies = () => {
  fetch(
    "https://api.themoviedb.org/3/movie/" + movieid + "?api_key=27b2ae6a9df0f9492f35c659931b4097"
  )
    .then((res) => res.json())
    .then((dados) => {
      movie.value = dados;
    });
};
getmovies()

</script>
<style setup>
.tudo{
  display: flex;
  gap: 30px;
}
.descricao{
  display: flex;
  flex-direction: column;
  gap: 20px ;
  justify-content: center;
}
.nota{
  display: flex;
  gap: 20px;
}
</style>