import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.footer``

export const Content = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.littleBlack};

    ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      margin-bottom: ${theme.spacings.xsmall};
    `}
  `}
`

export const Logo = styled.img`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.small};
  `}
`

export const Address = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxsmall} 0 ${theme.spacings.xlarge} 0;

    ${media.greaterThan('medium')`
      margin-top: ${theme.spacings.xsmall};
    `}

    > h4 {
      font-weight: ${theme.font.weight.medium};
      margin-bottom: ${theme.spacings.xsmall};
    }

    > div {
      max-width: 31.7rem;

      > span {
        display: flex;
        flex-direction: column;
        font-weight: ${theme.font.weight.light};
        line-height: 149.19%;
      }
    }
  `}
`

export const Contact = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xlarge};

    > h3 {
      margin-bottom: ${theme.spacings.xsmall};
      font-size: 2.4rem;
      font-weight: ${theme.font.weight.medium};
    }

    > div {
      max-width: 26.9rem;

      > span {
        display: flex;
        flex-direction: column;
        font-weight: ${theme.font.weight.light};
        line-height: 149.19%;
      }
    }
  `}
`

export const Platform = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${theme.spacings.small};
    align-items: center;
    margin-bottom: ${theme.spacings.xlarge};

    img {
      max-width: min(100%, 8.9rem);
    }
  `}
`

export const Copyright = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium} 0;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    text-align: center;
  `}
`
