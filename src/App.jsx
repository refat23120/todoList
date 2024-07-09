import { useState , useEffect } from "react";
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
const App = () => {
 
 const [todos,setTodos] = useState([]);
 const [input,setInput] = useState('');

 function persistTodos(newList){
     localStorage.setItem('todos',JSON.stringify({todos:newList}));
 }

 const handleTodos = (newTodo)=>{
  if(newTodo !== ""){
      persistTodos([...todos,newTodo])
      setTodos([...todos,newTodo]);
   } 
 }

const deleteTodos = (index)=>{
  const newTodos = todos.filter((todo,id)=>{
    if(id!==index){
      return todo;
    }
  });
  persistTodos(newTodos);
  setTodos(newTodos);
}

const editTodos = (index)=>{
  todos.map((todo,id)=>{
    if(id===index){
      setInput(todo);
      deleteTodos(index);
    }
  });
}

useEffect(()=>{
  const todos = JSON.parse(localStorage.getItem('todos'));
  if(todos){
    setTodos(todos.todos);
  }
},[]);

  return (
    <>
       <TodoInput 
        input={input}
        setInput={setInput}
        handleTodos={handleTodos}
        />

       <TodoList
        deleteTodos={deleteTodos}
        editTodos={editTodos}
        todos={todos}
        />
    </>
  )
}

export default App
