import Service, { ServicesTemplateProps } from 'templates/Services'

import mockHero from 'components/Hero/mock'

export default function Services(props: ServicesTemplateProps) {
  return <Service {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      hero: mockHero[1],
    },
  }
}
