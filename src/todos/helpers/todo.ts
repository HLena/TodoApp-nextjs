
import { Todo } from "@/generated/prisma";
// import { revalidatePath } from "next/cache";

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

    // revalidatePath('/dashboard/rest-todos');

    return await response.json();
    
  } catch (error) {
    console.error('Error updating todo:', error);
    throw error;
  }

}

export async function createTodo(description: string): Promise<Todo> {
  const body = { description };

  try {
    const response = await fetch(`/api/todos`,
      {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        }
      });

    if(!response.ok){
      throw new Error(`Failed to create a new todo`);
    }

    // revalidatePath('/dashboard/rest-todos');

    return await response.json();
    
  } catch (error) {
    console.error('Error creating todo:', error);
    throw error;
  }

}

export async function deleteCompletedTodos(): Promise<void> {
  try {
    const response = await fetch('/api/todos', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    // revalidatePath('/dashboard/rest-todos');

    return await response.json();
  } catch (error) {
    console.error('Error deleting todo:', error);
    throw error;
  }
}