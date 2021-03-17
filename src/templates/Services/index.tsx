import Base from 'templates/Base'

import Hero from 'components/Hero'
import Item, { ItemProps } from 'components/Item'
import { HeroContent } from 'components/Hero/mock'
import { Container } from 'components/Container'

import * as S from './styles'

export type ServicesTemplateProps = {
  hero: HeroContent
  ourService: ItemProps
}
const Services = ({ hero, ourService }: ServicesTemplateProps) => (
  <Base>
    <Hero borderStyle="bottom" backgroundColor="whiteF6" colorBorder="primary">
      <S.HeroContent>
        <S.HeroTitle>
          {hero.title.slice(0, 23)} <br />
          <span>{hero.title.slice(23, 52)}</span>
        </S.HeroTitle>
      </S.HeroContent>
    </Hero>

    <S.SectionOurService>
      <Container>
        <Item
          title={ourService.title}
          titleAs="h1"
          img={ourService.img}
          alt={ourService.alt}
          content={ourService.content}
          reverse
        />
      </Container>
    </S.SectionOurService>
  </Base>
)

export default Services
