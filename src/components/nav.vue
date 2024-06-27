
<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="index.vue#aboutapp">About the app</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="index.vue#earthNow">Earth Now</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="index.vue#solution">Our Solution</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="index.vue#team">The Team</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="dashboard.vue">Dashboard</a>
            </li>
            <li class="nav-item">
              <button class="btn btn btn-outline-primary btn-sm mt-2 ms-1" @click="myFunction">mode</button>
            </li>
            <li class="nav-item">
              <button class="btn btn-outline-primary btn-sm mt-2 ms-1" @click="logout">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  mounted() {
    if (localStorage.getItem('loggedIn') !== 'true') {
      this.$router.push('signIn.vue');
    }
    if (localStorage.getItem('dark-mode') === 'true') {
      document.body.classList.add("dark-mode");
    }
  },
  methods: {
    myFunction() {
      // function logic here
    },
    logout() {
      localStorage.setItem('loggedIn', 'false');
      this.$router.push('signIn.vue');
    }
  }
}
</script>

<style>
@import 'node_modules/bootstrap/dist/css/bootstrap.min.css'; /* href="node_modules/bootstrap/dist/css/bootstrap.min.css" */
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css'); /*"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"*/
/*@import 'CSS/style.css';*/

/* Additional CSS styles for navbar */
</style>
