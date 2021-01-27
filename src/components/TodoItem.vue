<template>
  <div class="todo-item">
    <p class="name">{{ todo.name }}'s todo | Added On: {{todo.date}}</p>

    <div class="name-wrapper">
      <div class="card-title">
        <p>{{ todo.title }}</p>
      </div>
      <div class="buttons">
        <button @click.prevent="completeTodo" class="check-button">
          <img src="../assets/check.svg" alt="" />
        </button>
        <button  @click.prevent="deleteTodo" class="trash-button">
        <img src="../assets/trash.svg" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["todo"],

  methods: {
    deleteTodo() {
      this.$store.commit("deleteTodo", this.todo);
    },
    completeTodo() {
    this.$store.commit("toggleCheck", this.todo);
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
  font-style: italic;
  margin: 0px;
  padding-left: 1rem;
  padding-top: 0.2rem;
  font-size: 0.8rem;

  display: inline-block;
  color: #526af2;
}

.name-wrapper {
  display: flex;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 0px;
}

.card-title p {
  font-weight: bold;
  font-size: 1.8rem;
}
button {
  border-radius: 60px;
  background: #ecf0f3;
  box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #ffffff;
  border: none;
  padding: 1rem;
}

.buttons {
  padding: 0px;
  margin: 0px;
  display: flex;
  align-items: center;
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

.done{
  background-color: pink; 
}
</style>