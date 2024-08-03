import { useParams } from 'react-router-dom';
import { useRequestDeleteTodo, useRequestEditTodo, useRequestGetTodo } from '../hooks';
import { TodoItem } from '../components/todo-item';

export const TodoPage = (refreshProducts) => {
	const params = useParams();
	const { todos, setTodos } = useRequestGetTodo();
	const { requestDeleteTodo } = useRequestDeleteTodo(refreshProducts, setTodos, todos);
	const { requestEditTodo } = useRequestEditTodo(refreshProducts);
	const filterTodo = todos.filter((todo) => todo.id === params.id);
	return filterTodo.map((todo) => (
		<>
			<TodoItem
				onDelete={requestDeleteTodo}
				onSave={requestEditTodo}
				key={todo.id}
				todo={todo}
				refreshProducts={refreshProducts}
			/>
		</>
	));
};
