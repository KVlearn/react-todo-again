import React,{useState} from "react";
import TextField from '@material-ui/core/TextField';
function FormsTodo({saveTodos}){

const [value,setValue]=useState('')

return(
<form
  onSubmit={(e)=>{
      console.log(value)
    e.preventDefault();
    saveTodos(value);
    setValue('');
 
}}>
<TextField 
variant="outlined"
margin="normal"
placeholder="Enter your Todo"
onChange={(e)=>setValue(e.target.value)}
value={value}
/>
</form>
);
}

export default FormsTodo;
