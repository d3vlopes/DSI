import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('should render Heading', () => {
    renderWithTheme(<Heading />)

    expect(screen.getByRole('heading', { name: /Heading/i })).toBeInTheDocument()
  })
})
