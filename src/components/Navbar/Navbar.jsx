import React from 'react';
import { Link } from 'react-router-dom';
import { IButton } from '../../ui-kit';
import styles from './Navbar.module.scss';

export const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<div className={styles.container}>
				<Link to='/'>LOGO BLYAT</Link>

				<div className={styles.actions}>
					<Link to='/login'>
						<IButton variant='outlined'>Войти</IButton>
					</Link>
					<Link to='/register'>
						<IButton variant='bomb'>Зарегистрироваться</IButton>
					</Link>
				</div>
			</div>
		</div>
	);
};
