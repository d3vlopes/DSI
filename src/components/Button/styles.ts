import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '.'

export type WrapperProps = Pick<ButtonProps, 'size' | 'styles'>

const wrapperModifiers = {
  normal: () => css`
    width: 16.1rem;
  `,
  large: () => css`
    width: 16.6rem;
  `,

  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};

    &:hover {
      background-color: #de3f45;
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};

    &:hover {
      background-color: #f7f6f6;
    }
  `,
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, styles }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 0;
    cursor: pointer;
    border-radius: ${theme.border.radius};
    padding: 1.2rem;
    text-decoration: none;
    font-size: ${theme.font.sizes.xsmall};
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
    transition: background-color ${theme.transition.fast};

    ${!!size && wrapperModifiers[size]()}
    ${!!styles && wrapperModifiers[styles](theme)}
  `}
`
