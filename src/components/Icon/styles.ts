import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { Wrapper as TextContentStyle } from 'components/TextContent/styles'

import { IconProps } from '.'

const wrapperModifiers = {
  normal: (theme: DefaultTheme) => css`
    align-items: baseline;

    ${Icon} > svg {
      width: 3.3rem;
    }

    ${Content} {
      margin-left: ${theme.spacings.medium};

      > h4 {
        line-height: 2.4rem;
        letter-spacing: 0.01rem;
        color: ${theme.colors.littleBlack};
        margin-bottom: ${theme.spacings.small};
      }

      ${TextContentStyle} > div > p {
        line-height: 2.4rem;
        letter-spacing: 0.02rem;
        margin-bottom: ${theme.spacings.xsmall};
        max-width: 29.4rem;
      }

      ${media.greaterThan('medium')`
        ${TextContentStyle} > div > p {
          max-width: 41.9rem;
        }
      `}
    }
  `,
  withBackground: (theme: DefaultTheme) => css`
    align-items: center;

    ${Icon} {
      display: flex;
      justify-content: center;
      width: 7rem;
      height: 7rem;
      border-radius: 50%;
      background-color: rgba(213, 225, 219, 0.4);
    }

    ${Icon} > svg {
      width: 3rem;
    }

    ${Content} {
      margin-left: ${theme.spacings.xxlarge};
      width: 100%;
      max-width: 25.5rem;

      > h4 {
        line-height: 4.6rem;
        color: ${theme.colors.grey};
        margin-bottom: ${theme.spacings.xxsmall};
      }

      ${TextContentStyle} > div > span {
        line-height: 3rem;
        color: ${theme.colors.black};
      }

      ${media.greaterThan('medium')`
        ${TextContentStyle} > div > span {
          max-width: 35.4rem;
        }
      `}
    }
  `,
}

export const Wrapper = styled.div<Pick<IconProps, 'styles'>>`
  ${({ theme, styles }) => css`
    display: flex;

    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xlarge};
    }

    ${!!styles && wrapperModifiers[styles](theme)};
  `}
`

export const Icon = styled.div`
  ${({ theme }) => css`
    > svg {
      color: ${theme.colors.primary};
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    > h4 {
      font-size: 2.4rem;
      font-weight: ${theme.font.weight.medium};
    }

    ${media.greaterThan('medium')`
      ${TextContentStyle} {
        padding: 0;
      }
    `}
  `}
`
