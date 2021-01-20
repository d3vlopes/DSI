import TextContent from 'components/TextContent'
import * as S from './styles'

export type IconProps = {
  icon: JSX.Element
  styles?: 'normal' | 'withBackground'
  title: string
  content: string
}

const Icon = ({ icon, styles = 'normal', title, content }: IconProps) => (
  <S.Wrapper id="icon-wrapper" styles={styles}>
    <S.Icon id={`icon-${title}`}>{icon}</S.Icon>

    <S.Content id="content">
      <h4>{title}</h4>
      <TextContent content={content} />
    </S.Content>
  </S.Wrapper>
)

export default Icon
