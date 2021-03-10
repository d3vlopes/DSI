import Home, { HomeTemplateProps } from 'templates/Home'

import mockHero from 'components/Hero/mock'
import mockAbout from 'components/Item/mock'
import mockProvides from 'components/Provides/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      hero: mockHero[0],
      about: mockAbout[0],
      provides: mockProvides,
    },
  }
}
