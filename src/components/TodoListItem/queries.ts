import { gql } from '@apollo/client';

export const SAVE_TODO = gql`
  mutation {
    SaveTodo(todo: TodoDetails) {
      saveTodo(todo: todo) {
        ...todo
      }
    }
  }
`;
