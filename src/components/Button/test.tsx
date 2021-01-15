import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import Button from '.'

describe('<Button />', () => {
  it('should render the primary style and normal size by default', () => {
    renderWithTheme(<Button>Button</Button>)

    const button = screen.getByRole('button', { name: /button/i })

    expect(button).toHaveStyle({
      width: '16.1rem',
      'background-color': '#EE4248',
      color: '#FFFFFF',
    })

    expect(button).toHaveStyleRule('background-color', '#de3f45', {
      modifier: ':hover',
    })
  })

  it('should render the large size ', () => {
    renderWithTheme(<Button size="large">Button</Button>)

    const button = screen.getByRole('button', { name: /button/i })

    expect(button).toHaveStyle({
      width: '16.6rem',
    })
  })

  it('should render the secodary style ', () => {
    renderWithTheme(<Button styles="secondary">Button</Button>)

    const button = screen.getByRole('button', { name: /button/i })

    expect(button).toHaveStyle({
      'background-color': '#FFFFFF',
      color: '#EE4248',
    })

    expect(button).toHaveStyleRule('background-color', '#f7f6f6', {
      modifier: ':hover',
    })
  })

  it('should render the secodary style and large size', () => {
    renderWithTheme(
      <Button size="large" styles="secondary">
        Button
      </Button>,
    )

    const button = screen.getByRole('button', { name: /button/i })

    expect(button).toHaveStyle({
      width: '16.6rem',
      'background-color': '#FFFFFF',
      color: '#EE4248',
    })
  })

  it('should render Button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Button
      </Button>,
    )

    expect(screen.getByRole('link', { name: /button/i })).toHaveAttribute(
      'href',
      '/link',
    )
  })
})
