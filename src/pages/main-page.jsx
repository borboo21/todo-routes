import styles from '../App.module.css';
import { useState } from 'react';
import { FindBlock } from '../components/find-block';
import { TodoPusher } from '../components/todo-pusher';
import { TodoList } from '../components/todo-list';
import {
	useRequestAddTodo,
	useRequestGetTodo,
	useFilterTodo,
	useFindTodo,
} from '../hooks';

export const MainPage = () => {
	const [refreshProductsFlag, setRefreshProductsFlag] = useState(false);
	const refreshProducts = () => setRefreshProductsFlag(!refreshProductsFlag);

	const { todos, setTodos } = useRequestGetTodo(refreshProductsFlag);
	const { isCreating, requestAddTodo, todoInput, setTodoInput } = useRequestAddTodo(
		refreshProducts,
		setTodos,
		todos,
	);
	const { findTodo, setFindValue } = useFindTodo(todos);
	const { setIsFilter, displayedTasks, isFilter } = useFilterTodo(findTodo);

	return (
		<>
			<div className={styles.title}>Список дел</div>
			<FindBlock
				setFindValue={setFindValue}
				setIsFilter={setIsFilter}
				isFilter={isFilter}
			/>
			<div className={styles.main}>
				<TodoList
					displayedTasks={displayedTasks}
					refreshProducts={refreshProducts}
				/>
			</div>
			<TodoPusher
				todoInput={todoInput}
				setTodoInput={setTodoInput}
				isCreating={isCreating}
				requestAddTodo={requestAddTodo}
			/>
		</>
	);
};
