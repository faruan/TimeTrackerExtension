import { NextResponse } from 'next/server';

const DATA_SOURCE_URL = 'https://jsonplaceholder.typicode.com/todos';

const API_KEY: string = process.env.DATA_API_KEY as string;

//Como se tivesse criando uma API que se conecta com o mongo
export async function GET() {
  const res = await fetch('https://data.mongodb-api.com/...', {
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY,
    },
  });
  const data = await res.json();

  return NextResponse.json({ data });
}

export async function GET({}) {
  const res = await fetch(DATA_SOURCE_URL);

  const todos: Todo[] = await res.json();

  return NextResponse.json(todos);
}

export async function POST(request: Request) {
  const { userId, title }: Partial<Todo> = await request.json();

  if (!userId || !title)
    return NextResponse.json({ message: 'Missing required data' });

  const res = await fetch(DATA_SOURCE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': API_KEY,
    },
    body: JSON.stringify({
      userId,
      title,
      completed: false,
    }),
  });

  const newTodo: Todo = await res.json();

  return NextResponse.json(newTodo);
}
