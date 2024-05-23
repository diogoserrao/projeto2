<template>
  <div class="vertical-center">
    <div v-if="!logado" class="inner-block">
      <h3>Login</h3>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" class="form-control" v-model="email" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" class="form-control" v-model="password" />
      </div>
      <button @click="loginUser" class="btn btn-primary">Login</button>
      <p class="mt-3 text-center">
          Don't have an account? <RouterLink to="/Register">Sign up</RouterLink>
        </p>
    </div>
    <div v-else>
      <p>Estou logado</p>
      <button @click="logout" class="btn btn-secondary">Logout</button>
    </div>
  </div>
</template>

<script>
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '@/firebase'; // Adjust according to your project structure

export default {
  data() {
    return {
      email: "",
      password: "",
      logado: false, // State to track login status
    };
  },
  methods: {
    async loginUser() {
      try {
        await signInWithEmailAndPassword(auth, this.email, this.password);
        this.logado = true;
        localStorage.setItem("login", "true");
        // Optionally redirect to the main page after successful login
        this.$router.push('/');
      } catch (error) {
        console.error("Login failed: ", error.message);
      }
    },
    async logout() {
      try {
        await signOut(auth);
        this.logado = false;
        localStorage.setItem("login", "false");
        // Optionally redirect to the login page or home page after logout
        this.$router.push('/login');
      } catch (error) {
        console.error("Logout failed: ", error.message);
      }
    },
  },
  mounted() {
    // Check login status on component mount
    this.logado = localStorage.getItem("login") === "true";
  },
};
</script>
  
  <style scoped>

  </style>