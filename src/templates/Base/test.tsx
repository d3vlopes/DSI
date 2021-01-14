import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import Base from '.'

describe('<Base />', () => {
  it('should render Base', () => {
    renderWithTheme(<Base />)

    expect(screen.getByRole('heading', { name: /Base/i })).toBeInTheDocument()
  })
})