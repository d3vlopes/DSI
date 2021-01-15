import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import Home from '.'

describe('<Home />', () => {
  it('should render Home', () => {
    renderWithTheme(<Home />)

    expect(screen.getByRole('heading', { name: /Home/i })).toBeInTheDocument()
  })
})
