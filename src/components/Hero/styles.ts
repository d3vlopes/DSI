import styled, { css, DefaultTheme } from 'styled-components'
import { ColorBorder, HeroProps } from '.'

const wrapperModifiers = {
  bottom: (theme: DefaultTheme, colorBorder: ColorBorder) => css`
    background: ${theme.colors[colorBorder]};
    height: ${colorBorder === 'primary' ? '1.7rem' : '3.6rem'};
  `,
}

export const Wrapper = styled.div<HeroProps>`
  ${({ theme, backgroundColor }) => css`
    background: ${theme.colors[backgroundColor!]};
  `}
`

export const Bottom = styled.div<
  Pick<HeroProps, 'colorBorder' | 'borderStyle'>
>`
  ${({ theme, borderStyle, colorBorder }) => css`
    ${!!borderStyle && wrapperModifiers[borderStyle!](theme, colorBorder!)}
  `}
`
