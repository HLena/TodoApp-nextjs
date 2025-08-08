'use server';

import { Todo } from "@/generated/prisma";
import { revalidatePath } from "next/cache";

export async function updateTodo(id: string, complete: boolean): Promise<Todo> {
  const body = { complete };

  try {
    const response = await fetch(`/api/todos/${id}`,
      {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        }
      });

    if(!response.ok){
      throw new Error(`Failed to update the todo with the id: ${id}`);
    }

    revalidatePath('/dashboard/rest-todos');

    return await response.json();
    
  } catch (error) {
    console.error('Error updating todo:', error);
    throw error;
  }

}