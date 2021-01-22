import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import ProductService from '.'

describe('<ProductService />', () => {
  it('should render ProductService', () => {
    renderWithTheme(<ProductService />)

    expect(screen.getByRole('heading', { name: /ProductService/i })).toBeInTheDocument()
  })
})
