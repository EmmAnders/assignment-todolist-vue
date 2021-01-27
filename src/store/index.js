import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        id:1,
        title: "Clean the house",
        name: "Andreas",
      },

      {
        id:2,
        title: "Pick up c",
        name: "Sofia",
    
      },

      {
        id:3,
        title: "Book meeting with X",
        name: "Gabrielle",

      
      },

      {
        id:4,
        title: "Book ticket to L",
        name: "David",
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
    }
 
 
  },
 
  modules: {
  }
})
