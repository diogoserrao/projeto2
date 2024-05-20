<template>
    <div class="vertical-center">
      <div v-if="!logado" class="inner-block">
        <h3>Login</h3>
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" class="form-control" v-model="username" />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" class="form-control" v-model="password" />
          </div>
          <button @click="login" class="btn btn-primary">Login</button>
      </div>
      <div v-if="logado">estou logado
      <button  @click="logout">logout</button>
      </div>
    </div>
  </template>
  
<script setup>
import { ref } from "vue";
const logado = ref(false)
logado.value = localStorage.getItem('login') == 'true'
const login = () => {
  console.log("Entrou")
  if (username.value == 'diogo' && password.value == '12345'){
  logado.value = true
  localStorage.setItem("login","true")
  }
}
const logout = () => {
  console.log("saiu")
  logado.value = false
  localStorage.setItem("login","false")
}
</script>
  
  <style scoped>

  </style>