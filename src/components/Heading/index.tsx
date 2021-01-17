import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'grey' | 'littleBlack' | 'white'
  wavy?: boolean
  wavyColor?: 'primary' | 'littleBlack'
}

const Heading = ({
  children,
  color = 'grey',
  wavy = false,
  wavyColor = 'primary',
}: HeadingProps) => (
  <S.Wrapper color={color} wavy={wavy} wavyColor={wavyColor}>
    {children}
    {!!wavy && <S.Wavy id="wavy" wavyColor={wavyColor}></S.Wavy>}
  </S.Wrapper>
)

export default Heading
