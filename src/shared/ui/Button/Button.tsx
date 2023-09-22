import * as S from './Button.style'

type Props = {
  onClick?: () => void
  children: React.ReactNode
}

const Button = ({onClick, children}: Props) => {
  return <S.Button onClick={onClick}>{children}</S.Button>
}

export default Button