import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.littleBlack};

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.xxsmall};
    `}

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: ${theme.spacings.xsmall} 0;
    }

    p {
      margin-bottom: ${theme.spacings.xxlarge};
    }

    a {
      color: ${theme.colors.primary};
      text-decoration: none;
    }

    img {
      max-width: min(70rem, 100%);
      margin-bottom: ${theme.spacings.xsmall};
    }

    ul,
    ol {
      padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    }

    hr {
      margin: ${theme.spacings.small} 0;
    }
  `}
`
