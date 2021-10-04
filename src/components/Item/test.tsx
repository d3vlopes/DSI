import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import Item from '.'
import mock from './mock'

describe('<Item />', () => {
  it('should render item with img and content', () => {
    const { container } = renderWithTheme(
      <Item img={mock[0].img} alt={mock[0].alt} content={mock[0].content} />,
    )

    const img = screen.getByRole('img', {
      name: /person working on the computer/i,
    })

    const content = container.querySelector('#text-content > div > p')

    expect(img).toBeInTheDocument()

    expect(img).toHaveAttribute('src', mock[0].img)

    // Mobile
    expect(img).toHaveStyle({
      width: '100%',
    })

    expect(img).toHaveStyle({
      'margin-top': 0,
    })

    expect(
      screen.getByText(
        /dwidasa samsara indonesia \(dsi\) was firstly established in 2010 by the founders, who each of them has a common end objective to innovate new creations by making the most of the ever/i,
      ),
    ).toBeInTheDocument()

    const wrapper = container.querySelector('#item-wrapper')

    // Mobile
    expect(wrapper).toHaveStyle({
      display: 'flex',
      'flex-direction': 'column',
      background: '#FFFFFF',
    })

    // Desktop
    expect(wrapper).toHaveStyleRule('flex-direction', 'row', {
      media: '(min-width: 1170px)',
    })

    expect(content).toHaveStyle({
      'max-width': '100%',
    })
  })

  it('should render the background in whiteF6', () => {
    const { container } = renderWithTheme(<Item color="whiteF6" />)

    expect(container.querySelector('#item-wrapper')).toHaveStyle({
      background: '#F6F6F6',
    })
  })

  it('should render the background in the primary color', () => {
    const { container } = renderWithTheme(<Item color="primary" />)

    expect(container.querySelector('#item-wrapper')).toHaveStyle({
      background: '#EE4248',
    })
  })

  it('should render title and content and not image', () => {
    const { container } = renderWithTheme(
      <Item content={mock[1].content} title={mock[1].title} />,
    )

    const heading = screen.getByRole('heading', { name: mock[1].title })
    const content = container.querySelector('#text-content > div > p')

    expect(heading).toBeInTheDocument()

    expect(
      screen.queryByRole('img', {
        name: /person working on the computer/i,
      }),
    ).not.toBeInTheDocument()

    expect(content).toHaveStyle({
      'max-width': '100%',
    })
  })

  it('should render reverse item', () => {
    const { container } = renderWithTheme(
      <Item
        reverse
        img={mock[2].img}
        alt={mock[2].alt}
        content={mock[2].content}
        title={mock[2].title}
      />,
    )

    expect(container.querySelector('#item-wrapper')).toHaveStyleRule(
      'flex-direction',
      'row-reverse',
      {
        media: '(min-width: 1170px)',
      },
    )
  })

  it('should render item with children', () => {
    renderWithTheme(
      <Item img={mock[3].img} alt={mock[3].alt}>
        <h3>Children</h3>
      </Item>,
    )

    expect(
      screen.getByRole('heading', { name: /children/i }),
    ).toBeInTheDocument()
  })

  it('should render item reverse on mobile ', () => {
    const { container } = renderWithTheme(
      <Item reverseMobile img={mock[0].img} alt={mock[0].alt}>
        <h3>Children</h3>
      </Item>,
    )

    expect(container.querySelector('#item-wrapper')).toHaveStyle({
      'flex-direction': 'column-reverse',
    })

    const img = screen.getByRole('img', {
      name: /person working on the computer/i,
    })

    expect(img).toHaveStyle({
      'margin-top': '3.5rem',
    })
  })
})
