import { render, screen } from 'utils/test-utils'
import { ItemDefaultValues } from 'hooks/use-item'

import Heading from '.'

describe('<Heading />', () => {
  it('should render the Heading with the grey color by default', () => {
    render(<Heading>Children</Heading>)

    expect(screen.getByRole('heading', { name: /children/i })).toHaveStyle({
      color: '#1F2E35',
    })
  })

  it('should render the wavy in red by default ', () => {
    const { container } = render(<Heading wavy>Children</Heading>)

    const wavy = container.querySelector('#wavy')
    expect(wavy).toHaveStyle({
      background: `url('/img/line-red.png') bottom repeat-x`,
    })
  })

  it('should Heading must be rendered with the h1 tag and with wavy', () => {
    const itemProviderProps = {
      ...ItemDefaultValues,
      as: 'h1',
    }

    const { container } = render(<Heading wavy>Children</Heading>, {
      itemProviderProps,
    })

    const h1 = container.querySelector('div > h1')

    expect(h1).toBeInTheDocument()

    const wavy = container.querySelector('#wavy')
    expect(wavy).toHaveStyle({
      background: `url('/img/line-red.png') bottom repeat-x`,
    })
  })

  it('should render the wavy in black color ', () => {
    const { container } = render(
      <Heading wavy wavyColor="littleBlack">
        Children
      </Heading>,
    )

    const wavy = container.querySelector('#wavy')
    expect(wavy).toHaveStyle({
      background: `url('/img/line-black.png') bottom repeat-x`,
    })
  })
})
