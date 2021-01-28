<template>
  <form @submit.prevent="createTodo" class="todo-wrapper">
    <div class="fields">
      <div class="author">
        <img src="../assets/smile.svg" alt="" />
        <input type="text" placeholder="This To-Do Belongs to.." required v-model="name" />
      </div>
      <div class="todo-text">
        <img src="../assets/pen.svg" alt="" />
        <input type="text" placeholder="The To-Do.." required v-model="title" />
      </div>
    </div>
    <button class="add-button">ADD</button>
  </form>
</template>

<script>
export default {
  name: "addtodo",
  components: {},
  data() {
    return {
      title: "",
      name: "",
      date: null,
      done: false,
    };
  },


  methods: {
    createTodo() {
      let dateTime = new Date;
      let newTodo = {
        id: this.id,
        title: this.title,
        name: this.name,
        date: dateTime,
        done: this.done, 
      };
      
      this.$store.commit("addNewTodo", newTodo);
      this.$router.push({ name: "TodoList" });
    },  
  },
};


</script>

<style scoped>
.todo-wrapper {
  max-width: 600px;
  margin: 0 auto;
  margin-top: 5%;
}

.fields {
  width: 100%;
  padding: 75px 5px 5px 5px;
}
.fields input,
textarea {
  border: none;
  outline: none;
  background: none;
  font-size: 18px;
  color: #242f6b;
  padding: 30px 10px 30px 5px;
}

.author,
.todo-text {
  margin-bottom: 30px;
  border-radius: 25px;
  box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #ffffff;
}

.fields img {
  height: 22px;
  margin: 0 10px -3px 25px;
}

::placeholder {
  color: #242f6b;
}

.add-button {
  outline: none;
  border: none;
  cursor: pointer;
  width: 100%;
  height: 60px;
  border-radius: 30px;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  background: #526af2;
  box-shadow: 3px 3px 8px #b1b1b1, -3px -3px 8px #ffffff;
  transition: 0.5s;
}
.add-button:hover {
  background: #526af2ae;
}

.add-button:active {
  background: #526af2ae;
}

@media (max-width: 576px) {

.todo-wrapper {
  max-width: 350px;
  margin: 0 auto;
}

.fields {
  width: 100%;
  padding: 0px;
}
  
}


</style>