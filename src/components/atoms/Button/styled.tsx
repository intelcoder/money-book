import styled, { css } from 'styled-components/native'
import { _ButtonProps } from './types'

const sizes = {
  sm: '4px 10px',
  md: '12px 12px',
  lg: '18px 24px',
}

export const AppButton = styled.Pressable<_ButtonProps>`
  background-color: ${({ theme: { colors }, bgColor = 'transparent' }) => colors[bgColor]};
  align-items: center;
  justify-content: center;
  width: ${({ fluid }) => (fluid ? '100%' : 'auto')};
  border-radius: ${({ rounded, roundCorner }) => (rounded ? '18px' : roundCorner ? '8px' : '0')};

  padding: ${({ size = 'sm' }) => sizes[size]};
`
