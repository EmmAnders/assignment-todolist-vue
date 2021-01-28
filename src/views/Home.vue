<template>
  <div class="container">
    <h1>Todos</h1>

    <ul class="todo">
      <todo-item v-for="(todo, i) in sortedToDos" 
      :key="i" 
      :todo="todo" />
    </ul>

  </div>
</template>

<script>
import TodoItem from "../components/TodoItem";


export default {
  components: {
    TodoItem,
  },

  computed: {
  sortedToDos () {
    return this.$store.getters.sortedToDos;
  }, 

  todos() {
      return this.$store.state.todos;
    },
}

};
</script>


<style scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

h1 {
  margin-top: 5rem;
}
</style>
