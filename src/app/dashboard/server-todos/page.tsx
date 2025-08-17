export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: 'Rest TODOS',
  description: 'Rest TODOS'
}

const RestTodos = async () => {
  
  const session = await getServerSession(authOptions);

  if(!session) redirect('/api/auth/signin');

  const todos = await prisma.todo.findMany({ 
    where: {
      userId: session.user!.id
    },
    orderBy: { description: 'desc'}
  });

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