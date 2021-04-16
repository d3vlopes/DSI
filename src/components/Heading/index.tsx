import React from 'react'
import { useItem } from 'hooks/use-item'

import * as S from './styles'

export type HeadingColor = 'grey' | 'littleBlack' | 'white'
export type HeadingWavyColor = 'primary' | 'littleBlack'

export type HeadingProps = {
  children: React.ReactNode
  color?: HeadingColor
  wavy?: boolean
  wavyColor?: HeadingWavyColor
}

const Heading = ({
  children,
  color = 'grey',
  wavy = false,
  wavyColor = 'primary',
}: HeadingProps) => {
  const { as } = useItem()

  return (
    <S.Wrapper color={color}>
      {as === 'h1' ? (
        <h1>
          {children}
          {!!wavy && <S.Wavy id="wavy" wavyColor={wavyColor}></S.Wavy>}
        </h1>
      ) : (
        <h2>
          {children}
          {!!wavy && <S.Wavy id="wavy" wavyColor={wavyColor}></S.Wavy>}
        </h2>
      )}
    </S.Wrapper>
  )
}

export default Heading
