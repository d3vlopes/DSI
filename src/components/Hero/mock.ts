export type HeroContent = {
  title: string
  description?: string
  src?: string
}

export const HeroMock: HeroContent[] = [
  {
    title: 'Making the most of the ever-growing Information Technology',
    description:
      'Managed by a team of professional experts with extensive experience and impressive track records',
    src: 'img/hero/home.png',
  },
  {
    title: 'Just a smile away from Winning your customer’s trust',
  },
]

export default HeroMock
