import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addTodo, addItemToList } from 'redux/actions';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

interface Props {
  open: boolean;
  listId: string;
  onClose: () => void;
}

function AddTodoForm({ open, listId, onClose }: Props) {
  const [input, setInput] = useState('');
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleSubmitTodo = (e: any) => {
    e.preventDefault();
    setInput('');
    const itemId = uuid();
    dispatch(addTodo(itemId, listId, input));
    dispatch(addItemToList(listId, itemId));
    onClose();
  };
  const handleChangeInput = (e: any) => {
    setInput(e.target.value);
  };

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="add todo">
      <DialogContent>
        <form onSubmit={handleSubmitTodo} className={classes.form}>
          <TextField
            id="add-todo"
            value={input}
            label="Add a Todo Item"
            onChange={handleChangeInput}
          />
          <Button disabled={input === ''} onClick={handleSubmitTodo}>
            Add
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    form: {
      display: 'flex',
      alignItems: 'baseline',
    },
  }),
);

export default AddTodoForm;
