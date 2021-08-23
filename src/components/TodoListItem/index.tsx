import React, { useState } from 'react';

import { useMutation } from '@apollo/client';

import { Todo } from '../App/types';
import { SAVE_TODO } from './queries';
import { TodoDetails, TodoProps } from './types';

import './styles.css';

const TodoListItem = ({
  onError,
  onSuccess,

  ...item
}: TodoProps) => {
  const [todo, setTodo] = useState<Todo>(item);

  const [saveTodo, { error, data }] = useMutation<
    { saveTodo: Todo },
    { todo: TodoDetails }
  >(SAVE_TODO, {
    variables: {
      todo
    }
  });

  const onChangeTodo = (details: TodoDetails, save?: boolean) => () => {
    const todoDetails = {
      ...todo,
      ...details
    };

    setTodo(todoDetails);

    if (save) saveTodo();
  };

  if (error) onError(error);

  if (data?.saveTodo) onSuccess();

  const {
    id,
    title,
    description,
    isComplete
  } = todo;

  return (
    <li key={id} className="TodoListItem">
      <input
        type="checkbox"
        checked={isComplete}
        onChange={onChangeTodo(
          {
            isComplete: !isComplete
          },
          false
        )}
      />
      <h5>
        {title}
      </h5>
      <h6>
        {description}
      </h6>
    </li>
  );
};

export default TodoListItem;
