<template>
<div class="container">

<h1>Your Todo list</h1>
<todo-item/>
<todo-item/>
</div>

</template>

<script>
import TodoItem from '../components/TodoItem';

export default {
 components: {
  TodoItem, 
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
