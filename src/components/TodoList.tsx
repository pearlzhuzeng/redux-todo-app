import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import * as Types from 'typings';

import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';

interface Props {
  value: Types.TodoList;
}

function TodoList({ value }: Props) {
  const classes = useStyles();
  const { name } = value;

  return (
    <List
      className={classes.root}
      aria-labelledby={name}
      subheader={
        <ListSubheader component="div" id={name}>
          {name}
        </ListSubheader>
      }
    ></List>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  }),
);

export default TodoList;
