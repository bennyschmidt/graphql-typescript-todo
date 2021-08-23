import React, { useState } from 'react';

import { Todo, Todos  } from '../App/types';
import { TodoListItem } from '..';
import { Error } from './types';

import './styles.css';

const TodoList = ({ todos }: Todos) => {
  const [error, setError] = useState<string>();
  const [notification, setNotification] = useState<string>();

  const onError = (error: Error) => setError(error?.message);
  const onSuccess = () => setNotification('Item updated!');

  return (
    <>
      { error && <div>{error}</div> }
      { notification && <div>{notification}</div> }
      <ul className="TodoList">
        {
          todos.map((todo: Todo) => (
            <TodoListItem
              {...todo}
              key={todo.title}
              onError={onError}
              onSuccess={onSuccess}
            />
          ))
        }
      </ul>
    </>
  );
};

export default TodoList;
