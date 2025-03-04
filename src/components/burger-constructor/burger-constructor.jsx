import {
	Button,
	ConstructorElement,
	CurrencyIcon,
	DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';
import { dataType } from '../../utils/data-type';
import { shape, arrayOf } from 'prop-types';
import { useState } from 'react';
import { Modal } from '../../modal/modal';
import { ModalDetails } from '../../modal/modal-details/modal-details';

export const BurgerConstructor = (props) => {
	const [isModalOpen, setModalOpen] = useState(false);
	const bun = props.ingredientsData.data.find((el) => el.type === 'bun');
	const activeModal = () => {
		setModalOpen(true);
	};
	const closeModal = () => {
		setModalOpen(false);
	};

	return (
		<section className={styles.section + ' pt-25 pr-4 pb-10 pl-5'}>
			<div className={styles.wrapperList}>
				<div className={'pl-8'}>
					<ConstructorElement
						type='top'
						isLocked={true}
						text={bun.name + ' (верх)'}
						price={bun.price}
						thumbnail={bun.image}
					/>
				</div>
				<ul className={styles.list + ' mt-1 mb-1 pl-2 pr-4'}>
					{props.ingredientsData.data
						.filter((el) => el.type != 'bun')
						.map((el) => {
							return (
								<li className={styles.item + ' mb-4'} key={el._id}>
									<DragIcon type='primary' />
									<ConstructorElement
										text={el.name}
										price={el.price}
										thumbnail={el.image}
									/>
								</li>
							);
						})}
				</ul>
				<div className={'pl-8 mb-2'}>
					<ConstructorElement
						type='bottom'
						isLocked={true}
						text={bun.name + ' (низ)'}
						price={bun.price}
						thumbnail={bun.image}
					/>
				</div>
			</div>
			<div className={styles.order + ' mt-10'}>
				<p className='text text_type_digits-medium mr-10'>
					<span>310</span>
					<CurrencyIcon type='primary' />
				</p>
				<Button
					htmlType='button'
					type='primary'
					size='medium'
					onClick={activeModal}>
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

BurgerConstructor.propTypes = {
	ingredientsData: shape({
		data: arrayOf(dataType.isRequired).isRequired,
	}).isRequired,
};
