import Base from 'templates/Base'

import Hero from 'components/Hero'
import Button from 'components/Button'
import Heading from 'components/Heading'
import Item, { ItemProps } from 'components/Item'
import Provides, { ProvideProps } from 'components/Provides'
import { Container } from 'components/Container'
import { HeroContent } from 'components/Hero/mock'

import * as S from './styles'

export type HomeTemplateProps = {
  hero: HeroContent
  about: ItemProps
  provides: ProvideProps[]
}

const Home = ({ hero, about, provides }: HomeTemplateProps) => (
  <Base>
    <S.SectionHero>
      <Container>
        <Hero>
          <S.HeroContent>
            <S.HeroTitle>
              {hero.title.slice(0, 36)}
              <br />
              <span>{hero.title.slice(36, 59)}</span>
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

    <S.SectionProvides>
      <Heading>Product and Service</Heading>
      <Container>
        <Provides items={provides} />
      </Container>
    </S.SectionProvides>
  </Base>
)

export default Home
