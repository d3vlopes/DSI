import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import Item from '.'

describe('<Item />', () => {
  it('should render Item', () => {
    renderWithTheme(<Item />)

    expect(screen.getByRole('heading', { name: /Item/i })).toBeInTheDocument()
  })
})
