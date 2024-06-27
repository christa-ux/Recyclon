<script setup>
import Nav from './components/nav.vue';
import SignIn from './components/auth/signIn.vue'
import SignUp from './components/auth/signUp.vue'
// export default {
// 	components: { Nav },
// }

import LogIn from './components/auth/signIn.vue'
</script>

<template>
  <div>
	<Nav></Nav>
	<SignIn></SignIn>
	<SignUp></SignUp>
	
   
    
  </div>
  
</template>

<style >
:root {
	--primary: rgba(2, 161, 161, 0.5);
	--primary-alt: teal;
	--grey: #848d98;
	--dark: #17262b;
	--dark-alt: #283f47;
	--light: teal;
	--sidebar-width: 200px;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira sans', sans-serif;
}



button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}

.app {
	display: flex;

	main {
		flex: 1 1 0;
		padding: 2rem;

		@media (max-width: 1024px) {
			padding-left: 6rem;
		}
	}
}
</style>


