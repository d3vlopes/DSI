import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import Provides from '.'
import mock from './mock'

describe('<Provides />', () => {
  it('should render only one Provide', () => {
    renderWithTheme(<Provides items={mock.slice(0, 1)} />)

    expect(screen.getByRole('img', { name: mock[0].title })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: mock[0].title }),
    ).toBeInTheDocument()

    expect(screen.getByText(mock[0].description)).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /read more/i }),
    ).toBeInTheDocument()
  })

  it('should render three Provides', () => {
    const { container } = renderWithTheme(<Provides items={mock} />)

    expect(container.querySelectorAll('#provide')).toHaveLength(3)
    expect(container.firstChild).toMatchSnapshot()
  })
})
