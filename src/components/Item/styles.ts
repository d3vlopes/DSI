import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Wrapper as HeadingStyle } from 'components/Heading/styles'
import { Wrapper as TextContentStyle } from 'components/TextContent/styles'

import { ItemProps } from '.'

export const Wrapper = styled.div<ItemProps>`
  ${({ theme, color, reverse, img, children }) => css`
    background: ${theme.colors[color!]};
    padding: ${theme.spacings.medium};

    > img {
      width: 100%;
      margin-bottom: ${theme.spacings.large};
    }

    ${HeadingStyle} {
      margin-bottom: ${theme.spacings.huge};
    }

    h3,
    h4,
    h5,
    h6 {
      text-align: ${children ? 'inherit' : 'center'};
      max-width: 36.4rem;
    }

    p {
      max-width: 35.8rem;
      margin-top: ${theme.spacings.medium};
    }

    ${media.greaterThan('medium')`
      display: flex;
      flex-direction: ${reverse ? 'row-reverse' : 'flex'};
      justify-content: ${img ? 'center' : 'flex-start'};

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
        text-align: inherit;
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
