import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { boolean, object, string } from "yup";

export async function GET(request: NextRequest) {

  const searchParams = request.nextUrl.searchParams;
  const skip = Number(searchParams.get('skip') ?? 1);
  const take = Number(searchParams.get('take') ?? 10);

  try {
    if(isNaN(take))
      return NextResponse.json({message: 'Take should be a number'}, {status: 400})
    if(isNaN(skip))
      return NextResponse.json({message: 'Skip should be a number'}, {status: 400})

    const todos = await prisma.todo.findMany({
      skip,
      take
    });
    
    return NextResponse.json(todos);
  } catch (error) {
    return NextResponse.json(
      { error },
      { status: 500 }
    )
  }
}

const postSchema = object({
  description: string().required(),
  complete: boolean().optional().default(false)
})

export async function POST(request: NextRequest) {
  
  try {
    const { complete, description } = await postSchema.validate(await request.json());

    const todoCreated = await prisma.todo.create({ data: {
      complete,
      description
    }});
    
    return NextResponse.json(todoCreated);

  } catch (error) {

    return NextResponse.json(
      { error },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  
  try {
    await prisma.todo.deleteMany({ where: { complete: true }});
    
    return NextResponse.json('Borrados');

  } catch (error) {

    return NextResponse.json(
      { error },
      { status: 400 }
    )
  }
}