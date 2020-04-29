export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_COMPLETE_TODO = 'TOGGLE_COMPLETE_TODO';

export function addTodo(id: string, listId: string, text: string) {
  return { type: ADD_TODO, id, listId, text };
}

export function removeTodo(id: string) {
  return { type: REMOVE_TODO, id };
}

export function toggleCompleteTodo(id: string, completed: boolean) {
  return { type: TOGGLE_COMPLETE_TODO, id, completed };
}

export const ADD_LIST = 'ADD_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';
export const UPDATE_LIST_NAME = 'UPDATE_LIST_NAME';
export const ADD_ITEM_TO_LIST = 'ADD_ITEM_TO_LIST';

export function addList(id: string, name: string, itemIds: string[]) {
  return { type: ADD_LIST, id, name, itemIds };
}

export function removeList(id: string) {
  return { type: REMOVE_LIST, id };
}

export function updateList(id: string, name: string) {
  return { type: UPDATE_LIST_NAME, id, name };
}

export function addItemToList(id: string, itemId: string) {
  return { type: ADD_ITEM_TO_LIST, itemId, id };
}
