import { Story, Meta } from '@storybook/react/types-6-0'

import { UserGroup } from '@styled-icons/heroicons-outline/UserGroup'
import { Dashboard3 } from '@styled-icons/remix-line/Dashboard3'
import { Home } from '@styled-icons/heroicons-outline/Home'
import { Envelope } from '@styled-icons/boxicons-regular/Envelope'
import { Telephone } from '@styled-icons/bootstrap/Telephone'

import Icon, { IconProps } from '.'
import mock from './mock'

export default {
  title: 'Icon',
  component: Icon,
} as Meta

export const Default: Story<IconProps> = () => (
  <div style={{ maxWidth: '130rem' }}>
    <Icon
      icon={<UserGroup />}
      title={mock[0].title}
      content={mock[0].content}
    />

    <Icon
      icon={<Dashboard3 />}
      title={mock[1].title}
      content={mock[1].content}
    />
  </div>
)

export const WithBackground: Story<IconProps> = () => (
  <div style={{ maxWidth: '130rem' }}>
    <Icon
      styles="withBackground"
      icon={<Home />}
      title={mock[2].title}
      content={mock[2].content}
    />

    <Icon
      styles="withBackground"
      icon={<Envelope />}
      title={mock[3].title}
      content={mock[3].content}
    />

    <Icon
      styles="withBackground"
      icon={<Telephone />}
      title={mock[4].title}
      content={mock[4].content}
    />
  </div>
)
