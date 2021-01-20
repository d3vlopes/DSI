import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'
import { Home } from '@styled-icons/heroicons-outline/Home'

import Icon from '.'
import mock from './mock'

describe('<Icon />', () => {
  it('should render normal styles by default', () => {
    const { container } = renderWithTheme(
      <div>
        <Icon
          styles="normal"
          icon={<Home aria-label={mock[0].title} />}
          title={mock[0].title}
          content={mock[0].content}
        />
        <Icon
          styles="normal"
          icon={<Home aria-label={mock[1].title} />}
          title={mock[1].title}
          content={mock[1].content}
        />
      </div>,
    )

    expect(
      screen.getByRole('heading', { name: mock[0].title }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: mock[1].title }),
    ).toBeInTheDocument()

    const icon1 = container.querySelector(`#icon-${mock[0].title} > svg`)
    const icon2 = container.querySelector(`#icon-${mock[1].title} > svg`)
    const iconWrapper = container.querySelector('#icon-wrapper')

    const divContent = container.querySelector('#content')
    const title = container.querySelector('#content > h4')
    const content = container.querySelector('#text-content > div > p')

    expect(iconWrapper).toHaveStyle({
      'align-items': 'baseline',
    })

    expect(icon1).toBeInTheDocument()
    expect(icon2).toBeInTheDocument()

    expect(icon1).toHaveStyle({
      width: '3.3rem',
    })

    expect(icon2).not.toHaveStyleRule('margin-bottom', '3.2rem', {
      modifier: ':not(:last-child)',
    })

    expect(divContent).toHaveStyle({
      'margin-left': '2.4rem',
    })

    expect(title).toHaveStyle({
      'line-height': '2.4rem',
      'letter-spacing': '0.01rem',
      color: '#263238',
      'margin-bottom': '1.6rem',
    })

    expect(content).toHaveStyle({
      'max-width': '29.4rem',
    })
  })

  it('should render the icons on primary color ', () => {
    const { container } = renderWithTheme(
      <Icon
        icon={<Home aria-label={mock[0].title} />}
        title={mock[0].title}
        content={mock[0].content}
      />,
    )

    expect(container.querySelector(`#icon-${mock[0].title} > svg`)).toHaveStyle(
      {
        color: '#EE4248',
      },
    )
  })

  it('should render the  icons style withBackground ', () => {
    const { container } = renderWithTheme(
      <Icon
        styles="withBackground"
        icon={<Home aria-label={mock[3].title} />}
        title={mock[3].title}
        content={mock[3].content}
      />,
    )

    expect(container.firstChild).toHaveStyle({
      'align-items': 'center',
    })

    const icon = container.querySelector(`#icon-${mock[3].title} > svg`)
    const divIcon = container.querySelector(`#icon-wrapper > div`)
    const divContent = container.querySelector('#content')
    const title = container.querySelector('#content > h4')
    const content = container.querySelector('#text-content div > span')

    expect(divIcon).toHaveStyle({
      display: 'flex',
      'justify-content': 'center',
      width: '7rem',
      height: '7rem',
      'border-radius': '50%',
      'background-color': 'rgba(213, 225, 219, 0.4)',
    })

    expect(icon).toHaveStyle({
      width: '3rem',
    })

    expect(divContent).toHaveStyle({
      'margin-left': '3.5rem',
      width: '100%',
      'max-width': '25.5rem',
    })

    expect(title).toHaveStyle({
      'line-height': '4.6rem',
      color: '#1F2E35',
      'margin-bottom': '0.6rem',
    })

    expect(content).toHaveStyle({
      'line-height': '3rem',
      color: '#30444E',
    })
  })
})
