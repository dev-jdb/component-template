function stories(componentName) {
  return `import React from 'react';
import { Story, Meta } from '@storybook/react';

import ${componentName} from './';
import { ${componentName}Props } from './types';

export default {
  title: '${componentName}',
  component: ${componentName},
  argTypes: {},
} as Meta<typeof ${componentName}>;

const Template: Story<${componentName}Props> = (args) => <${componentName} {...args} />;

export const Default = Template.bind({});
Default.args = {};
`;
}

export default stories;
