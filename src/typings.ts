export interface TodoItem {
  id: string;
  listId: string;
  text: string;
  completed: boolean;
}

export interface TodoList {
  id: string;
  name: string;
  itemIds: string[];
}

export interface TodoItems {
  [id: string]: TodoItem;
}

export interface TodoLists {
  [listId: string]: TodoList;
}

export interface RootState {
  todoItems: TodoItems;
  todoLists: TodoLists;
}
