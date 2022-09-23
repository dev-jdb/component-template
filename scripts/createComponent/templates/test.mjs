function test(componentName) {
  return `import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import ${componentName} from './';

describe('${componentName}', () => {
  test('${componentName} renders correctly', () => {
    render(<${componentName}>UPDATE ME</${componentName}>);
    expect(screen.getByText('UPDATE ME')).toBeInTheDocument();
  });
});
`;
}

export default test;
