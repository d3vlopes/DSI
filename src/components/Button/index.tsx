import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'normal' | 'large'
  styles?: 'primary' | 'secondary'
  as?: React.ElementType
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  { children, size = 'normal', styles = 'primary', ...props },
  ref,
) => (
  <S.Wrapper size={size} styles={styles} ref={ref} {...props}>
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default forwardRef(Button)
