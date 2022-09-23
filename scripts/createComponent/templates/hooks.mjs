function hooks(componentName) {
  return `import { useState } from 'react';
import { ${componentName}Props } from './types';
export const useComponentLogic = (props: ${componentName}Props) => {
  const [state, setState] = useState(props);
  return { state };
};
`;
}

export default hooks;
