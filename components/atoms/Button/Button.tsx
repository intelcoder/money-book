import { AppButton } from './styled'
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
    <AppButton
      size={size}
      bgColor={bgColor}
      onPress={onPress}
      fluid={fluid}
      rounded={rounded}
      roundCorner={roundCorner}>
      {children}
    </AppButton>
  )
}

export default Button
