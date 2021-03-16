import Base from 'templates/Base'

import Hero from 'components/Hero'
import { HeroContent } from 'components/Hero/mock'

import * as S from './styles'

export type ServicesTemplateProps = {
  hero: HeroContent
}
const Services = ({ hero }: ServicesTemplateProps) => (
  <Base>
    <Hero borderStyle="bottom" backgroundColor="whiteF6" colorBorder="primary">
      <S.HeroContent>
        <S.HeroTitle>
          {hero.title.slice(0, 23)} <br />
          <span>{hero.title.slice(23, 52)}</span>
        </S.HeroTitle>
      </S.HeroContent>
    </Hero>
  </Base>
)

export default Services
