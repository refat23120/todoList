import PropTypes from 'prop-types';
import TodoCard from "./TodoCard"


const TodoList = (props) => {
  const todos = props.todos;
  return (
    <ul className="main">
      {
        todos.map((todo,todoId)=>{
          return(
             <TodoCard deleteTodos={props.deleteTodos}
             editTodos={props.editTodos}
              index={todoId} dis={todo} key={todoId}/>
          );
        })
      }
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  deleteTodos: PropTypes.func.isRequired,
  editTodos: PropTypes.func.isRequired
};

export default TodoList