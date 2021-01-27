import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isDone: false,
    todos: [
      {
        id:1,
        title: "Clean the house",
        name: "Andreas",
        date: new Date(2020, 0, 28, 10, 33, 30, 0),
      },

      {
        id:2,
        title: "Pick up c",
        name: "Sofia",
        date: new Date(2020, 0, 24, 10, 33, 30, 0),
    
      },

      {
        id:3,
        title: "Book meeting with X",
        name: "Gabrielle",
        date: new Date(2020, 0, 28, 10, 33, 30, 0),

      
      },

      {
        id:4,
        title: "Book ticket to L",
        name: "David",
        date: new Date(2020, 0, 5, 10, 33, 30, 0),
      },

    ],
  },
  
  getters:{

  },

  actions: {

  },

  mutations: {
    addNewTodo(state, todoToAdd){
      state.todos.unshift(todoToAdd);
    },

    deleteTodo(state, todoToDelete){
      state.todos = state.todos.filter((todo) => todoToDelete !== todo);
    },

    toggleCheck(){
    this.isDone = !this.isDone; 
    console.log(this.isDone);
    }
 
 
  },
 
  modules: {
  }
})
