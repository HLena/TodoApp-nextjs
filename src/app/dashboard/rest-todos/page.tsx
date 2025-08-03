import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos";

export const metadata = {
  title: 'Rest TODOS',
  description: 'Rest TODOS'
}

const RestTodos = async () => {

  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc'} });
  
  return (
    <TodosGrid todos={todos}/>
  )
}

export default RestTodos