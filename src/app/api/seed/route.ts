import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

const todos = [
  {
    description: 'Complete project documentation',
    complete: false,
  },
  {
    description: 'Review pull requests',
    complete: true,
  },
  {
    description: 'Update dependencies',
    complete: false,
  },
  {
    description: 'Write unit tests',
    complete: false,
  },
  {
    description: 'Deploy to staging environment',
    complete: true,
  },
  {
    description: 'Fix bug in user authentication',
    complete: false,
  },
  {
    description: 'Optimize database queries',
    complete: false,
  },
  {
    description: 'Create user onboarding flow',
    complete: true,
  },
  {
    description: 'Set up monitoring and logging',
    complete: false,
  },
  {
    description: 'Prepare presentation for stakeholders',
    complete: false,
  },
];

export async function GET() {
  try {
    await prisma.todo.deleteMany({});
    
    const createTodos = await prisma.todo.createMany({
      data: todos,
      skipDuplicates: true
    });
    
    
    return NextResponse.json({
      message: `Created ${createTodos.count} todos successfully!`,
      count: createTodos.count
    });
  } catch (error) {
    console.error('Error seeding database:', error);
    return NextResponse.json(
      { error: 'Failed to seed database' },
      { status: 500 }
    );
  }
}