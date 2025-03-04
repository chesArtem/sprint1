import styles from './header.module.css';
import {
	BurgerIcon,
	ListIcon,
	Logo,
	ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

export const Header = () => {
	return (
		<header className={styles.header + ' pb-4 pt-4 '}>
			<div className={styles.wrapper}>
				<nav className={styles.navigation}>
					<a className={styles.navigation_link_active + ' p-5 mr-2'} href='./'>
						<BurgerIcon className={'mr-2'} type='primary' />
						<p className='text text_type_main-default'>Конструктор</p>
					</a>
					<a className={styles.navigation_link + ' p-5'} href='./'>
						<ListIcon className={'mr-2'} type='secondary' />
						<p className='text text_type_main-default'>Лента заказов</p>
					</a>
				</nav>
				<Logo />
				<div className={styles.navigation_person}>
					<a className={styles.navigation_link + ' p-5'} href='./'>
						<ProfileIcon className={'mr-2'} type='secondary' />
						<p className='text text_type_main-default'>Личный кабинет</p>
					</a>
				</div>
			</div>
		</header>
	);
};
