import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import mockHero from 'components/Hero/mock'
import mockItem from 'components/Item/mock'

import Services from '.'

const props = {
  hero: mockHero[1],
  ourService: mockItem[2],
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

jest.mock('components/Item', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Item"></div>
    },
  }
})

describe('<Services />', () => {
  it('should render Services', () => {
    renderWithTheme(<Services {...props} />)

    expect(screen.getByTestId('Mock Hero')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Item')).toBeInTheDocument()
  })
})
