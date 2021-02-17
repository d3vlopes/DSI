import { Story, Meta } from '@storybook/react/types-6-0'
import Styled from 'styled-components'

import Hero, { HeroProps } from '.'

export default {
  title: 'Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    styles: {
      control: {
        type: 'select',
        options: ['borderBottom'],
      },
    },
  },
} as Meta

const Content = Styled.div`
  display: flex;
  padding: 7.4rem 0 6.1rem 0;
  justify-content: center;

  > h2 {
    color: #FFFFFF;
    text-align: center
  }
`

export const Default: Story<HeroProps> = (args) => (
  <div
    style={{
      maxWidth: '130rem',
      margin: '0 auto',
    }}
  >
    <Hero {...args}>
      <h2 style={{ textAlign: 'center', padding: '7.4rem 0 6.1rem 0' }}>
        Content
      </h2>
    </Hero>
  </div>
)

export const WithBorderBottom: Story<HeroProps> = (args) => (
  <div
    style={{
      maxWidth: '130rem',
      margin: '0 auto',
    }}
  >
    <Hero {...args}>
      <Content>
        <h2>Content</h2>
      </Content>
    </Hero>
  </div>
)

WithBorderBottom.args = {
  backgroundColor: 'primary',
  borderStyle: 'bottom',
}
