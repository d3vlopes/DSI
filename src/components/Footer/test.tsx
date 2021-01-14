import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import Footer from '.'
import mock from './mock'

const date = new Date()

describe('<Footer />', () => {
  it('should render Footer', () => {
    const { container } = renderWithTheme(<Footer />)

    expect(
      screen.getByRole('img', {
        name: /Letters DSI and words DWIDASA, SAMSARA, INDONESIA/i,
      }),
    ).toBeInTheDocument()

    // address column
    expect(
      screen.getByRole('heading', { name: /pt dwidasa samsara indonesia/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/ruko jalur sutera 29A No\. 53/i),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/ruko jalur sutera 29A No\. 53/i),
    ).toBeInTheDocument()

    // contact column
    expect(
      screen.getByRole('heading', { name: /contact/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/phone : \+62\.21\.5314\.1135/i),
    ).toBeInTheDocument()
    expect(screen.getByText(/fax : \+62\.21\.5314\.1135/i)).toBeInTheDocument()
    expect(
      screen.getByText(/email : community@dwidasa\.com/i),
    ).toBeInTheDocument()

    // column platforms
    expect(
      screen.getByRole('img', {
        name: `icon of ${mock[0].alt}`,
      }),
    ).toBeInTheDocument()
    expect(container.querySelector('#platform-0')).toHaveAttribute(
      'src',
      mock[0].src,
    )

    expect(
      screen.getByRole('img', {
        name: `icon of ${mock[1].alt}`,
      }),
    ).toBeInTheDocument()
    expect(container.querySelector('#platform-1')).toHaveAttribute(
      'src',
      mock[1].src,
    )

    expect(
      screen.getByRole('img', {
        name: `icon of ${mock[2].alt}`,
      }),
    ).toBeInTheDocument()

    expect(container.querySelector('#platform-2')).toHaveAttribute(
      'src',
      mock[2].src,
    )

    expect(
      screen.getByRole('img', {
        name: `icon of ${mock[3].alt}`,
      }),
    ).toBeInTheDocument()
    expect(container.querySelector('#platform-3')).toHaveAttribute(
      'src',
      mock[3].src,
    )

    expect(
      screen.getByRole('img', {
        name: `icon of ${mock[4].alt}`,
      }),
    ).toBeInTheDocument()

    expect(container.querySelector('#platform-4')).toHaveAttribute(
      'src',
      mock[4].src,
    )

    expect(
      screen.getByRole('img', {
        name: `icon of ${mock[5].alt}`,
      }),
    ).toBeInTheDocument()
    expect(container.querySelector('#platform-5')).toHaveAttribute(
      'src',
      mock[5].src,
    )

    expect(
      screen.getByText(
        `Copyright © ${date.getFullYear()} - Dwidasa Samsara Indonesia`,
      ),
    ).toBeInTheDocument()
  })
})
