"use client"
import { Todo } from '../../generated/prisma/index';
import * as api from '@/todos/helpers/todo';
import TodoItem from './TodoItem';

interface TodosGridProps {
  todos?: Todo[]
}

export const TodosGrid = ({ todos = []}: TodosGridProps) => {
  return (
    <div className='grid gap-2 grid-cols-1 sm:grid-cols-3'>
      {
        todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={api.updateTodo}/>
        ))
      }
    </div>
  )
}
