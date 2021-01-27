<template>
  <div class="todo-item">
    <p class="name">Emma's Todo - Added 26/1-2020</p>

    <div class="name-wrapper">
       <div class="card-title"><h1> Title Card Title </h1></div>
        <div class="buttons">
          <button class="check-button">
            <img src="../assets/check.svg" alt="" />
          </button>
          <button class="trash-button">
            <img src="../assets/trash.svg" alt="" />
          </button>
  
   
    </div>
    </div>
            

 


    
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.todo-item {
  min-width: 500px;
  max-width: 800px;
  max-height: 300px;
  border-radius: 40px;
  padding: 2rem;
  background: #ecf0f3;
  box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #ffffff;
  margin: 1.5rem 0px; 
  
}


.name {
  font-style: italic;
  font-size: 0.8rem;
}

.name-wrapper{
    display: flex;
    justify-content: space-between;
 
}

button {
  border-radius: 60px;
  background: #ecf0f3;
  box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #ffffff;
  border: none;
  padding: 1rem; 
}

.check-button {
  margin-right: 15px;
}

button:hover {
  border-radius: 25px;
  box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #ffffff;
  cursor: pointer;
}

button:active {
  border-radius: 25px;
  box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #ffffff;
}


</style>