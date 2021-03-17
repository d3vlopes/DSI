import Service, { ServicesTemplateProps } from 'templates/Services'

import mockHero from 'components/Hero/mock'
import mockItem from 'components/Item/mock'

export default function Services(props: ServicesTemplateProps) {
  return <Service {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      hero: mockHero[1],
      ourService: mockItem[2],
    },
  }
}
