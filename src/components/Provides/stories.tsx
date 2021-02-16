import { Story, Meta } from '@storybook/react/types-6-0'

import Provides, { ProvidesProps } from '.'
import items from './mock'

export default {
  title: 'Provides',
  component: Provides,
  args: {
    items,
  },
} as Meta

export const Default: Story<ProvidesProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Provides {...args} />
  </div>
)
