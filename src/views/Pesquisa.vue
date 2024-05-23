<template>
  <div>
    <input placeholder="Pesquisar no Site" class="input" v-model="pesquisa">
    <button @click="buscar" class="button">Buscar</button>
    <div class="espacamento">
      <article class="formatacao" v-if="filtrarArtigos.length > 0">
        <h2 class="titulo" v-for="artigo in filtrarArtigos" :key="artigo.title">{{ artigo.title }}</h2>
        <p class="texto" v-for="artigo in filtrarArtigos" :key="artigo.title">{{ artigo.text }}</p>
      </article>
      
      <p v-else>No movies found.</p>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'Pesquisa',
  setup() {
    const pesquisa = ref("");
    const route = useRoute();
    const movies = ref([]);
    const movieid = route.params.id;

    const getMovies = () => {
      fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=27b2ae6a9df0f9492f35c659931b4097"
      )
        .then((res) => res.json())
        .then((dados) => {
          movies.value = dados.results;
        });
    };

    const buscar = () => {
      getMovies();
    };

    const artigos = computed(() => {
      return movies.value.map((movie) => ({
        title: movie.title,
        text: movie.overview
      }));
    });

    const filtrarArtigos = computed(() => {
      if (pesquisa.value === "") {
        return [];
      }
      return artigos.value.filter((artigo) => {
        return (
          artigo.title.toLowerCase().includes(pesquisa.value.toLowerCase()) ||
          artigo.text.toLowerCase().includes(pesquisa.value.toLowerCase())
        );
      });
    });

    return {
      pesquisa,
      buscar,
      filtrarArtigos
    };
  }
};
</script>
