import { AppText } from './styled'
import { _TextProps } from './types'

function Text({ children, weight = 'medium', size = 'sm', color = 'base', ...props }: _TextProps) {
  return (
    <AppText {...props} weight={weight} size={size} color={color}>
      {children}
    </AppText>
  )
}

export default Text
