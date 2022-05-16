import { StyledBlock } from './styled'
import { BlockProps } from './types'

function Block({
  fluid,
  rounded = false,
  roundCorner = false,
  children,
  size,
  bgColor,
  flex,
  justify,
  align,
  flexDirection,
  style = {},
}: BlockProps) {
  return (
    <StyledBlock
      size={size}
      flexDirection={flexDirection}
      bgColor={bgColor}
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
