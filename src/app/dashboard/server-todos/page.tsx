export const dynamic = 'force-dynamic';
export const revalidate = 0;

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
      <h1 className="text-xl text-center font-bold mb-4">Server Todos</h1>
      <div className="mb-4">
        <NewTodo/>
      </div>
      <TodosGrid todos={todos}/>
    </>
  )
}

export default RestTodos