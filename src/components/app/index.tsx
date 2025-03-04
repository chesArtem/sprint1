import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Header } from '../header/header';
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients';
import { BurgerConstructor } from '../burger-constructor/burger-constructor';

export const App = () => {
	const [state, setState] = useState({
		ingredientsData: null,
		hasError: false,
		isLoading: false,
	});

	useEffect(() => {
		setState({ ...state, hasError: false, isLoading: true });
		fetch('https://norma.nomoreparties.space/api/ingredients ')
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
			})
			.then((ingredientsData) =>
				setState({ ...state, ingredientsData, isLoading: false })
			)
			.catch((error) => {
				console.error('error:' + error);
				setState({ ...state, hasError: true, isLoading: false });
			});
	}, []);

	return (
		<>
			<Header />
			{!state.isLoading && !state.hasError && state.ingredientsData != null && (
				<main className={styles.wrapper}>
					<BurgerIngredients ingredientsData={state.ingredientsData} />
					<BurgerConstructor ingredientsData={state.ingredientsData} />
				</main>
			)}
		</>
	);
};
