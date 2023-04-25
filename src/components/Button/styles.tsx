import styled from 'styled-components';

import { ButtonProps } from './types';

export const btnColors = {
	blue: '#1b116e',
	white: '#ffffff',
	green: '#55bd90',
	greenLight: '#6bedb5',
}

const btnSizes = {
  padding: {
    small: '.5rem 1.5rem',
    medium: '.625rem 1.625rem',
    large: '.75rem 1.625rem',
  },
};

export const Button = styled.button<ButtonProps>`
  border-radius: 3px;
  border: 0;
  cursor: pointer;
  display: inline-block;
  font-size: 15px;
  font-weight: 700;
  font-weight: bold;
  line-height: 1;

  background-color: ${props => (props.color ?? props.primary ? btnColors.greenLight : btnColors.blue)};
  color: ${props => (props.primary ? btnColors.blue : btnColors.white)};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  padding: ${({ size = 'medium' }) => btnSizes.padding[size]};
  &:hover {
    background-color: ${props => (props.primary ? btnColors.green : btnColors.greenLight)};
  }
  &:active {
    border: solid 2px #1b116e;
  }
`;
