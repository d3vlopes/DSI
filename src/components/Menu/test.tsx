import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the Menu', () => {
    renderWithTheme(<Menu />)

    expect(
      screen.getByRole('img', {
        name: /Letters DSI and words DWIDASA, SAMSARA, INDONESIA/i,
      }),
    ).toBeInTheDocument()

    expect(screen.getByAltText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/close menu/i)).toBeInTheDocument()
  })

  it('should handle the open/close mobile menu', () => {
    renderWithTheme(<Menu />)

    const fullMenuElement = screen.getByRole('navigation', { hidden: true })

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    fireEvent.click(screen.getByAltText(/open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  it('should not show the group menu up to large size ', () => {
    const { container } = renderWithTheme(<Menu />)

    expect(container.querySelector('#menu-group')).toHaveStyleRule(
      'display',
      'none',
      {
        media: '(max-width: 1170px)',
      },
    )
  })

  it('should show the group menu after the large size ', () => {
    const { container } = renderWithTheme(<Menu />)

    expect(container.querySelector('#menu-group')).toHaveStyleRule(
      'display',
      'flex',
    )
  })

  it('should render the group menu icon ', () => {
    const { container } = renderWithTheme(<Menu />)

    expect(container.querySelectorAll('#menu-group-icon')).toHaveLength(3)

    expect(container.querySelector('#menu-home-icon')).toBeInTheDocument()
    expect(container.querySelector('#menu-email-icon')).toBeInTheDocument()
    expect(container.querySelector('#menu-shuffle-icon')).toBeInTheDocument()

    expect(container.querySelector('#mobile-menu-group')).toBeInTheDocument()
  })
})
