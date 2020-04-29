import { combineReducers } from 'redux';
import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_COMPLETE_TODO,
  ADD_LIST,
  REMOVE_LIST,
  UPDATE_LIST_NAME,
  ADD_ITEM_TO_LIST,
} from 'redux/actions';
import * as Types from 'typings';

interface TodoItemActionType {
  id: string;
  listId: string;
  text: string;
  completed: boolean;
  type: 'ADD_TODO' | 'REMOVE_TODO' | 'TOGGLE_COMPLETE_TODO';
}

function todoItemReducer(
  state = {} as Types.TodoItems,
  action: TodoItemActionType,
): Types.TodoItems {
  const { type, id, listId, text, completed } = action;

  let updatedItems = { ...state };

  switch (type) {
    case ADD_TODO:
      updatedItems[id] = {
        id,
        listId,
        text,
        completed: false,
      };
      return updatedItems;
    case TOGGLE_COMPLETE_TODO:
      const targetItem = updatedItems[id];
      updatedItems[id] = { ...targetItem, completed: !completed };
      return updatedItems;
    case REMOVE_TODO:
      delete updatedItems[id];
      return updatedItems;
    default:
      return state;
  }
}

interface TodoListActionType {
  id: string;
  name: string;
  itemIds: string[];
  itemId: string;
  type: 'ADD_LIST' | 'REMOVE_LIST' | 'UPDATE_LIST_NAME' | 'ADD_ITEM_TO_LIST';
}

function todoListReducer(
  state = {} as Types.TodoLists,
  action: TodoListActionType,
): Types.TodoLists {
  const { type, id, name, itemIds, itemId } = action;

  let updatedLists = { ...state };

  switch (type) {
    case ADD_LIST:
      updatedLists[id] = { id, name, itemIds };
      return updatedLists;
    case REMOVE_LIST:
      delete updatedLists[id];
      return updatedLists;
    case UPDATE_LIST_NAME:
      const selectedList = updatedLists[id];
      updatedLists[id] = { ...selectedList, name };
      return updatedLists;
    case ADD_ITEM_TO_LIST:
      const selectedListTwo = updatedLists[id];
      const updatedSelectedList = {
        ...selectedListTwo,
        itemIds: [...selectedListTwo.itemIds, itemId],
      };
      updatedLists[id] = updatedSelectedList;
      return updatedLists;
    default:
      return state;
  }
}

const reducers = combineReducers({
  todoItems: todoItemReducer,
  todoLists: todoListReducer,
});

export default reducers;
