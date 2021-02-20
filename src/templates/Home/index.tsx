import Base from 'templates/Base'

import Hero from 'components/Hero'
import Button from 'components/Button'
import { Container } from 'components/Container'
import Item, { ItemProps } from 'components/Item'

import * as S from './styles'

export type HomeTemplateProps = {
  hero: {
    title: string
    description: string
    src: string
  }
  about: ItemProps
}

const Home = ({ hero, about }: HomeTemplateProps) => (
  <S.Wrapper>
    <Base>
      <S.SectionHero>
        <Container>
          <Hero>
            <S.HeroContent>
              <S.HeroTitle>
                {hero.title.slice(0, 36)}
                <br />
                <span>{hero.title.slice(36, 58)}</span>
              </S.HeroTitle>
              <S.HeroDescription>{hero.description}</S.HeroDescription>
              <Button>Read More</Button>
            </S.HeroContent>
            <S.HeroImage>
              <img
                src={hero.src}
                alt="A person next to various types of devices"
              />
            </S.HeroImage>
          </Hero>
        </Container>
      </S.SectionHero>

      <S.SectionAbout>
        <Item
          img={about.img}
          alt={about.alt}
          content={about.content}
          color="whiteF6"
        />
      </S.SectionAbout>
    </Base>
  </S.Wrapper>
)

export default Home
