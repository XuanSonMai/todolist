import html from '../core.js'
import {connect} from '../store.js'



function ToDoItem ({todo,index,startEdit})
{   
     
       console.log(startEdit)
      return html`
        
                <li class="${todo.completed && 'completed'} ${startEdit===index && 'editing'}">
                        <div class="view">
                                <input 
                                class="toggle" 
                                type="checkbox" 
                                 ${todo.completed && 'checked'}
                                 onchange="dispatch('toggle',${index})">                               
                                
                                 <label ondblclick="dispatch('startEdit',${index})">${todo.title}</label>
                                <button class="destroy" 
                                onclick = "dispatch('destroy', ${index})"
                                ></button>
                        </div>
                        <input class="edit" value="${todo.title}" 
                        onkeyup="event.keyCode === 13 && dispatch('eventEdit',this.value.trim()) ||
                        event.keyCode===27 && dispatch('cancelEdit')"
                        onblur="dispatch('eventEdit',this.value.trim())">
                </li>

        `
}

export default connect()(ToDoItem)


