import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { Container } from 'components/Container'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium} 0;
    z-index: ${theme.layers.menu};
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    /* overflow: hidden; */

    ${Container} {
      display: flex;
      align-items: center;
    }

    ${media.lessThan('medium')`
      ${Container} {
        display: flex;
        justify-content: space-between;
      }
    `}
  `}
`

export const Logo = styled.img``

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.grey};
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
  `}
`

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;

    ${media.lessThan('large')`
      display: none;
    `}

    > div {
      margin-left: ${theme.spacings.medium};
    }
  `}
`

export const MenuIcon = styled.img`
  ${media.lessThan('medium')`
      display: flex;
  `}
`

export const MenuNav = styled.div`
  ${({ theme }) => css`
    .active {
      font-weight: ${theme.font.weight.bold};
    }
  `}
`

const MenuLinkModifiers = {
  default: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.weight.regular};
  `,
  active: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.weight.bold};
  `,
}

type MenuLinkProps = {
  isActive: boolean
  isOpen?: boolean
}

export const MenuLink = styled.a<MenuLinkProps>`
  ${({ theme, isActive }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    color: ${theme.colors.grey};
    margin: 0 ${theme.spacings.huge} 0;
    text-decoration: none;

    ${media.lessThan('large')`
      margin: 0 2rem 0;
    `}

    ${media.greaterThan('large')`
      margin: 0 ${theme.spacings.xxlarge} 0;
    `}

    ${!isActive && MenuLinkModifiers.default(theme)}
    ${isActive && MenuLinkModifiers.active(theme)}
  `}
`

type MenuFullProps = {
  isOpen: boolean
}

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.white};
    position: fixed;
    z-index: ${theme.layers.menu};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
    }

    ${MenuNav} {
      display: flex;
      flex-direction: column;
      margin: ${theme.spacings.xlarge} 0;
    }

    ${MenuLink} {
      margin-bottom: ${theme.spacings.small};
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }

    ${MenuGroup} {
      display: flex;
      justify-content: flex-start;
    }
  `}
`

export const MenuLinkFull = styled.a<MenuLinkProps>`
  ${({ theme, isActive }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    color: ${theme.colors.grey};
    margin: 0 ${theme.spacings.huge} 0;
    text-decoration: none;

    ${!isActive && MenuLinkModifiers.default(theme)}
    ${isActive && MenuLinkModifiers.active(theme)}
  `}
`
