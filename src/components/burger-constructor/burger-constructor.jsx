import {
	Button,
	ConstructorElement,
	CurrencyIcon,
	DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';
import { useCallback, useMemo, useState } from 'react';
import { Modal } from '../../modal/modal';
import { ModalDetails } from '../../modal/modal-details/modal-details';
import { ConstructorElementEmpty } from './constructor-element-empty';
import { useDispatch, useSelector } from 'react-redux';
import {
	addItem,
	getConstructorBun,
	getConstructorIngredients,
	removeItem,
} from '../../services/burger-constructor/slice';
import { useDrop } from 'react-dnd';
import { WrapperDragElement } from './wrapper-drag-element';
import { createOrder } from '../../services/order-details/slice';

export const BurgerConstructor = () => {
	const [isModalOpen, setModalOpen] = useState(false);
	const constructorIngredients = useSelector(getConstructorIngredients);
	const constructorBun = useSelector(getConstructorBun);
	const dispatch = useDispatch();

	const handleOrderClick = useCallback(() => {
		if (!constructorBun) return;

		const ingredientIds = [
			constructorBun._id,
			...constructorIngredients.map((item) => item._id),
			constructorBun._id,
		];

		dispatch(createOrder(ingredientIds));
		setModalOpen(true);
	}, [dispatch, constructorBun, constructorIngredients]);

	const closeModal = () => {
		setModalOpen(false);
	};

	const [, dropTarget] = useDrop({
		accept: 'ingredient',
		drop: (item) => {
			dispatch(addItem(item));
		},
	});

	const removeIngredient = useCallback(
		(item) => {
			dispatch(removeItem(item));
		},
		[dispatch]
	);

	const totalPrice = useMemo(() => {
		const bunPrice = constructorBun ? constructorBun.price * 2 : 0;
		const itemsPrice = constructorIngredients.reduce(
			(acc, item) => acc + item.price,
			0
		);
		return bunPrice + itemsPrice;
	}, [constructorBun, constructorIngredients]);

	return (
		<section
			className={styles.section + ' pt-25 pr-4 pb-10 pl-5'}
			ref={dropTarget}>
			<div className={styles.wrapperList}>
				<div className={'pl-8'}>
					{constructorBun ? (
						<ConstructorElement
							type={'top'}
							isLocked={true}
							text={constructorBun.name + ' (верх)'}
							price={constructorBun.price}
							thumbnail={constructorBun.image}
						/>
					) : (
						<ConstructorElementEmpty type={'top'} isLocked={true} />
					)}
				</div>
				<ul className={styles.list + ' mt-1 mb-1 pl-2 pr-4'}>
					{constructorIngredients.length === 0 ? (
						<li className={styles.item + ' mb-4'}>
							<DragIcon type='primary' />
							<ConstructorElementEmpty />
						</li>
					) : (
						constructorIngredients.map((el, index) => {
							return (
								<WrapperDragElement
									key={el.uuid}
									el={el}
									index={index}
									removeIngredient={removeIngredient}
								/>
							);
						})
					)}
				</ul>
				<div className={'pl-8  mb-2'}>
					{constructorBun ? (
						<ConstructorElement
							type={'bottom'}
							isLocked={true}
							text={constructorBun.name + ' (низ)'}
							price={constructorBun.price}
							thumbnail={constructorBun.image}
						/>
					) : (
						<ConstructorElementEmpty type={'bottom'} isLocked={true} />
					)}
				</div>
			</div>

			<div className={styles.order + ' mt-10'}>
				<p className='text text_type_digits-medium mr-10'>
					<span>{totalPrice}</span>
					<CurrencyIcon type='primary' />
				</p>
				<Button
					htmlType='button'
					type='primary'
					size='medium'
					onClick={handleOrderClick}>
					Оформить заказ
				</Button>
			</div>

			{isModalOpen && (
				<Modal close={closeModal}>
					<ModalDetails />
				</Modal>
			)}
		</section>
	);
};
