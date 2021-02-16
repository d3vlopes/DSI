import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import Hero from '.'

describe('<Hero />', () => {
  it('should render Hero', () => {
    renderWithTheme(<Hero />)

    expect(screen.getByRole('heading', { name: /Hero/i })).toBeInTheDocument()
  })
})
