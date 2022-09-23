import hooks from './hooks.mjs';
import stories from './stories.mjs";
import styles from "./styles.mjs";
import test from "./test.mjs";
import types from "./types.mjs";

function index(componentName, hooks, styles) {
  return `import React, { FC } from 'react';
${hooks ? "import { useComponentLogic } from './hooks';\n" : ''}${
    styles ? "import * as S from './styles';\n" : ''
  }import { ${componentName}Props } from './types';

export const ${componentName}: FC<${componentName}Props> = props => {
  ${hooks ? 'const logic = useComponentLogic(props);\n  ' : ''}return (
    ${styles ? `<S.${componentName}></S.${componentName}>` : '<div></div>'}
  );
};

${componentName}.defaultProps = {};

export default ${componentName};`;
};

export default {
  index,
  hooks,
  stories,
  styles,
  test,
  types,
};
