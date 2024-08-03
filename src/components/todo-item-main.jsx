import styles from '../App.module.css';
import { Link } from 'react-router-dom';

export const TodoItemMain = ({ todo }) => {
	const truncateText = (text, maxLength) => {
		if (text.length > maxLength) {
			return text.substring(0, maxLength) + '...';
		}
		return text;
	};

	return (
		<div className={styles.containerMain} key={todo.id}>
			<div className={styles.list}>
				<input type="checkbox" className={styles.checkList}></input>
				<span className={styles.listText}>
					{' '}
					<Link to={`tasks/${todo.id}`}>{truncateText(todo.title, 20)}</Link>
				</span>
			</div>
		</div>
	);
};
