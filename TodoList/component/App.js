
import {connect} from '../store.js' 
import html from '../core.js'
import Header from './Header.js'
import TodoList from './ToDoList.js'
import Footer from './footer.js'


function App ({todos,filter,startEdit})
{

    
      return html`  
           
      <section class="todoapp">
          ${Header()}
          ${todos.length > 0 && TodoList()}
          ${todos.length > 0 && Footer({todos})}
         
      </section>
        `
}

export default connect()(App)


