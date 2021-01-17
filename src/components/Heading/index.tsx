import * as S from './styles'

export type HeadingColor = 'grey' | 'littleBlack' | 'white'
export type HeadingWavyColor = 'primary' | 'littleBlack'

export type HeadingProps = {
  children: React.ReactNode
  color?: HeadingColor
  wavy?: boolean
  wavyColor?: HeadingWavyColor
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
