import Home, { HomeTemplateProps } from 'templates/Home'

import mockHero from 'components/Hero/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      hero: mockHero[0],
    },
  }
}
