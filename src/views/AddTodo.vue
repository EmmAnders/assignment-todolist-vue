<template>
  <div class="addtodo">
    <todo-form />
    
  </div>
</template>

<script>
import TodoForm from '../components/TodoForm';

export default {
  name: "addtodo",
  components: {
    TodoForm,
   
  },
};
</script>

<style scoped>

</style>