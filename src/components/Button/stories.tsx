import { Story, Meta } from '@storybook/react/types-6-0'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'normal', 'large'],
      },
    },
    styles: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
  },
} as Meta

export const Default: Story = (args) => <Button {...args} />

Default.args = {
  children: 'Learn More',
  size: 'normal',
  styles: 'primary',
}
