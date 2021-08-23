import { Todo } from '../App/types';

export interface TodoDetails {
  title?: string;
  description?: string;
  isComplete?: boolean;
};

export interface TodoProps extends Todo {
  onError: Function;
  onSuccess: Function;
};
