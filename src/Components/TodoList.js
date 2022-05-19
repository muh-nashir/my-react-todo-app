import react from 'react'
import TodoList from './TodoList'
import TodoItem from './TodoItem'
import Footer from './Footer'

const TodoList = (props) => {

  return (
    <div className="todo-list">
        <Header title={props.title} />
        <ul className="list-group list-group-flush">
            {props.items.map(item => (
                <TodoItem item={item} />
            ))}
        </ul>
        <Footer>{TodoItem.length}</Footer>
    </div>
  )
}

export default App;
