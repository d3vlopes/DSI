import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Wrapper as HeadingStyle } from 'components/Heading/styles'

import { ItemProps } from '.'

export const Wrapper = styled.div<ItemProps>`
  ${({ theme, color, reverse, reverseMobile, img }) => css`
    display: flex;
    flex-direction: ${reverseMobile ? 'column-reverse' : 'column'};
    background: ${theme.colors[color!]};
    padding: ${theme.spacings.medium};

    > img {
      width: 100%;
      margin-bottom: ${theme.spacings.large};
      margin-top: ${reverseMobile ? `${theme.spacings.xxlarge}` : '0'};
    }

    ${HeadingStyle} {
      margin-bottom: ${theme.spacings.huge};
    }

    h3,
    h5,
    h6 {
      text-align: center;
      max-width: 36.4rem;
    }

    p {
      margin-top: ${theme.spacings.medium};
      max-width: 100%;
    }

    ${media.greaterThan('medium')`
      flex-direction: ${reverse ? 'row-reverse' : 'row'};
      justify-content: center;

      > img {
        width: 50%;
        max-height: 54.9rem;
        margin-left: ${reverse ? '8.4rem' : '0'};
        margin-right: ${reverse ? '0' : '8.4rem'};
      }


      p {
        max-width: ${img ? '52rem' : '100%'};
        text-align: inherit;
      }

      h3,
      h4,
      h5,
      h6 {
        text-align: initial;
        max-width: 100%;
      }
    `}

    ${media.greaterThan('large')`
      > img {
        width: auto;
      }
    `}
  `}
`
