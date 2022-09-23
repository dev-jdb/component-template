import React, { FC } from 'react';

import * as S from './styles';
import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = ({
	size,
	primary,
	disabled,
	text,
	onClick,
	...props
}) => {
	return (
		<S.Button
			type='button'
			onClick={onClick}
			primary={primary}
			disabled={disabled}
			size={size}
			{...props}
		>
			{text}
		</S.Button>
	);
};

export default Button;
