function styles(componentName) {
  return `import styled from 'styled-components';
import { ${componentName}Props } from './types';

export const ${componentName} = styled.div<${componentName}Props>\`

\`;
`;
}

export default styles;
