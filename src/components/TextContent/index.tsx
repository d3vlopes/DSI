import Heading, { HeadingColor, HeadingWavyColor } from 'components/Heading'

import * as S from './styles'

export type TextContentProps = {
  title?: string
  titleColor?: HeadingColor
  content: string
  wavyColor?: HeadingWavyColor
}

const TextContent = ({
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

    <div dangerouslySetInnerHTML={{ __html: content }}></div>
  </S.Wrapper>
)

export default TextContent
