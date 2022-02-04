import React from 'react';
import { useDispatch } from 'react-redux';
import { goRecipesAhead, goRecipesBack } from '../../../../store/pagination/paginationSlice';
import { Button } from './Paginator.styles';

const Paginator = ({ children }) => {
	const dispatch = useDispatch();

	const onBack = () => dispatch(goRecipesBack());
	const onForward = () => dispatch(goRecipesAhead());

	return (
		<>
			<Button onClick={onBack}>❮</Button>
				{children}
			<Button onClick={onForward}>❯</Button>
		</>
	);
};

export default Paginator;