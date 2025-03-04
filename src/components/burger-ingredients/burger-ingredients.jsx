import React, { useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIngredientsCategory } from './burger-ingredients-category/burger-ingredients-category';
import { shape, arrayOf } from 'prop-types';
import { dataType } from '../../utils/data-type';
import styles from './burger-ingredients.module.css'

export const BurgerIngredients = (props) => {
	const [current, setCurrent] = useState('one');
	return (
		<>
			<p className={'pt-10 pb-5 text text_type_main-large'}>Соберите бургер</p>

			<div className={styles.wrapper + ' pb-10'}>
				<Tab value='one' active={current === 'one'} onClick={setCurrent}>
					Булки
				</Tab>
				<Tab value='two' active={current === 'two'} onClick={setCurrent}>
					Соусы
				</Tab>
				<Tab value='three' active={current === 'three'} onClick={setCurrent}>
					Начинки
				</Tab>
			</div>

			<BurgerIngredientsCategory ingredientsData={props.ingredientsData.data} />
		</>
	);
};

BurgerIngredients.propTypes = {
	ingredientsData: shape({
		data: arrayOf(dataType.isRequired).isRequired,
	}).isRequired,
};
