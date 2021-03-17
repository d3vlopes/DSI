import styled, { css } from 'styled-components'
import { HeadingProps } from '.'

export const Wrapper = styled.div<HeadingProps>`
  ${({ theme, color }) => css`
    > h1,
    h2 {
      position: relative;
      font-size: ${theme.font.sizes.medium};
      line-height: 133.7%;
      font-weight: ${theme.font.weight.medium};
      color: ${theme.colors[color!]};
    }
  `}
`

export const Wavy = styled.div<Pick<HeadingProps, 'wavyColor'>>`
  ${({ wavyColor }) => css`
    display: flex;
    position: absolute;
    bottom: -15px;
    background: ${wavyColor === 'primary'
      ? `url('/img/line-red.png') bottom repeat-x`
      : `url('/img/line-black.png') bottom repeat-x`};
    width: 90px;
    height: 9px;
  `}
`
