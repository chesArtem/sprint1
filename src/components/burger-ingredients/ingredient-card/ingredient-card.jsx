import styles from './ingredient-card.module.css';
import {
	Counter,
	CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { useDrag } from 'react-dnd';
import { useSelector } from 'react-redux';
import {
	getConstructorBun,
	getConstructorIngredients,
} from '../../../services/burger-constructor/slice';

export const IngredientCard = (props) => {
	const constructorIngredients = useSelector(getConstructorIngredients);
	const constructorBun = useSelector(getConstructorBun);

	const [, dragRef] = useDrag({
		type: 'ingredient',
		item: props.el,
		collect: (monitor) => ({
			isDrag: monitor.isDragging(),
		}),
	});

	const count =
		props.el.type === 'bun'
			? constructorBun && constructorBun._id === props.el._id
				? 2
				: 0
			: constructorIngredients.filter((item) => item._id === props.el._id)
					.length;

	return (
		<div
			className={styles.ingredient + ' mb-8'}
			aria-hidden='true'
			ref={dragRef}
			onClick={props.onClick}>
			{count > 0 && <Counter count={count} size='default' extraClass='m-1' />}
			<img
				className={'pl-4 pr-4 pb-1'}
				src={props.el.image}
				alt={props.el.name}
			/>
			<p className={styles.price + ' text text_type_digits-default mb-1'}>
				<span>{props.el.price}</span>
				<CurrencyIcon type='primary' />
			</p>
			<p className={styles.name + ' text text_type_main-default'}>
				{props.el.name}
			</p>
		</div>
	);
};
