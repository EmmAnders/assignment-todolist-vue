import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        id:"0",
        title: "Clean the house",
        name: "Andreas",
        date: new Date(2020, 0, 28, 10, 33, 30, 0),
        done: false,
      },

      {
        id:"1",
        title: "Pick up c",
        name: "Sofia",
        date: new Date(2020, 0, 24, 10, 33, 30, 0),
        done: false
    
      },

      {
        id:"2",
        title: "Book meeting with X",
        name: "Gabrielle",
        date: new Date(2020, 0, 28, 10, 33, 30, 0),
        done: false,
      },

      {
        id:"3",
        title: "Book ticket to L",
        name: "David",
        date: new Date(2020, 0, 5, 10, 33, 30, 0),
        done: false,
      },

    ],
  },
  
  actions: {
   
  },

  
  getters: {
    sortedToDos(state) {
      return state.todos.slice().sort((a,b) => {
        if(!a.done && b.done) return -1;
        if(a.done && b.done) return 0;
        if(a.done && !b.done) return 1;
      });
    }
  },
 

  mutations: {
    addNewTodo(state, todo){
      state.todos.unshift(todo);
    },

    deleteTodo(state, todoToDelete){
      state.todos = state.todos.filter(todo => todoToDelete !== todo);
    },


    markComplete(state, todo) {
      todo.done = !todo.done
    }

},

  modules: {
  }
})
