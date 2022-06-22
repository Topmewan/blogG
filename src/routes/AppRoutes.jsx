import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Register, Login } from '../pages';
export const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/register' element={<Register />} />
			<Route path='/login' element={<Login />} />
		</Routes>
	);
};
