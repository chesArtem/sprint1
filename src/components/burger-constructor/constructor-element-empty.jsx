import styles from './burger-constructor.module.css';

export const ConstructorElementEmpty = (props) => {
	return (
		<div
			className={
				props.type === 'top'
					? styles.element_empty_top
					: props.type === 'bottom'
					? styles.element_empty_bottom
					: styles.element_empty
			}>
			<p>{props.isLocked ? 'добавьте булку' : 'добавьте ингредиент'}</p>
		</div>
	);
};
