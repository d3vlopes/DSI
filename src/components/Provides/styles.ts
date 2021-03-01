import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${media.greaterThan('medium')`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  `}

  ${media.greaterThan('large')`
    display: flex;
  `}
`

export const Provide = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:not(:last-of-type) {
      margin-bottom: ${theme.spacings.xlarge};
    }

    ${media.greaterThan('medium')`
      margin-left: 5.3rem;
    `}

    ${media.greaterThan('large')`
      align-items: flex-start;
      margin-left: 5.3rem;
    `}

    > img {
      max-width: 100%;
    }

    > h3 {
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.weight.medium};
      line-height: 133.69%;
      color: ${theme.colors.primary};
      margin: ${theme.spacings.small} 0;
    }

    > p {
      max-width: 35.9rem;
      line-height: 150%;
      text-align: center;
      color: ${theme.colors.black};
      margin: ${theme.spacings.small} 0;

      ${media.greaterThan('large')`
        text-align: initial;
        max-width: 31.9rem;
      `}
    }
  `}
`
