<template>
  <main id="app">
    <nav id="nav">
      <router-link to="/">Todo-List </router-link> 
      <router-link to="/addtodo">Add Todo </router-link> 
      <router-link to="/about">About </router-link>
    </nav>
    <router-view />
  </main>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

body{
  color: #242f6b;
  background: #ecf0f3;
  height: 100vh;
  width: 100vw;
  margin: 0 auto; 
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

#app {
max-width: 1200px; 
margin: auto;
}

#nav {
  padding: 2rem;
  font-size: 1.5rem; 
  margin: 0 auto; 
  text-align: center;
  margin-top: 3rem; 
}

#nav a {
  font-weight: bold;
  padding: 1rem; 
  text-decoration: none;
  font-size: 1.7rem; 
}

#nav a.router-link-exact-active {
  color: #242f6b6c;
  text-decoration: underline;
}

@media (max-width: 576px) {

#nav {
  padding: 2rem; 
  display: flex; 
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 0rem;
}

#nav a {
  padding: 1rem;   
  font-size: 1.5rem; 
}
  
}
</style>
