"use client"
import { Todo } from '../../generated/prisma/index';
import { updateTodo } from '@/todos/helpers/todo';
import { TodoItem } from './TodoItem';
import { useRouter } from 'next/navigation';

interface TodosGridProps {
  todos?: Todo[]
}

export const TodosGrid = ({ todos = []}: TodosGridProps) => {

  const router = useRouter();

  
  const toggleTodo = async(id: string, complete: boolean) => {
    const updatedTodo = await updateTodo( id, complete );
    console.log({updatedTodo});
    router.refresh();
  }
  return (
    <div className='grid gap-2 grid-cols-1 sm:grid-cols-3'>
      {
        todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
        ))
      }
    </div>
  )
}

