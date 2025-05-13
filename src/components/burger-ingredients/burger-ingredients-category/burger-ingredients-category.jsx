import React from 'react';
import { BurgerIngredientsComponent } from '../burger-ingredients-component/burger-ingredients-component';
import styles from './burger-ingredients-category.module.css';
import { dataType } from '../../../utils/data-type';
import { useSelector } from 'react-redux';
import { getIngredients } from '../../../services/burger-ingredients/slice';

export const BurgerIngredientsCategory = (props) => {
	const ingredients = useSelector(getIngredients);

	return (
		<div className={styles.ingredients} ref={props.tabContentRef}>
			<p ref={props.bunRef} className='text text_type_main-medium'>
				Булки
			</p>
			<BurgerIngredientsComponent sortType={'bun'} ingredients={ingredients} />

			<p ref={props.sauceRef} className='text text_type_main-medium'>
				Соусы
			</p>
			<BurgerIngredientsComponent
				sortType={'sauce'}
				ingredients={ingredients}
			/>

			<p ref={props.mainRef} className='text text_type_main-medium'>
				Начинки
			</p>
			<BurgerIngredientsComponent sortType={'main'} ingredients={ingredients} />
		</div>
	);
};

BurgerIngredientsCategory.propTypes = {
	bunRef: dataType.isRequired,
	mainRef: dataType.isRequired,
	sauceRef: dataType.isRequired,
	tabContentRef: dataType.isRequired,
};
