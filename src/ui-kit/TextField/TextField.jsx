import React, { useState } from 'react';
import { ReactComponent as Visible } from '../../assets/visible-svgrepo-com.svg';
import { ReactComponent as Invisible } from '../../assets/invisible-svgrepo-com.svg';
import styles from './TextField.module.scss';

export const TextField = ({
	name,
	register,
	type,
	label,
	error,
	isRequred,
	isFocused,
	onBlur,
	onFocus,
	className,
}) => {
	const [isShowPw, setIsShowPw] = useState(false);

	const handleChangeType = (type) => {
		if (type === 'text') {
			return type;
		}

		if (type === 'password') {
			return isShowPw ? 'text' : 'password';
		}
	};

	const handleShowPw = () => setIsShowPw((prev) => !prev);
	return (
		<div
			className={`${styles.formfield} ${
				isFocused && styles.active
			} ${className}`}
		>
			{type === 'text' && (
				<>
					<label className={styles.label} htmlFor={name}>
						{label}
						{isRequred && <span className={styles.required}> *</span>}
					</label>

					<input
						className={`${styles.input} ${isFocused && styles.active}`}
						name={name}
						{...register(name)}
						type={handleChangeType(type)}
						onBlur={onBlur}
						onFocus={onFocus}
					/>
					{error && <div className={styles.errorMessage}>{error}</div>}
				</>
			)}

			{type === 'password' && (
				<>
					<label className={styles.label} htmlFor={name}>
						{label}
						{isRequred && <span className={styles.required}> *</span>}
					</label>

					<input
						className={`${styles.input} ${isFocused ? styles.active : ''}`}
						name={name}
						{...register(name)}
						type={handleChangeType(type)}
						onBlur={onBlur}
						onFocus={onFocus}
					/>
					<div className={styles.icons} onClick={handleShowPw}>
						{isShowPw ? (
							<Visible className={styles.icon} />
						) : (
							<Invisible className={styles.icon} />
						)}
					</div>
					{error && <div className={styles.errorMessage}>{error}</div>}
				</>
			)}
		</div>
	);
};
