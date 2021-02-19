import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Content } from 'templates/Base/styles'

import * as HeroStyles from 'components/Hero/styles'

export const Wrapper = styled.div`
  ${Content} {
    margin-top: 0;
  }
`

export const SectionHero = styled.section`
  display: flex;
  justify-content: center;

  ${HeroStyles.Wrapper} > div {
    ${({ theme }) => css`
      display: flex;
      flex-direction: column-reverse;
      padding: 5.4rem ${theme.spacings.small} 4.7rem ${theme.spacings.small};

      ${media.greaterThan('medium')`
        flex-direction: initial;
      `}

      ${media.greaterThan('huge')`
        padding: 5.1rem 0 10rem 0;
      `}
    `}
  }
`

export const HeroContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${media.greaterThan('medium')`
      align-items: flex-start;
    `}

    > div > h2 {
      font-size: ${theme.font.sizes.large};
      font-weight: ${theme.font.weight.medium};
      max-width: 37.3rem;
      text-align: center;
      margin: ${theme.spacings.xlarge} 0 ${theme.spacings.small} 0;

      ${media.greaterThan('medium')`
        text-align: initial;
        margin: 0 0 ${theme.spacings.medium} 0;
      `}
    }
  `}
`

export const HeroTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.grey};

    > span {
      color: ${theme.colors.primary};
    }
  `}
`

export const HeroDescription = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    line-height: 144.7%;
    max-width: 38.3rem;
    text-align: center;
    margin-bottom: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      text-align: initial;
      max-width: 42rem;
      margin-bottom: ${theme.spacings.medium};
    `}

    ${media.greaterThan('huge')`
      max-width: 52rem;
    `}
  `}
`

export const HeroImage = styled.div`
  img {
    width: 100%;
    max-width: 52.6rem;
  }
`
