import gql from 'graphql-tag'

import Home, { HomeTemplateProps } from 'templates/Home'

import mockAbout from 'components/Item/mock'
import mockProvides from 'components/Provides/mock'

import client from 'utils/apollo'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const response = await client.query({
    query: gql`
      query getHomePage {
        allHomepages {
          edges {
            node {
              body {
                ... on HomepageBodyHero {
                  primary {
                    hero_image
                    hero_title
                    hero_subtitle
                    button_label
                    button_link {
                      __typename
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  })

  return {
    props: {
      hero: {
        title:
          response.data.allHomepages.edges[0].node.body[0].primary.hero_title[0]
            .text,
        description:
          response.data.allHomepages.edges[0].node.body[0].primary
            .hero_subtitle[0].text,
        src:
          response.data.allHomepages.edges[0].node.body[0].primary.hero_image
            .url,
      },
      about: mockAbout[0],
      provides: mockProvides,
    },
  }
}
