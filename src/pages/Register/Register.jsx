import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './validation';
import { TextField, IButton } from '../../ui-kit';
import { Link } from 'react-router-dom';
import styles from './Register.module.scss';

export const Register = () => {
	const [isFocused, setIsFocused] = useState(false);
	const [isPasswordMatch, setIsPasswordMatch] = useState(false);

	const {
		register,
		watch,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	const watchAllFields = watch();

	const handleFocus = (e) => {
		const { name } = e.target;
		setIsFocused({ ...isFocused, [name]: true });
	};

	const handleBlur = (e) => {
		const { name } = e.target;

		if (watchAllFields[name] !== '') {
			setIsFocused({ ...isFocused, [name]: true });
		} else {
			setIsFocused({ ...isFocused, [name]: false });
		}
	};

	const onSubmit = (data) => {
		alert(JSON.stringify(data));
	};

	return (
		<section className={styles.register}>
			<div className={styles.content}>
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<TextField
						name='email'
						register={register}
						type='text'
						label='E-mail'
						error={errors?.email?.message}
						isRequred
						isFocused={isFocused.email}
						onFocus={handleFocus}
						onBlur={handleBlur}
					/>
					<TextField
						name='password'
						register={register}
						type='password'
						label='Введите пароль'
						error={errors?.password?.message}
						isRequred
						isFocused={isFocused.password}
						onFocus={handleFocus}
						onBlur={handleBlur}
					/>
					<TextField
						name='passwordConfirm'
						register={register}
						type='password'
						label='Подтвердите пароль'
						error={errors?.passwordConfirm?.message}
						isRequred
						isFocused={isFocused.passwordConfirm}
						onFocus={handleFocus}
						onBlur={handleBlur}
					/>

					<IButton variant='bobm' type='submit' className={styles.button}>
						Зарегистрироваться
					</IButton>
					<span>
						Уже есть аккаунт? <Link to='/login'>Войдите</Link>
					</span>
				</form>
			</div>
		</section>
	);
};
