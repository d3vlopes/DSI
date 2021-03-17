import Heading, { HeadingColor, HeadingWavyColor } from 'components/Heading'

import * as S from './styles'

export type TextContentProps = {
  children?: React.ReactNode
  title?: string
  titleAs?: 'h1' | 'h2'
  titleColor?: HeadingColor
  content?: string
  wavyColor?: HeadingWavyColor
}

const TextContent = ({
  children,
  title,
  titleAs = 'h1',
  titleColor = 'grey',
  content,
  wavyColor = 'primary',
}: TextContentProps) => (
  <S.Wrapper id="text-content">
    {!!title && (
      <Heading as={titleAs} color={titleColor} wavy wavyColor={wavyColor}>
        {title}
      </Heading>
    )}

    {!!content && <div dangerouslySetInnerHTML={{ __html: content }}></div>}
    {!!children && children}
  </S.Wrapper>
)

export default TextContent
