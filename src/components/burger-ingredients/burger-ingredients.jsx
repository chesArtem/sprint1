import React, { useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIngredientsCategory } from './burger-ingredients-category/burger-ingredients-category';
import { shape, arrayOf } from 'prop-types';
import { dataType } from '../../utils/data-type';

export const BurgerIngredients = (props) => {
	const [current, setCurrent] = useState('one');
	return (
		<>
			<p className={'pt-10 pb-5 text text_type_main-large'}>Соберите бургер</p>

			<div style={{ display: 'flex' }} className={'pb-10'}>
				<Tab value='one' active={current === 'one'} onClick={setCurrent}>
					One
				</Tab>
				<Tab value='two' active={current === 'two'} onClick={setCurrent}>
					Two
				</Tab>
				<Tab value='three' active={current === 'three'} onClick={setCurrent}>
					Three
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
