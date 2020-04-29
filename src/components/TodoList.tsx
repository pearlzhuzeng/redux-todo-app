import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import * as Types from 'typings';

import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import Button from '@material-ui/core/Button';
import AddTodoForm from 'components/AddTodoForm';
import TodoItem from 'components/TodoItem';

interface Props {
  value: Types.TodoList;
}

function TodoList({ value }: Props) {
  const classes = useStyles();
  const { id: listId, name } = value;
  const [addingTodo, setAddingTodo] = useState(false);
  const todoItemsState = useSelector(
    (state: Types.RootState) => state.todoItems,
  );

  const todoItems = Object.values(todoItemsState);

  const handleAddTodo = () => {
    setAddingTodo(true);
  };

  const handleDoneAddTodo = () => {
    setAddingTodo(false);
  };

  return (
    <>
      <List
        className={classes.root}
        aria-labelledby={name}
        subheader={
          <ListSubheader component="div" id={name}>
            {name}
          </ListSubheader>
        }
      >
        <Button onClick={handleAddTodo}>Add Todo</Button>
        {todoItems.map((item) => (
          <TodoItem value={item} key={item.id} />
        ))}
      </List>
      <AddTodoForm
        open={addingTodo}
        listId={listId}
        onClose={handleDoneAddTodo}
      />
    </>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  }),
);

export default TodoList;
