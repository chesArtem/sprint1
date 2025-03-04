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
	const [modal, setModal] = useState(false);

	const activeModal = () => {
		setModal(true);
	};
	const closeModal = () => {
		setModal(false);
	};

	return (
		<>
			<div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
				<div className={'pl-8'}>
					<ConstructorElement
						type='top'
						isLocked={true}
						text='Краторная булка N-200i (верх)'
						price={200}
						thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
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
						text='Краторная булка N-200i (низ)'
						price={200}
						thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
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

			{modal && (
				<Modal close={closeModal}>
					<ModalDetails />
				</Modal>
			)}
		</>
	);
};

BurgerConstructor.propTypes = {
	ingredientsData: shape({
		data: arrayOf(dataType.isRequired).isRequired,
	}).isRequired,
};
