import { StyledBlock } from './styled'
import { BlockProps } from './types'

function Block({
  onPress = () => {},
  fluid,
  rounded = false,
  roundCorner = false,
  children,
  size,
  bgColor,
  flex,
  justify,
  align,
  style = {},
}: BlockProps) {
  return (
    <StyledBlock
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
    </StyledBlock>
  )
}

export default Block
