import styled from 'styled-components/native'
import { BlockStyledProps } from './types'

const PADDING_SIZE = {
  sm: '4px 10px',
  md: '4px 12px',
  lg: '4px 24px',
}
// eslint-disable-next-line import/prefer-default-export
export const StyledBlock = styled.Pressable<BlockStyledProps>`
  background-color: ${({ theme: { colors }, bgColor = 'transparent' }) => colors[bgColor]};
  align-items: ${({ align }) => align || 'stretch'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  width: ${({ fluid }) => (fluid ? '100%' : 'auto')};
  border-radius: ${({ rounded, roundCorner }) => {
    if (rounded) {
      return '18px'
    }
    if (roundCorner) {
      return '8px'
    }
    return '0'
  }};

  padding: ${({ size = 'sm' }) => {
    return PADDING_SIZE[size]
  }};
`
