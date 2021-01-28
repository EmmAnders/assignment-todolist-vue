<template>
  <div>
    <ul>
      <todo-item v-for="(todo, i) in sortedToDos" :key="i" :todo="todo" />
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
    sortedToDos() {
      return this.$store.getters.sortedToDos;
    },
  },
};
</script>

<style scoped>
ul {
  max-width: 500px;
  margin: 2rem auto;
  padding: 0px;
}
</style>