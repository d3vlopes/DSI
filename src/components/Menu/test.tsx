import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render Menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByRole('heading', { name: /Menu/i })).toBeInTheDocument()
  })
})
