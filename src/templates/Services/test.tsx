import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import mockHero from 'components/Hero/mock'

import Services from '.'

const props = {
  hero: mockHero[1],
}

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ asPath: '/services' })),
}))

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

describe('<Services />', () => {
  it('should render Services', () => {
    renderWithTheme(<Services {...props} />)

    expect(screen.getByTestId('Mock Hero')).toBeInTheDocument()
  })
})
