import { _Block } from './styled'
import { BlockProps } from './types'

function Block({
  onPress = () => {},
  fluid,
  rounded,
  roundCorner,
  children,
  size,
  bgColor,
  flex,
  justify,
  align,
  style = {},
}: BlockProps) {
  return (
    <_Block
      size={size}
      bgColor={bgColor}
      onPress={onPress}
      fluid={fluid}
      rounded={rounded}
      roundCorner={roundCorner}
      flex={flex}
      justify={justify}
      align={align}
      style={style}>
      {children}
    </_Block>
  )
}

export default Block
