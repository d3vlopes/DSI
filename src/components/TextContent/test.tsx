import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import TextContent from '.'

const props = {
  title: 'Heading',
  content: `
<p>
  A <a href="#">Link inside the text</a> with Lorem ipsum dolor sit,
  amet consectetur adipisicing elit. Quia praesentium cupiditate tenetur
  quam illum. Fugiat consectetur assumenda in, vitae nemo, eaque quia
  numquam ad perspiciatis doloribus error eveniet quo officia?
</p>`,
}

describe('<TextContent />', () => {
  it('should render the default(without title) component', () => {
    renderWithTheme(<TextContent content={props.content} />)

    expect(
      screen.queryByRole('heading', { name: /heading/i }),
    ).not.toBeInTheDocument()

    expect(
      screen.getByText(
        /a with lorem ipsum dolor sit, amet consectetur adipisicing elit\. quia praesentium cupiditate tenetur quam illum\. fugiat consectetur assumenda in, vitae nemo, eaque quia numquam ad perspiciatis doloribus error eveniet quo officia\?/i,
      ),
    ).toBeInTheDocument()
  })

  it('should render title with gray color and content', () => {
    renderWithTheme(<TextContent {...props} />)

    const heading = screen.getByRole('heading', { name: /heading/i })

    expect(heading).toBeInTheDocument()
    expect(heading).toHaveStyle({
      color: '#1F2E35',
    })

    expect(
      screen.getByText(
        /a with lorem ipsum dolor sit, amet consectetur adipisicing elit\. quia praesentium cupiditate tenetur quam illum\. fugiat consectetur assumenda in, vitae nemo, eaque quia numquam ad perspiciatis doloribus error eveniet quo officia\?/i,
      ),
    ).toBeInTheDocument()
  })

  it('should render the title with little black color and content', () => {
    renderWithTheme(<TextContent {...props} titleColor="littleBlack" />)

    const heading = screen.getByRole('heading', { name: /heading/i })

    expect(heading).toBeInTheDocument()
    expect(heading).toHaveStyle({
      color: '#263238',
    })

    expect(
      screen.getByText(
        /a with lorem ipsum dolor sit, amet consectetur adipisicing elit\. quia praesentium cupiditate tenetur quam illum\. fugiat consectetur assumenda in, vitae nemo, eaque quia numquam ad perspiciatis doloribus error eveniet quo officia\?/i,
      ),
    ).toBeInTheDocument()
  })

  it('should render the title with withe color and content', () => {
    renderWithTheme(<TextContent {...props} titleColor="white" />)

    const heading = screen.getByRole('heading', { name: /heading/i })

    expect(heading).toBeInTheDocument()
    expect(heading).toHaveStyle({
      color: '#FFFFFF',
    })

    expect(
      screen.getByText(
        /a with lorem ipsum dolor sit, amet consectetur adipisicing elit\. quia praesentium cupiditate tenetur quam illum\. fugiat consectetur assumenda in, vitae nemo, eaque quia numquam ad perspiciatis doloribus error eveniet quo officia\?/i,
      ),
    ).toBeInTheDocument()
  })

  it('should render the child if is passed and not the content ', () => {
    renderWithTheme(
      <TextContent title={props.title}>
        <h3>children</h3>
      </TextContent>,
    )

    expect(
      screen.getByRole('heading', { name: /children/i }),
    ).toBeInTheDocument()

    expect(
      screen.queryByText(
        /a with lorem ipsum dolor sit, amet consectetur adipisicing elit\. quia praesentium cupiditate tenetur quam illum\. fugiat consectetur assumenda in, vitae nemo, eaque quia numquam ad perspiciatis doloribus error eveniet quo officia\?/i,
      ),
    ).not.toBeInTheDocument()
  })
})
