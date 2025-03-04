import { dataType } from '../utils/data-type';
import styles from './order.module.css';

export const Order = (props) => {
	return (
		<div className={styles.wrapper + ' p-10 pb-15'}>
			<p className={styles.title + ' text text_type_main-large'}>
				Детали ингредиента
			</p>
			<img
				className={'mb-4'}
				src={props.card.image_large}
				alt={props.card.name}
			/>
			<p className='text text_type_main-medium mb-8'>
				{props.card.name}
			</p>
			<div className={styles.infoWrapper}>
				<div className={styles.info + ' mr-5'}>
					<p className={'text text_type_main-default mb-2'}>Калории,ккал</p>
					<p className={'text text_type_main-default'}>{props.card.calories}</p>
				</div>
				<div className={styles.info + ' mr-5'}>
					<p className={'text text_type_main-default mb-2'}>Белки, г</p>
					<p className={'text text_type_main-default'}>{props.card.proteins}</p>
				</div>
				<div className={styles.info + ' mr-5'}>
					<p className={'text text_type_main-default mb-2'}>Жиры, г</p>
					<p className={'text text_type_main-default'}>{props.card.fat}</p>
				</div>
				<div className={styles.info}>
					<p className={'text text_type_main-default mb-2'}>Углеводы, г</p>
					<p className={'text text_type_main-default'}>
						{props.card.carbohydrates}
					</p>
				</div>
			</div>
		</div>
	);
};
Order.propTypes = {
	card: dataType.isRequired,
};
