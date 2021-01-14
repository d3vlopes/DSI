import { renderWithTheme } from 'utils/test/helpers'

import { Grid } from '.'

describe('<Grid />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Grid>Children</Grid>)

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(23rem,1fr));
        grid-gap: 2.4rem;
        margin: 2.4rem 0;
      }

      <div
        class="c0"
      >
        Children
      </div>
    `)
  })
})
