import PropTypes from 'prop-types';
const TodoInput = (props) => {
  const {handleTodos,input,setInput} = props
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    handleTodos(input);
    setInput("");
  }
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} 
         onChange={(e)=>setInput(e.target.value)}
         placeholder="enter todo"
        />
        <button type="submit">submit</button>
      </form>
    </header>
  )
}
TodoInput.propTypes = {
  handleTodos: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired
}

export default TodoInput