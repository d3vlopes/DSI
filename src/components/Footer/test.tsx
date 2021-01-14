import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render Footer', () => {
    renderWithTheme(<Footer />)

    expect(screen.getByRole('heading', { name: /Footer/i })).toBeInTheDocument()
  })
})
