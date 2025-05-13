import styles from './burger-constructor.module.css';
import {
	ConstructorElement,
	DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { moveItem } from '../../services/burger-constructor/slice';

export const WrapperDragElement = ({ el, index, removeIngredient }) => {
	const dispatch = useDispatch();
	const ref = useRef(null);

	const [, drag] = useDrag({
		type: 'constructorElement',
		item: () => ({ index }),
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});

	const [, drop] = useDrop({
		accept: 'constructorElement',
		hover: (draggedItem) => {
			if (!ref.current) {
				return;
			}

			const dragIndex = draggedItem.index;
			const hoverIndex = index;

			if (dragIndex === hoverIndex) {
				return;
			}

			dispatch(moveItem({ dragIndex, hoverIndex }));

			draggedItem.index = hoverIndex;
		},
	});

	drag(drop(ref));
	return (
		<li ref={ref} className={styles.item + ' mb-4'} key={el._id}>
			<DragIcon type='primary' />
			<ConstructorElement
				text={el.name}
				price={el.price}
				thumbnail={el.image}
				handleClose={() => removeIngredient(el._id)}
			/>
		</li>
	);
};
