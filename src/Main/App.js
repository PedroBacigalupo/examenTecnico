import React, { useState } from "react";
import { Button, List, ListItemButton, ListItemText, TextField } from "@mui/material";
import './app.css';

function App() {
  const [ list, setList ] = useState([]);
  const [ valueInput, setValueInput ] = useState('');
  const [ through, setThrough ] = useState([]);

  const addToList = () => {
    setList([
      ...list,
      valueInput,
    ])

    setThrough([
      ...through,
      false,
    ])

    setValueInput('')
  }

  const onChangeInput = (event) => {
    setValueInput(event.target.value)
  }

  const onClickItem = (item) => {
    const newThrough = [...through];
    newThrough[item] = !newThrough[item];
    setThrough(newThrough);
  }

  return (
    <>
      <TextField id="standard-basic" label="Ingrese una tarea" variant="outlined" type="text" onChange={onChangeInput} value={valueInput} />
      <Button onClick={addToList} variant="contained" dark>Agregar</Button>
      <List>
        {
          list && list.map((item, i) => {
            return (
              <ListItemButton key={ i } onClick={ () => onClickItem(i) }>
                <ListItemText className={ through[i] ? 'text-through' : '' } primary={ item }/>
              </ListItemButton>
            )
          })
        }
      </List>
    </>
  );
}

export default App;
