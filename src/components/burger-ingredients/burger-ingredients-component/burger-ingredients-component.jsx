import React, { useState } from 'react';
import styles from './burger-ingredients-component.module.css';
import {
	Counter,
	CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { arrayOf } from 'prop-types';
import { dataType } from '../../../utils/data-type';
import { Modal } from '../../../modal/modal';
import { ModalOrder } from '../../../modal/modal-order/modal-order';

export const BurgerIngredientsComponent = (props) => {
	const [modal, setModal] = useState({
		card: null,
		active: false,
	});

	const activeModal = (el) => {
		setModal({
			card: el,
			active: true,
		});
	};
	const closeModal = () => {
		setModal({
			card: null,
			active: false,
		});
	};

	return (
		<div className={styles.wrapper + ' pt-6 pb-2 pl-4 pr-4'}>
			{props.ingredientsData
				.filter((el) => el.type === props.sortType)
				.map((el) => (
					<div
						key={el._id}
						className={styles.ingredient + ' mb-8'}
						aria-hidden='true'
						onClick={() => activeModal(el)}>
						<Counter count={1} size='default' extraClass='m-1' />
						<img className={'pl-4 pr-4 pb-1'} src={el.image} alt={el.name} />
						<p className={styles.price + ' text text_type_digits-default mb-1'}>
							<span>{el.price}</span>
							<CurrencyIcon type='primary' />
						</p>
						<p className={styles.name + ' text text_type_main-default'}>
							{el.name}
						</p>
					</div>
				))}
			{modal.active && (
				<Modal close={closeModal}>
					<ModalOrder card={modal.card} />
				</Modal>
			)}
		</div>
	);
};

BurgerIngredientsComponent.propTypes = {
	ingredientsData: arrayOf(dataType.isRequired).isRequired,
};
