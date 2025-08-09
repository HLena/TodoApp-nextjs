import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";

export const metadata = {
  title: 'Rest TODOS',
  description: 'Rest TODOS'
}

const RestTodos = async () => {

  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc'} });
  
  return (
    <>
      <div className="mb-4">
        <NewTodo/>
      </div>
      <TodosGrid todos={todos}/>
    </>
  )
}

export default RestTodos