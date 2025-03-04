import { createPortal } from 'react-dom';
import styles from './modal.module.css';
import { func } from 'prop-types';
import { useEffect } from 'react';

const modalRoot = document.getElementById('root-modal');

export const Modal = (props) => {
	useEffect(() => {
		const clickEsc = (e) => {
			if (e.key === 'Escape') {
				props.close()
			}
		}

		document.addEventListener('keydown', clickEsc, false);

		return () => {
			document.removeEventListener('keydown', clickEsc, false);
		};
	}, [props.close]);

	return createPortal(
		<div className={styles.modal}>
			<div className={styles.fog} onClick={props.close} aria-hidden='true' />
			<div className={styles.wrapper}>
				<div
					className={styles.close}
					onClick={props.close}
					aria-hidden='true'
				/>
				{props.children}
			</div>
		</div>,
		modalRoot
	);
};

Modal.propTypes = { onClose: func };
