import { PrismicLink } from 'apollo-link-prismic'
import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'

const endpoint = process.env.GRAPHQL_HOST

const client = new ApolloClient({
  link: PrismicLink({
    uri: `${endpoint}/graphql`,
  }),
  cache: new InMemoryCache(),
})

export default client
