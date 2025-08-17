'use server';

import { Todo } from "@/generated/prisma";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";


export const toggleTaskCompletion = async(id: string, complete: boolean): Promise<Todo> => {
  const todo = await prisma.todo.findFirst({ where: {
    id
  }});

  if(!todo){
    throw (`Todo with id: ${id} doensn't exist`);
  }

  const updatedTodo = await prisma.todo.update({
     where:{ id },
     data: { complete }
  });

  revalidatePath('/dashboard/server-todos');
  return updatedTodo;

}

export const addTodo = async (description: string, userId: string) => {
  try {

    const todoCreated = await prisma.todo.create({ data: {
      description,
      userId
    }});

    revalidatePath('/dashboard/server-todos');

    return todoCreated;

  } catch (error) {

    return ({ 
      error, 
      message: 'Error creating a new todo'
    })
  }
}

export const deleteCompletedTodos = async () => {
  try {
    const deletedTodos = await prisma.todo.deleteMany({ where: {
      complete: true
    }});

    revalidatePath('/dashboard/server-todos');

    return deletedTodos
    
  } catch (error) {
    return ({ 
      error, 
      message: 'Error creating a new todo'
    })
  }
}