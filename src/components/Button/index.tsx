import React, { FC } from 'react';

import * as S from './styles';
import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = ({ children, size, primary, text, ...props }) => {
  return (
    <S.Button type='button' primary={primary} size={size} {...props}>
      {text}
    </S.Button>
  );
};

export default Button;
