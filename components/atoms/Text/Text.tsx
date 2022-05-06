import { _Text } from './styled'

function Text({ text, weight = 'medium', size = 'sm', color = 'base' }: _TextProps) {
  return (
    <_Text weight={weight} size={size} color={color}>
      {text}
    </_Text>
  )
}

export type WeightType = 'light' | 'medium' | 'bold'
export type SizeType = 'sm' | 'md' | 'lg'
interface _TextProps {
  text: string
  weight?: WeightType
  size?: SizeType
  color?: 'white' | 'red' | 'base'
}

export default Text
