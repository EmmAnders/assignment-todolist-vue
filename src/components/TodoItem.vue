<template>
  <li class="item-wrapper" :class="{ completed: todo.done }">
    <div class="flex-container">
      <div class="flex-item-1">
        <p class="name">{{ todo.name }}'s todo</p>
      </div>
      <div class="flex-item-2">
        <h1>{{ todo.title }}</h1>
      </div>
      <div class="flex-item-3">
        <button class="check-btn" @click.prevent="markComplete">
          <div v-if="todo.done">
            <img src="../assets/rotate.svg" alt="regret" />
          </div>
          <div v-else>
            <img src="../assets/check.svg" alt="mark todo as done" />
          </div>
        </button>

        <button @click.prevent="deleteTodo">
          <div><img src="../assets/trash.svg" alt="remove todo" /></div>
        </button>
      </div>
    </div>
    <div class="flex-item-4">
      <p>Added {{ todo.date }}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: ["todo"],

  methods: {
    deleteTodo() {
      this.$store.commit("deleteTodo", this.todo);
    },

    markComplete() {
      this.$store.commit("markComplete", this.todo);
    },
  },
};
</script>

<style scoped>
.item-wrapper {
  border-radius: 20px;
  background: #ecf0f3;
  box-shadow: 10px 10px 17px #cbced1, -10px -10px 17px #ffffff;
  margin: 0 auto;
  margin-bottom: 2rem;
  list-style-type: none;
}

.flex-container {
  display: flex;
  flex-direction: column;
}

.flex-item-1 {
  text-align: left;
  padding: 0.5rem;
  margin-top: 0.5rem;
  margin-left: 2rem;
}

.name {
  font-size: 0.8rem;
  display: inline-block;
  width: 110px;
  color: white;
  background: #fc783f;
  padding: 0.4rem;
  margin-bottom: 0px;
  border-radius: 50px;
  text-align: center;
}

.flex-item-2 {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;
}

.flex-item-2 h1 {
  font-size: 1.6rem;
  margin: 0;
  padding-top: 0.7rem;
  text-align: center;
}
.flex-item-3 {
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.flex-item-3 button {
  background: #ecf0f3;
  border: none;
  width: 400px;
  margin: 15px auto;
  border-radius: 25px;
  background: #ecf0f3;
  box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #ffffff;
  border: none;
  padding: 0.5rem;
}

.flex-item-4 {
  padding-bottom: 0.5rem;
}

.flex-item-4 p {
  font-size: 0.6rem;
  text-align: center;
  padding: 0px;
}

.check-btn {
  margin-right: 2rem;
}

button:hover {
  border-radius: 60px;
  box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #ffffff;
  cursor: pointer;
}

button:active {
  border-radius: 60px;
  box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #ffffff;
}

.completed {
  border-radius: 20px;
  box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #ffffff;
}

.completed h1 {
  text-decoration: 6px solid line-through;
}

@media (max-width: 576px) {
  .item-wrapper {
    width: 300px;
  }

  .flex-item-1 {
    text-align: center;
    margin: 0;
    padding: 1rem;
  }
  .flex-item-2 {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .flex-item-2 p {
    font-size: 0.8rem;
    padding: 0.5rem 3rem;
    display: block;
  }

  .flex-item-3 {
    margin: 0 auto;
  }

  .flex-item-3 button {
    background: #ecf0f3;
    border: none;
    width: 250px;
    margin: 15px auto;
  }

  .flex-item-3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>