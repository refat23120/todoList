import { FaEdit,FaTrash } from "react-icons/fa";
import PropTypes from 'prop-types';

const TodoCard = (props) => {
     
  return (
      <li className="todoItem">
        {props.dis}
        <div className="todoItem">
           <button className="todo-list-btn" onClick={()=>props.editTodos(props.index)}>
               <FaEdit/>
           </button>    

            <button className="todo-list-btn" onClick={()=>props.deleteTodos(props.index)}>
                 <FaTrash/>
            </button>
        </div>
       
      </li>
  )
}

TodoCard.propTypes = {
  dis: PropTypes.string.isRequired,
  deleteTodos: PropTypes.func.isRequired,
  editTodos: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};

export default TodoCard