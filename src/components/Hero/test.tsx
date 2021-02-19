import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import Hero from '.'

describe('<Hero />', () => {
  it('should render the default Hero', () => {
    const { container } = renderWithTheme(<Hero>content</Hero>)

    expect(screen.getByText(/content/i)).toBeInTheDocument()

    expect(container.firstChild).toHaveStyle({
      background: '#FFFFFF',
    })
  })

  it('should render the Hero with border bottom on color whiteF6 by default', () => {
    const { container } = renderWithTheme(
      <Hero borderStyle="bottom">content</Hero>,
    )

    expect(container.firstElementChild?.querySelector('div')).toHaveStyle({
      background: '#F6F6F6',
      height: '3.6rem',
    })
  })

  it('should render the Hero with border bottom on color primay', () => {
    const { container } = renderWithTheme(
      <Hero borderStyle="bottom" colorBorder="primary">
        content
      </Hero>,
    )

    expect(container.firstElementChild?.querySelector('div')).toHaveStyle({
      background: '#EE4248',
      height: '1.7rem',
    })
  })
})
