import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { toggleCompleteTodo } from 'redux/actions';
import * as Types from 'typings';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

interface Props {
  value: Types.TodoItem;
}

function TodoItem({ value }: Props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id, text, completed } = value;

  const handleToggleComplete = () => {
    dispatch(toggleCompleteTodo(id, completed));
  };

  return (
    <ListItem key={id} dense button onClick={handleToggleComplete}>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={completed}
          disableRipple
          inputProps={{ 'aria-labelledby': id }}
        />
      </ListItemIcon>
      <ListItemText id={id} primary={text} />
    </ListItem>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  }),
);

export default TodoItem;
