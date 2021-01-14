import Link from 'next/link'
import { useState } from 'react'
import { Home as HomeIcon } from '@styled-icons/heroicons-outline/Home'
import { EmailOutline as EmailIcon } from '@styled-icons/evaicons-outline/EmailOutline'
import { Shuffle as ShuffleIcon } from '@styled-icons/material/Shuffle'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import MediaMatch from 'components/MediaMatch'
import { Container } from 'components/Container'

import * as S from './styles'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <Container>
        <S.Logo
          src="/img/logo.png"
          alt="Letters DSI and words DWIDASA, SAMSARA, INDONESIA"
        />
        <MediaMatch lessThan="medium">
          <S.IconWrapper onClick={() => setIsOpen(true)}>
            <S.MenuIcon src="/icon/menu-icon.svg" alt="Open Menu" />
          </S.IconWrapper>
        </MediaMatch>

        <MediaMatch greaterThan="medium">
          <S.MenuNav>
            <Link href="/" passHref>
              <S.MenuLink href="#">Services</S.MenuLink>
            </Link>
            <S.MenuLink href="#">Product</S.MenuLink>
            <S.MenuLink href="#">Technology</S.MenuLink>
            <S.MenuLink href="#">About</S.MenuLink>
            <S.MenuLink href="#">Client</S.MenuLink>
            <S.MenuLink href="#">Partner</S.MenuLink>
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
            <Link href="/" passHref>
              <S.MenuLink href="#">Services</S.MenuLink>
            </Link>
            <S.MenuLink href="#">Product</S.MenuLink>
            <S.MenuLink href="#">Technology</S.MenuLink>
            <S.MenuLink href="#">About</S.MenuLink>
            <S.MenuLink href="#">Client</S.MenuLink>
            <S.MenuLink href="#">Partner</S.MenuLink>
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
