<template>
    <div class="vertical-center">
        <h3>Register</h3>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" class="form-control" v-model="email" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" class="form-control" v-model="password" />
        </div>
        <button @click="RegisterUser" class="btn btn-primary">Signup</button>
    </div>
</template>
  
<script>
  import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
  import { auth } from '@/firebase'; // Adjust according to your project structure
    
  export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async RegisterUser() {
      try {
        await createUserWithEmailAndPassword(auth, this.email, this.password);
        // Redirecionar para a página de login após o registro bem-sucedido
        this.$router.push('/login');
      } catch (error) {
        console.error("Registration failed: ", error.message);
      }
    }
  }
};

</script>

<style>

</style>