import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from 'components/Heading/styles'

export const HeroContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 0 8.8rem;

  ${media.greaterThan('medium')`
    padding: 7.4rem 0 3.2rem;
  `}
`

export const HeroTitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.weight.regular};
    line-height: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.littleBlack};
    text-align: center;
    max-width: 36.1rem;

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
      line-height: ${theme.font.sizes.xxxlarge};
      max-width: 54.5rem;
    `}

    > span {
      color: ${theme.colors.primary};
      font-weight: ${theme.font.weight.bold};
    }
  `}
`

export const SectionOurService = styled.section`
  ${media.greaterThan('large')`
    margin-left: -8rem;
  `}

  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.huge};

    ${HeadingStyles.Wrapper} {
      margin-bottom: 2.9rem;
    }
  `}
`
