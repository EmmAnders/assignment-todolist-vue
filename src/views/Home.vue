<template>
<div class="container">
  <div v-if="todos.length >0">
    <todo-item
    v-for="(todo,i) in todos"
    :key="i"
    :todo="todo"
    />
  
  </div>

</div>

</template>

<script>
import TodoItem from '../components/TodoItem';
 
export default {
 components: {
  TodoItem, 
  },

  computed:{
  todos(){
    return this.$store.state.todos;
  }
  },
};

</script>


<style scoped>

.container{
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

h1{
  margin-top: 5rem; 
}

</style>
