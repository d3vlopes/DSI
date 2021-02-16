import Button from 'components/Button'

import * as S from './styles'

export type ProvideProps = {
  image: string
  title: string
  description: string
}

export type ProvidesProps = {
  items: ProvideProps[]
}

const Provides = ({ items }: ProvidesProps) => (
  <S.Wrapper>
    {items.map((item, index) => (
      <S.Provide key={`provide-${index}`} id="provide">
        <img src={`${item.image}`} alt={`${item.title}`} />
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <Button size="small">Read More</Button>
      </S.Provide>
    ))}
  </S.Wrapper>
)

export default Provides
