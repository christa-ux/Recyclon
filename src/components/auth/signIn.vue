<template>
    <div class="card-body">
              <form @submit.prevent="signIn">
                <div class="form-floating mb-3">
                  <input v-model="username" class="form-control" type="text" placeholder="Enter Username"/>
                  <label for="inputUsername">Username</label>
                </div>
                <div class="form-floating mb-3">
                  <input v-model="password" class="form-control" type="password" placeholder="Password"/>
                  <label for="inputPassword">Password</label>
                </div>
                <div class="form-check mb-3">
                  <input class="form-check-input" id="inputRememberPassword" type="checkbox" value=""/>
                  <label class="form-check-label" for="inputRememberPassword">Remember Password</label>
                </div>
                <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                  <a class="small" href="password.html">Forgot Password?</a>
                  <button @click.prevent="signIn" class="btn btn-primary">Login</button>
                </div>
              </form>                        
            </div>
            <div class="card-footer text-center py-3">
              <div class="small"><router-link to="/sign-up" class="sign-up-link">Sign Up</router-link></div>
            </div>
  </template>
  
  <script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

/* Data */
const username = ref('');
const password = ref('');
const errorMsg = ref('');
const router = useRouter();
const store = useStore();

/* Authenticates a user */
 const signIn = async () => {
    try {
        await store.dispatch('user/signIn', { username: username.value, password: password.value })
        router.replace('/');
    } catch (error) {
      console.log(error.message);
      if (error.message === 'Firebase: Error (auth/user-not-found).'|| error.message === 'Firebase: Error (auth/wrong-password).')
             errorMsg.value = "Invalid credentials!";
    }
};
  </script>
