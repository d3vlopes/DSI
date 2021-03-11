import { useRouter } from 'next/router'

import Menu from 'components/Menu'
import Footer from 'components/Footer'

import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => {
  const { asPath } = useRouter()

  return (
    <S.Wrapper>
      <Menu activeLink={asPath} />

      <S.Content>{children}</S.Content>

      <S.SectionFooter>
        <Footer />
      </S.SectionFooter>
    </S.Wrapper>
  )
}

export default Base
