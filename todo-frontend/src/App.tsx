import React, { useEffect, useState } from 'react';
import { fetchTodos, createTodo, updateTodo, deleteTodo } from './Api';
import { Todo } from './Types';

const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodoTitle, setNewTodoTitle] = useState('');

    useEffect(() => {
        fetchTodos().then(setTodos);
    }, []);

    const handleAddTodo = () => {
        if (newTodoTitle.trim()) {
            createTodo(newTodoTitle).then((todo) => {
                setTodos([...todos, todo]);
                setNewTodoTitle('');
            });
        }
    };

    const handleToggleComplete = (todo: Todo) => {
        const updatedTodo = { ...todo, completed: !todo.completed };
        updateTodo(updatedTodo).then((newTodo) => {
            setTodos(todos.map((t) => (t.id === newTodo.id ? newTodo : t)));
        });
    };

    const handleDeleteTodo = (id: number) => {
        deleteTodo(id).then(() => {
            setTodos(todos.filter((todo) => todo.id !== id));
        });
    };

    return (
        <div>
            <h1>Todo App</h1>
            <input
                type="text"
                value={newTodoTitle}
                onChange={(e) => setNewTodoTitle(e.target.value)}
                placeholder="New todo"
            />
            <button onClick={handleAddTodo}>Add</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleToggleComplete(todo)}
                        />
                        {todo.title}
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
