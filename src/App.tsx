import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addList } from 'redux/actions';
import * as Types from 'typings';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import TodoList from 'components/TodoList';

function App() {
  const dispatch = useDispatch();
  const todoListsState = useSelector(
    (state: Types.RootState) => state.todoLists,
  );
  const todoLists = Object.values(todoListsState);

  const handleAddList = () => {
    const id = uuid();
    dispatch(addList(id, 'New List', []));
  };

  return (
    <div>
      <Typography variant="h1">The Board of Todos</Typography>
      <Button onClick={handleAddList}>Add List</Button>
      {todoLists.map((todoList) => (
        <TodoList key={todoList.id} value={todoList} />
      ))}
    </div>
  );
}

export default App;
