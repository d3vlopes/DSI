import * as S from './styles'

export type ColorBorder = 'primary' | 'whiteF6'

export type HeroProps = {
  children: React.ReactNode
  borderStyle?: 'bottom'
  colorBorder?: ColorBorder
  backgroundColor?: 'primary' | 'white' | 'whiteF2' | 'whiteF6' | 'whiteF9'
}

const Hero = ({
  children,
  borderStyle,
  colorBorder = 'whiteF6',
  backgroundColor = 'white',
}: HeroProps) => (
  <S.Wrapper id="hero" backgroundColor={backgroundColor}>
    {children}
    {borderStyle === 'bottom' && (
      <S.Bottom borderStyle={borderStyle} colorBorder={colorBorder}></S.Bottom>
    )}
  </S.Wrapper>
)

export default Hero
