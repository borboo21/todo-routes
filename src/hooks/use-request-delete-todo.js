import { useState } from 'react';

export const useRequestDeleteTodo = (refreshProducts) => {
	const [isDeleting, setIsDeleting] = useState(false);

	const requestDeleteTodo = (id) => {
		setIsDeleting(true);
		fetch(`http://localhost:3005/todos/${id}`, {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.finally(() => setIsDeleting(false));
	};
	return {
		isDeleting,
		requestDeleteTodo,
	};
};
