/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'apollo-link-prismic' {
  export function PrismicLink(args: { uri: string; accessToken?: string }): any
}
