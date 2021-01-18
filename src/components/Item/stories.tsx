import { Story, Meta } from '@storybook/react/types-6-0'
import Item, { ItemProps } from '.'
import mock from './mock'

export default {
  title: 'Item',
  component: Item,
  args: mock[0],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

export const Default: Story<ItemProps> = (args) => (
  <div style={{ margin: '0 auto' }}>
    <Item {...args} />
  </div>
)

export const NoImage: Story<ItemProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Item {...args} />
  </div>
)

NoImage.args = {
  img: '',
  title: mock[1].title,
  content: mock[1].content,
}

export const Reverse: Story<ItemProps> = (args) => (
  <div style={{ margin: '0 auto' }}>
    <Item {...args} reverse />
  </div>
)

Reverse.args = {
  img: mock[2].img,
  title: mock[2].title,
  content: mock[2].content,
}

export const WithChildren: Story<ItemProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Item {...args} />
  </div>
)

WithChildren.args = {
  img: mock[3].img,
  title: mock[3].title,
  content: '',
  children: 'Content',
}
