import Heading, { HeadingColor, HeadingWavyColor } from 'components/Heading'

import * as S from './styles'

export type TextContentProps = {
  children?: React.ReactNode
  title?: string
  titleColor?: HeadingColor
  content?: string
  wavyColor?: HeadingWavyColor
}

const TextContent = ({
  children,
  title,
  titleColor = 'grey',
  content,
  wavyColor = 'primary',
}: TextContentProps) => (
  <S.Wrapper data-testid="wrapper">
    {!!title && (
      <Heading color={titleColor} wavy wavyColor={wavyColor}>
        {title}
      </Heading>
    )}

    {!!content && <div dangerouslySetInnerHTML={{ __html: content }}></div>}
    {!!children && children}
  </S.Wrapper>
)

export default TextContent
