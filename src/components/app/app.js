import React, { useEffect } from 'react';
import styles from './index.module.scss';
import { Header } from '../header/header';
import { useDispatch } from 'react-redux';
import { loadIngredients } from '../../services/burger-ingredients/slice';
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients';
import { BurgerConstructor } from '../burger-constructor/burger-constructor';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadIngredients());
	}, []);

	return (
		<>
			<Header />
			<main className={styles.wrapper}>
				<DndProvider backend={HTML5Backend}>
					<BurgerIngredients />
					<BurgerConstructor />
				</DndProvider>
			</main>
		</>
	);
};
