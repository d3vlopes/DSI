import TextContent from 'components/TextContent'
import * as S from './styles'

export type ItemProps = {
  children?: React.ReactNode
  color?: 'white' | 'whiteF6' | 'primary'
  img?: string
  alt?: string
  reverse?: boolean
  reverseMobile?: boolean
  content?: string
  title?: string
  titleAs?: 'h1' | 'h2'
}

const Item = ({
  children,
  color = 'white',
  img,
  alt,
  reverse = false,
  reverseMobile = false,
  content,
  title,
  titleAs = 'h1',
}: ItemProps) => (
  <S.Wrapper
    id="item-wrapper"
    img={img}
    reverse={reverse}
    reverseMobile={reverseMobile}
    color={color}
  >
    {!!img && <img src={img} alt={alt} />}

    {!!content && <TextContent content={content!} title={title!} />}
    {!!children && (
      <TextContent titleAs={titleAs} content={content!} title={title!}>
        {children}
      </TextContent>
    )}
  </S.Wrapper>
)

export default Item
