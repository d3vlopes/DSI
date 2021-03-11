import { Story, Meta } from '@storybook/react/types-6-0'
import Menu, { MenuProps } from '.'

export default {
  title: 'Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    activeLink: {
      control: {
        type: 'select',
        options: [
          '/services',
          '/product',
          '/technology',
          '/about',
          '/client',
          '/partner',
        ],
      },
    },
  },
} as Meta

export const Default: Story<MenuProps> = (args) => <Menu {...args} />

export const ActiveLink: Story<MenuProps> = (args) => (
  <Menu activeLink="/services" {...args} />
)
