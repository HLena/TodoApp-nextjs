import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { boolean, object, string } from "yup";

interface ParamsProp {
  params : Promise <{id: string}>
}

export async function GET(request: NextRequest, { params }: ParamsProp) {

  const { id } = await params;

  try { 
    const todo = await prisma.todo.findFirst({
      where: {
        id
      }
    });

    console.log('TODO', todo)

    if(!todo)
      return NextResponse.json({message: `Todo with id ${id} doesn't exits.`});
    
    return NextResponse.json(todo);

  } catch (error) {

    return NextResponse.json(
      { error },
      { status: 500 }
    )
  }
}

const putSchema = object({
  description: string().optional(),
  complete: boolean().optional()
})

export async function PUT(request: NextRequest, { params }: ParamsProp) {

  const { id } = await params;

  try { 
    const todo = await prisma.todo.findFirst({
      where: {
        id
      }
    });

    if(!todo)
      return NextResponse.json({message: `Todo with id ${id} doesn't exits.`});

    const body = await request.json();
    const { complete, description, ...rest } = await putSchema.validate(await body);

    const updatedTodo = await prisma.todo.update({
      where: { id },
      data : { complete, description }
    })
    
    return NextResponse.json(updatedTodo);

  } catch (error) {

    return NextResponse.json(
      { error },
      { status: 500 }
    )
  }
}