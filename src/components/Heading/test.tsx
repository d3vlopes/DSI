import { render, screen } from 'utils/test-utils'
import { ItemDefaultValues } from 'hooks/use-item'

import Heading from '.'

describe('<Heading />', () => {
  it('should render by default Heading with tag h2 and color grey', () => {
    const { container } = render(<Heading>Children</Heading>)

    const h2 = container.querySelector('div > h2')

    expect(screen.getByRole('heading', { name: /children/i })).toHaveStyle({
      color: '#1F2E35',
    })

    expect(h2).toBeInTheDocument()
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

  it('should render the wavy in red by default ', () => {
    const { container } = render(<Heading wavy>Children</Heading>)

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
