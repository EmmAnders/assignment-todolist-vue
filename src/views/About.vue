<template>
  <div id="about">
    <div class="content-box">
      <h1>This is an about page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  </div>
</template>


<style scoped>
#about {
  width: 100vh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.content-box {
  width: 550px;
  padding: 60px 35px 35px 35px;
  border-radius: 40px;
  box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #ffffff;
}

p,
h1 {
  letter-spacing: 0.5px;
}
</style>
