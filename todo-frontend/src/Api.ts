import axios from 'axios';
import { Todo } from './Types';

const API_URL = 'http://localhost:8000/api/todos/';

export const fetchTodos = async (): Promise<Todo[]> => {
    const response = await axios.get<Todo[]>(API_URL);
    return response.data;
};

export const createTodo = async (title: string): Promise<Todo> => {
    const response = await axios.post<Todo>(API_URL, { title, completed: false });
    return response.data;
};

export const updateTodo = async (todo: Todo): Promise<Todo> => {
    const response = await axios.put<Todo>(`${API_URL}${todo.id}/`, todo);
    return response.data;
};

export const deleteTodo = async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}${id}/`);
};
