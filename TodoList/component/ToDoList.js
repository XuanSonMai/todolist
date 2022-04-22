import html from '../core.js'
import {connect} from '../store.js'
import ToDoItem from './ToDoItem.js'



function TodoList ({todos,filters,filter})
{   
       console.log(filters)
      return html`       
                <section class="main">
                     <input id="toggle-all" 
                        class="toggle-all" 
                        type="checkbox"
                        onchange = "dispatch('toggleAll',this.checked)"
                       ${todos.every(ele=>filters.completed(ele))  && 'checked'}                                             
                >
                
                <label for="toggle-all">Mark all as complete</label>
                <ul class="todo-list">
                       ${todos.filter(filters[filter]).
                         map((todo,index)=> ToDoItem({todo,index}))}
                </ul>
                </section>
        `
}

export default connect()(TodoList)


