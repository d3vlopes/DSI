import Link from 'next/link'
import { useState } from 'react'
import { Home as HomeIcon } from '@styled-icons/heroicons-outline/Home'
import { EmailOutline as EmailIcon } from '@styled-icons/evaicons-outline/EmailOutline'
import { Shuffle as ShuffleIcon } from '@styled-icons/material/Shuffle'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import MediaMatch from 'components/MediaMatch'
import { Container } from 'components/Container'

import * as S from './styles'

export type MenuProps = {
  // eslint-disable-next-line prettier/prettier
  activeLink?: '/services' | '/product' | '/technology' | '/about' | '/client' | '/partner' | string
}

const Menu = ({ activeLink }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <Container>
        <Link href="/">
          <a>
            <S.Logo
              src="/img/logo.png"
              alt="Letters DSI and words DWIDASA, SAMSARA, INDONESIA"
            />
          </a>
        </Link>
        <MediaMatch lessThan="medium">
          <S.IconWrapper onClick={() => setIsOpen(true)}>
            <S.MenuIcon src="/icon/menu-icon.svg" alt="Open Menu" />
          </S.IconWrapper>
        </MediaMatch>

        <MediaMatch greaterThan="medium">
          <S.MenuNav>
            <Link href="/services" passHref>
              <S.MenuLink
                id="menu-link-services"
                isActive={activeLink === '/services'}
                title="Services"
              >
                Services
              </S.MenuLink>
            </Link>
            <Link href="/product" passHref>
              <S.MenuLink
                id="menu-link-product"
                isActive={activeLink === '/product'}
                title="Product"
              >
                Product
              </S.MenuLink>
            </Link>
            <Link href="/technology" passHref>
              <S.MenuLink
                id="menu-link-technology"
                isActive={activeLink === '/technology'}
                title="Technology"
              >
                Technology
              </S.MenuLink>
            </Link>
            <Link href="/about" passHref>
              <S.MenuLink
                id="menu-link-about"
                isActive={activeLink === '/about'}
                title="About"
              >
                About
              </S.MenuLink>
            </Link>
            <Link href="/client" passHref>
              <S.MenuLink
                id="menu-link-client"
                isActive={activeLink === '/client'}
                title="Client"
              >
                Client
              </S.MenuLink>
            </Link>
            <Link href="/partner" passHref>
              <S.MenuLink
                id="menu-link-partner"
                isActive={activeLink === '/partner'}
                title="Partner"
              >
                Partner
              </S.MenuLink>
            </Link>
          </S.MenuNav>
        </MediaMatch>

        <S.MenuGroup id="menu-group">
          <S.IconWrapper id="menu-group-icon">
            <HomeIcon id="menu-home-icon" aria-label="Go to home" />
          </S.IconWrapper>
          <S.IconWrapper id="menu-group-icon">
            <EmailIcon id="menu-email-icon" aria-label="Send message" />
          </S.IconWrapper>
          <S.IconWrapper id="menu-group-icon">
            <ShuffleIcon id="menu-shuffle-icon" aria-label="Media" />
          </S.IconWrapper>
        </S.MenuGroup>
      </Container>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <div>
          <S.MenuNav>
            <Link href="/services" passHref>
              <S.MenuLinkFull
                id="menufull-link-services"
                isActive={activeLink === '/services'}
                title="Services"
              >
                Services
              </S.MenuLinkFull>
            </Link>
            <Link href="/product" passHref>
              <S.MenuLinkFull
                id="menufull-link-product"
                isActive={activeLink === '/product'}
                title="Product"
              >
                Product
              </S.MenuLinkFull>
            </Link>
            <Link href="/technology" passHref>
              <S.MenuLinkFull
                id="menufull-link-technology"
                isActive={activeLink === '/technology'}
                title="Technology"
              >
                Technology
              </S.MenuLinkFull>
            </Link>
            <Link href="/about" passHref>
              <S.MenuLinkFull
                id="menufull-link-about"
                isActive={activeLink === '/about'}
                title="About"
              >
                About
              </S.MenuLinkFull>
            </Link>
            <Link href="/client" passHref>
              <S.MenuLinkFull
                id="menufull-link-client"
                isActive={activeLink === '/client'}
                title="Client"
              >
                Client
              </S.MenuLinkFull>
            </Link>
            <Link href="/partner" passHref>
              <S.MenuLinkFull
                id="menufull-link-partner"
                isActive={activeLink === '/partner'}
                title="Partner"
              >
                Partner
              </S.MenuLinkFull>
            </Link>
          </S.MenuNav>

          <S.MenuGroup id="mobile-menu-group">
            <S.IconWrapper>
              <HomeIcon aria-label="Go to home" />
            </S.IconWrapper>
            <S.IconWrapper>
              <EmailIcon aria-label="Send message" />
            </S.IconWrapper>
            <S.IconWrapper>
              <ShuffleIcon aria-label="Media" />
            </S.IconWrapper>
          </S.MenuGroup>
        </div>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
