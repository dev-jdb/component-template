import styled from 'styled-components';

import { ButtonProps } from './types';

const btnSizes = {
  padding: {
    small: '.5rem 1.5rem',
    medium: '.625rem 1.625rem',
    large: '.75rem 1.625rem',
  },
};

export const Button = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  padding: ${({ size = 'medium' }) => btnSizes.padding[size]};
  color: ${props => (props.primary ? '#1b116e' : '#ffffff')};
  background-color: ${props => (props.color ?? props.primary ? '#6bedb5' : '#1b116e')};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  &:hover {
    background-color: ${props => (props.primary ? '#55bd90' : '#6bedb5')};
  }
  &:active {
    border: solid 2px #1b116e;
  }
`;
