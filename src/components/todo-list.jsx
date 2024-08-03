import styles from '../App.module.css';
import { useRequestGetTodo } from '../hooks';
import { TodoItemMain } from './todo-item-main';

export const TodoList = ({ displayedTasks, refreshProducts, ...rest }) => {
	const { isLoading } = useRequestGetTodo();

	return (
		<div className={styles.todoList}>
			{isLoading ? (
				<div className={styles.loader}></div>
			) : (
				displayedTasks.map((todo) => <TodoItemMain key={todo.id} todo={todo} />)
			)}
		</div>
	);
};
