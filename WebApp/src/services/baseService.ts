import { NextApiRequest } from 'next';

const DATA_SOURCE_URL = 'https://jsonplaceholder.typicode.com/todosffe';

export class HttpService {
  async GET(request: NextApiRequest) {
    try {
      const res = await fetch(DATA_SOURCE_URL);
      if (res.ok) {
        return await res.json();
      }
      return res.json();
    } catch (error) {
      return { error: 'Erro interno do servidor' };
    }
  }
}

export const todoService = new HttpService();
