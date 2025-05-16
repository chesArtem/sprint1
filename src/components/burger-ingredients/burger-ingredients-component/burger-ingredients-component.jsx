import React, { useState } from 'react';
import styles from './burger-ingredients-component.module.css';
import { arrayOf, string } from 'prop-types';
import { dataType } from '../../../utils/data-type';
import { Modal } from '../../../modal/modal';
import { Order } from '../../order/order';
import { IngredientCard } from '../ingredient-card/ingredient-card';
import { useDispatch, useSelector } from 'react-redux';
import {
	clearIngredient,
	getCard,
	setIngredient,
} from '../../../services/ingredient-details/slice';

export const BurgerIngredientsComponent = (props) => {
	const [isModalOpen, setModalOpen] = useState({
		card: null,
		active: false,
	});

	const ingredientDetails = useSelector(getCard);

	const dispatch = useDispatch();

	const activeModal = (el) => {
		setModalOpen({
			active: true,
		});
		dispatch(setIngredient(el));
	};
	const closeModal = () => {
		setModalOpen({
			active: false,
		});
		dispatch(clearIngredient());
	};

	return (
		<div className={styles.wrapper + ' pt-6 pb-2 pl-4 pr-4'}>
			{props.ingredients
				.filter((el) => el.type === props.sortType)
				.map((el) => (
					<IngredientCard
						key={el._id}
						el={el}
						onClick={() => activeModal(el)}
					/>
				))}
			{isModalOpen.active && (
				<Modal close={closeModal}>
					<Order card={ingredientDetails} />
				</Modal>
			)}
		</div>
	);
};

BurgerIngredientsComponent.propTypes = {
	ingredients: arrayOf(dataType.isRequired).isRequired,
	sortType: string.isRequired,
};
