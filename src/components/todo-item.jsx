import styles from '../App.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const TodoItem = ({ todo, onDelete, onSave, refreshProducts }) => {
	const [isEdit, setIsEdit] = useState(false);
	const [todoValue, setTodoValue] = useState(todo.title);

	const handleSave = () => {
		onSave(todo.id, todoValue);

		setIsEdit(false);
	};

	const handleDelete = () => {
		onDelete(todo.id);
	};

	return (
		<div className={styles.container} key={todo.id}>
			<div className={styles.list}>
				<input type="checkbox" className={styles.checkList}></input>
				{isEdit ? (
					<input
						className={styles.editInput}
						onChange={({ target }) => setTodoValue(target.value)}
						value={todoValue}
					></input>
				) : (
					<span className={styles.listText}>{todoValue}</span>
				)}
			</div>
			<div className={styles.listBtn}>
				{isEdit ? (
					<button className={styles.saveInput} onClick={handleSave}>
						Save
					</button>
				) : (
					<div className={styles.listBtn}>
						<Link to={'/'}>
							<button
								className={styles.todoBtn}
								onClick={() => handleDelete()}
							>
								{' '}
								Delete
							</button>
						</Link>
						<button
							className={styles.todoBtn}
							onClick={() => setIsEdit((prev) => !prev)}
						>
							Correct
						</button>
					</div>
				)}
				<div className={styles.backBtn}>
					<Link to={'/'}>
						<button className={styles.todoBtn}>Назад</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
