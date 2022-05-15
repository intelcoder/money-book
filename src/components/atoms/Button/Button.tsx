import { AppButton } from '@atoms/Button/styled'
import { IButtonProps } from '@atoms/Button/types'

export default function Button({
  onPress,
  fluid,
  rounded,
  roundCorner,
  children,
  size,
  bgColor,
}: IButtonProps) {
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
