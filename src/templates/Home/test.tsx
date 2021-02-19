import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import Home from '.'

import mockHero from 'components/Hero/mock'

const props = {
  hero: mockHero[0],
}

jest.mock('components/Hero', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return (
        <div id="hero" data-testid="Mock Hero">
          {children}
        </div>
      )
    },
  }
})

describe('<Home />', () => {
  it('should render Home', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByTestId('Mock Hero')).toBeInTheDocument()
  })
})
