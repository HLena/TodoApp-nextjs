import { headers } from 'next/headers';
import { comments } from './comments';

export async function GET() {
  return Response.json(comments)
}

export async function POST(reques:Request) {
  const comment = await reques.json();
  const newComment = {
    id: comments.length + 1,
    text: comment.text
  }

  comments.push(newComment);

  return new Response(
    JSON.stringify(newComment),
    {
      headers: {"Content-Type": "application/json"},
      status: 201
    }
  );
}

