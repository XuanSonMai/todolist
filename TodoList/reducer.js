import storage from './utils/storage.js'

const init = {todos:storage.get(),
  filter:'all',
  filters:{
    all:()=> true,
    active: ele=> !ele.completed,
    completed: ele => {
     return ele.completed
    }
   
  },
  startEdit:null
}

const actions = {
  add ({todos},title){
 
    if(title)
    {   
      todos.push({title,completed:false})
      storage.set(todos)
    }
    
  },
  toggle ({todos}, index)
  {
    
    const todo = todos[index]
   
    todo.completed = !todo.completed
    storage.set(todos)
    
  },
  destroy ({todos},index)
  {
      todos.splice(index)
      storage.set(todos)
  },

  toggleAll({todos},completed)
  {
    todos.forEach(todo=> todo.completed =completed )
    storage.set(todos)
  },
  switchFilter(state,type)
  {       
   state.filter = type
  },
  clearcompleted(state)
  { 
     state.todos = state.todos.filter(state.filters.active)
     storage.set(state.todos)
  } ,
  startEdit(state,index)
  {
    state.startEdit = index
   
  },
  eventEdit(state,title)
  {

    if(state.startEdit!== null)
    
    {
      if(title)
      {
        state.todos[state.startEdit].title = title
       
        storage.set(state.todos)
      }
      else
      {
        this.destroy(state,state.startEdit)
      }
      state.startEdit = null
    

     
    }
  },
  cancelEdit(state)
  {
    state.startEdit = null
  }
}

export default function reducer(state=init,action , args)
{  
  //console.log(...args)
  actions[action] && actions[action](state,...args)
  return state
}