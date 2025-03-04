import React from 'react';
import { BurgerIngredientsComponent } from '../burger-ingredients-component/burger-ingredients-component';
import styles from './burger-ingredients-category.module.css';
import { arrayOf } from 'prop-types';
import { dataType } from '../../../utils/data-type';

export const BurgerIngredientsCategory = (props) => {
	return (
		<div className={styles.ingredients}>
			<p className='text text_type_main-medium'>Булки</p>
			<BurgerIngredientsComponent
				sortType={'bun'}
				ingredientsData={props.ingredientsData}
			/>

			<p className='text text_type_main-medium'>Соусы</p>
			<BurgerIngredientsComponent
				sortType={'sauce'}
				ingredientsData={props.ingredientsData}
			/>

			<p className='text text_type_main-medium'>Начинки</p>
			<BurgerIngredientsComponent
				sortType={'main'}
				ingredientsData={props.ingredientsData}
			/>
		</div>
	);
};

BurgerIngredientsCategory.propTypes = {
	ingredientsData: arrayOf(dataType.isRequired).isRequired,
};
