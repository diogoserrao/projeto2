<template>
  <div class="movielist">
    <div v-for="movie in movies" class="imagem">
      <div>
        <RouterLink :to="'/movies/' + movie.id">
        <img
          :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
          width="200px"
        />
        </RouterLink>
      </div>
      <div>
        {{ movie.title }}
      </div>
      <div>
        {{ movie.release_date }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from "vue";
const users = ref([]);
const movies = ref([]);
const getmovies = () => {
  fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=27b2ae6a9df0f9492f35c659931b4097"
  )
    .then((res) => res.json())
    .then((dados) => {
      movies.value = dados.results;
    });
};
getmovies();

</script>
<style setup>
.movielist{
  width: 100%;
  height: 100%;
}
.imagem{
  gap: 20px;
}
</style>
