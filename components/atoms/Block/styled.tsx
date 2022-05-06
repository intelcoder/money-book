import styled from 'styled-components/native'
import { _BlockStyledProps } from './types'

export const _Block = styled.Pressable<_BlockStyledProps>`
  background-color: ${({ theme: { colors }, bgColor = 'transparent' }) => colors[bgColor]};
  align-items: ${({ align }) => align || 'stretch'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  width: ${({ fluid }) => (fluid ? '100%' : 'auto')};
  border-radius: ${({ rounded, roundCorner }) => (rounded ? '18px' : roundCorner ? '8px' : '0')};

  padding: ${({ size }) => (size === 'sm' ? '4px 10px' : size === 'md' ? '4px 12px' : '4px 24px')};
`
