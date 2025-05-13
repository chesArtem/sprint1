import React, { useEffect, useRef, useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIngredientsCategory } from './burger-ingredients-category/burger-ingredients-category';
import styles from './burger-ingredients.module.css';

export const BurgerIngredients = () => {
	const [current, setCurrent] = useState('bun');

	const sauceRef = useRef(null);
	const mainRef = useRef(null);
	const bunRef = useRef(null);
	const tabContentRef = useRef(null);

	useEffect(() => {
		const tabContent = tabContentRef.current;
		if (!tabContent) return;

		const handleScroll = () => {
			if (!bunRef.current || !sauceRef.current || !mainRef.current) return;

			const containerTop = tabContent.getBoundingClientRect().top;
			const bunTop = bunRef.current.getBoundingClientRect().top - containerTop;
			const sauceTop =
				sauceRef.current.getBoundingClientRect().top - containerTop;
			const mainTop =
				mainRef.current.getBoundingClientRect().top - containerTop;
			const threshold = 50;

			if (bunTop <= threshold) {
				if (sauceTop <= threshold) {
					if (mainTop <= threshold) {
						setCurrent('main');
					} else {
						setCurrent('sauce');
					}
				} else {
					setCurrent('bun');
				}
			}
		};

		tabContent.addEventListener('scroll', handleScroll);
		return () => tabContent.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<section className={styles.section + ' pl-5 pr-5'}>
			<p className={'pt-10 pb-5 text text_type_main-large'}>Соберите бургер</p>

			<div className={styles.wrapper + ' pb-10'}>
				<Tab value='one' active={current === 'bun'} onClick={setCurrent}>
					Булки
				</Tab>
				<Tab value='two' active={current === 'sauce'} onClick={setCurrent}>
					Соусы
				</Tab>
				<Tab value='three' active={current === 'main'} onClick={setCurrent}>
					Начинки
				</Tab>
			</div>
			<div>
				<BurgerIngredientsCategory
					sauceRef={sauceRef}
					mainRef={mainRef}
					bunRef={bunRef}
					tabContentRef={tabContentRef}
				/>
			</div>
		</section>
	);
};
