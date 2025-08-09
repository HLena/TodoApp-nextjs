import { Todo } from "@/generated/prisma"

import styles from '@/todos/components/TodoItem.module.css';
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";

interface TodoItemProp{
  todo: Todo,
  toggleTodo: (id:string, complete:boolean) => Promise<Todo|void>
}

export const TodoItem = ({todo, toggleTodo}: TodoItemProp) => {
  return (
    <div className={todo.complete ? styles.todoDone: styles.todoPending }>
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
        <div 
          className="flex p-2 rounded-md cursor-pointer" 
          onClick={ () => toggleTodo(todo.id, !todo.complete)}
        >
          {
            todo.complete
            ? <IoCheckboxOutline size={30}/>
            : <IoSquareOutline size={30}/>
          }
        </div>
        <div className="text-center sm:text:left">
          {todo.description}
        </div>
      </div>
    </div>
  )
}
