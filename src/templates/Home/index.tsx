import Base from 'templates/Base'

import Hero from 'components/Hero'
import Button from 'components/Button'
import { Container } from 'components/Container'

import * as S from './styles'

export type HomeTemplateProps = {
  hero: {
    title: string
    description: string
    src: string
  }
}

const Home = ({ hero }: HomeTemplateProps) => (
  <S.Wrapper>
    <Base>
      <S.SectionHero>
        <Hero>
          <Container>
            <S.HeroContent>
              <div>
                <S.HeroTitle>
                  {hero.title.slice(0, 36)}
                  <br />
                  <span>{hero.title.slice(36, 58)}</span>
                </S.HeroTitle>
              </div>

              <S.HeroDescription>{hero.description}</S.HeroDescription>

              <Button>Read More</Button>
            </S.HeroContent>

            <S.HeroImage>
              <img
                src={hero.src}
                alt="A person next to various types of devices"
              />
            </S.HeroImage>
          </Container>
        </Hero>
      </S.SectionHero>
    </Base>
  </S.Wrapper>
)

export default Home
