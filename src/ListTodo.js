import React from "react";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import { Checkbox } from "@material-ui/core";
function ListTodo({todos, deleteTodo}){
return(
<List>
<p>Here is the list</p>
{todos.map((item,index)=>
(
    <ListItem key={index.toString()} dense button>
    <Checkbox tabIndex={-1} disableRipple />
          {item}
          <ListItemSecondaryAction>
          <IconButton
        onClick={(e)=>{deleteTodo(index);}}
        >
        <DeleteIcon />
        </IconButton>
        </ListItemSecondaryAction>
        </ListItem> 
)
    )}
    </List>
);
}
export default ListTodo;