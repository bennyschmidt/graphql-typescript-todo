import React from 'react';

import { useQuery } from '@apollo/client';

import { Loading, TodoList } from '..';
import { GET_TODOS } from './queries';
import { Todos } from './types';

import './styles.css';

const App = () => {
  const { loading, data } = useQuery<Todos>(GET_TODOS);

  return (
    <div className="App">
      <h3>Todos</h3>
      {
        loading
          ? <Loading />
          : <TodoList todos={data!.todos} />
      }
    </div>
  );
};

export default App;
