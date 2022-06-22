import React from 'react';
import { AppRoutes } from '../../routes/AppRoutes';
import { Navbar } from '../index';
import styles from './App.module.scss';
export const App = () => {
	return (
		<div className={styles.wrapper}>
			{/* Navbar */}
			<Navbar />
			{/* Main */}
			<main className={styles.main}>
				<AppRoutes />
			</main>
		</div>
	);
};
