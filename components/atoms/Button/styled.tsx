import styled, { css } from 'styled-components/native'
import { _ButtonProps } from './types'

export const AppButton = styled.Pressable<_ButtonProps>`
  background-color: ${({ theme: { colors }, bgColor = 'transparent' }) => colors[bgColor]};
  align-items: center;
  justify-content: center;
  width: ${({ fluid }) => (fluid ? '100%' : 'auto')};
  border-radius: ${({ rounded, roundCorner }) => (rounded ? '18px' : roundCorner ? '8px' : '0')};

  padding: ${({ size }) => (size === 'sm' ? '4px 10px' : size === 'md' ? '4px 12px' : '4px 24px')};
`
