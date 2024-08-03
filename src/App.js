import './index.css';
import styles from './App.module.css';
import { MainPage } from './pages/main-page';
import { Routes, Route } from 'react-router-dom';
import { TodoPage } from './pages/todo-page';

export const App = () => {
	return (
		<div className={styles.app}>
			<Routes>
				<Route path={'/'} element={<MainPage />}></Route>
				<Route path={'tasks/:id'} element={<TodoPage />}></Route>
			</Routes>
		</div>
	);
};
