import { AppText } from './styled'

function Text({ children, weight = 'medium', size = 'sm', color = 'base' }: _TextProps) {
  return (
    <AppText weight={weight} size={size} color={color}>
      {children}
    </AppText>
  )
}

export type WeightType = 'light' | 'medium' | 'bold'
export type SizeType = 'sm' | 'md' | 'lg'
interface _TextProps {
  children: JSX.Element | string
  weight: WeightType
  size: SizeType
  color: 'white' | 'red' | 'base'
}

export default Text
