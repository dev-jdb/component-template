function types(dirName) {
  return `import { TestId } from '../../types';

export type ${dirName}Props = {} & TestId;
`;
}

export default types