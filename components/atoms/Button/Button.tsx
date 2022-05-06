import { _Button } from './styled'
import { ButtonProps } from './types'

function Button({
  onPress = () => {},
  fluid,
  rounded,
  roundCorner,
  children,
  size,
  bgColor,
}: ButtonProps) {
  return (
    <_Button
      size={size}
      bgColor={bgColor}
      onPress={onPress}
      fluid={fluid}
      rounded={rounded}
      roundCorner={roundCorner}>
      {children}
    </_Button>
  )
}

export default Button
