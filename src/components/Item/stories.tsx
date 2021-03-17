import { Story, Meta } from '@storybook/react/types-6-0'
import { UserGroup } from '@styled-icons/heroicons-outline/UserGroup'
import { Dashboard3 } from '@styled-icons/remix-line/Dashboard3'

import Icon from 'components/Icon'
import Item, { ItemProps } from '.'

import mock from './mock'

export default {
  title: 'Item',
  component: Item,
  args: mock[0],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    children: {
      type: '',
    },
    content: {
      type: '',
    },
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
    <Item {...args} />
  </div>
)

Reverse.args = {
  img: mock[2].img,
  title: mock[2].title,
  content: mock[2].content,
  reverse: true,
}

export const WithChildren: Story<ItemProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Item {...args}>
      <div>
        <Icon
          icon={<UserGroup />}
          title="Vision"
          content="<p>To become the leading application service provider (ASP) focusing on front-end application delivered for Indonesia’s banking and fi nancial industry.</p>"
        />
        <Icon
          icon={<Dashboard3 />}
          title="Mission"
          content="<p>To grow the business together with clients by providing enhanced services and wide delivery channel to end-users.</p>"
        />
      </div>
    </Item>
  </div>
)

WithChildren.args = {
  img: mock[3].img,
  title: mock[3].title,
  content: mock[3].content,
}
