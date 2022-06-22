import React from 'react';
import styles from './IButton.module.scss';

export const IButton = ({
	variant = 'outlined',
	type,
	onCLick,
	className,
	children,
}) => {
	return (
		<button
			className={`${styles.button} ${
				variant === 'outlined' ? styles.outlined : styles.bomb
			} ${className}`}
			type={type}
			onClick={onCLick}
		>
			{children}
		</button>
	);
};
