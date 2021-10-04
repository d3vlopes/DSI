import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeroStyles from 'components/Hero/styles'
import * as TextContentStyles from 'components/TextContent/styles'
import * as ItemStyles from 'components/Item/styles'

export const SectionHero = styled.section`
  ${HeroStyles.Wrapper} {
    ${({ theme }) => css`
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
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

    > h2 {
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
  > img {
    width: 100%;
    max-width: 52.6rem;
  }

  ${media.greaterThan('medium')`
    > img {
      margin-left: 3.2rem;
    }
  `}

  ${media.greaterThan('large')`
    > img {
      margin-left: 5.2rem;
    }
  `}
`
export const SectionAbout = styled.section`
  ${({ theme }) => css`
    ${TextContentStyles.Wrapper} > div {
      display: flex;
      flex-direction: column;
      align-items: center;

      ${media.greaterThan('large')`
        display: initial;
      `}
    }

    ${TextContentStyles.Wrapper} > div > h1 {
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.weight.medium};
      line-height: 133.69%;
      color: ${theme.colors.black};
      text-align: center;
      max-width: 36.4rem;
    }

    ${TextContentStyles.Wrapper} > div > p {
      max-width: 35.8rem;

      ${media.greaterThan('medium')`
        max-width: 52rem;
      `}
    }

    ${media.greaterThan('medium')`
      ${TextContentStyles.Wrapper} > div > h1 {
        text-align: initial;
      }
    `}

    ${media.greaterThan('large')`
      ${TextContentStyles.Wrapper} > div > h1 {
        max-width: 45.4rem;
      }
    `}

    ${TextContentStyles.Wrapper} > div > h1 > span {
      color: ${theme.colors.primary};
    }

    ${TextContentStyles.Wrapper} > div > p > span {
      color: ${theme.colors.primary};
      font-weight: ${theme.font.weight.medium};
    }

    ${ItemStyles.Wrapper} {
      display: flex;
      align-items: center;
    }

    ${ItemStyles.Wrapper} > img {
      max-width: 34.9rem;
      height: auto;
    }

    ${media.greaterThan('medium')`
      ${ItemStyles.Wrapper} > img {
        max-width: 45.3rem;
      }
    `}
  `}
`

export const SectionProvides = styled.section`
  ${({ theme }) => css`
    margin: 3.6rem 0 calc(6.4rem - ${theme.spacings.large});

    ${media.greaterThan('large')`
      margin: 9.6rem 0 calc(8.7rem - ${theme.spacings.large});
    `}

    > div > h2 {
      margin-bottom: ${theme.spacings.medium};
      text-align: center;
    }
  `}
`
