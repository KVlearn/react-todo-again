import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import FormsTodo from './FormsTodo';
import ListTodo from './ListTodo';
import './App.css';

function App() {
  const [todos,setTodos]=useState([]);
  return (
    <div className="App">
       <h1>Welcome to my First App!!!</h1>
       <FormsTodo
       saveTodos={(todoValue)=>{
        const trimmedValue=todoValue.trim();
        if(trimmedValue.length > 0){
         setTodos([...todos,trimmedValue]);
        }
      }
     }/>
      <ListTodo
       todos={todos}
       deleteTodo={(id)=>{
         const newTodos= todos.filter((item,index)=> (index !== id))
         setTodos(newTodos);  
      }
    }  
       />
    </div>
  );
}

export default App;
