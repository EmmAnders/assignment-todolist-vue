<template>
<section class="todo-item" :class="{completed: todo.done}">
<p class="name">{{ todo.name }}'s todo </p> 
<br>
<div class="content-wrapper">
<h2>{{ todo.title }}</h2>

<div class="button-wrapper">
  <button @click.prevent="markComplete">
    <div v-if="todo.done"><img src="../assets/rotate.svg" alt="regret" /></div>
    <div v-else><img src="../assets/check.svg" alt="Done"/></div>
  </button>

  <button  @click.prevent="deleteTodo">
    <div><img src="../assets/trash.svg" alt="" /></div>
  </button>
</div>
</div>
<p class="time">Added On: {{todo.date}}</p>
</section>
</template>
<script>

export default {
  props: ["todo"],


  methods: {
    deleteTodo() {
      this.$store.commit("deleteTodo",this.todo);
    },

    markComplete() {
    this.$store.commit('markComplete', this.todo);
    // this.todo.done = !this.todo.done
		},
  },
};
</script>

<style scoped>
.todo-item {
  min-width: 500px;
  max-width: 800px;
  max-height: 150px;
  border-radius: 40px;
  background: #ecf0f3;
  box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #ffffff;
  margin: 1.5rem 0px;
  padding: 1rem;
}

.name {
  margin: 0px;
  font-size: 0.8rem;
  display: inline-block;
  color: #526af2;
}

.content-wrapper{
  display: flex;
  justify-content: space-between; 
}

.time {
  font-size: 0.5rem;
  text-align: center;
}

button {
  border-radius: 60px;
  background: #ecf0f3;
  box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #ffffff;
  border: none;
  padding: 1rem;
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

li{
  list-style-type: none;
}

.completed {
  border-radius: 25px;
  box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #ffffff;
  cursor: pointer;
}
.completed h2{
  text-decoration: line-through;
}


</style>