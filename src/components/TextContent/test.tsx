import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import TextContent from '.'

describe('<TextContent />', () => {
  it('should render TextContent', () => {
    renderWithTheme(<TextContent />)

    expect(screen.getByRole('heading', { name: /TextContent/i })).toBeInTheDocument()
  })
})
