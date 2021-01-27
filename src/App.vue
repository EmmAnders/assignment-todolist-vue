<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Todo-List </router-link> 
      <router-link to="/addtodo">Add Todo </router-link> 
      <router-link to="/about">About </router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
 
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #242f6b;
  background: #ecf0f3;
  height: 100vh;
  width: 100vw;

}

#nav {
  padding: 30px;
  font-size: 1.5rem; 
  margin: 0 auto; 
  text-align: center;
  
}

#nav a {
  font-weight: bold;
  color: #242f6b;
  padding: 1rem; 
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #242f6b6c;
  text-decoration: underline;
}

p{
font-size: 1.2rem; 
}
</style>
