import styled, { css } from 'styled-components/native'
import { getColorProps, _TextStyledProps } from './types'

// weight bold
// color highlight,
// size sm md lg

const getColor = ({ colors, color }: getColorProps) => {
  switch (color) {
    case 'white':
      return colors.white
    case 'grey':
      return 'grey'
    case 'red':
      return colors.red
  }

  return colors.fontBase
}

export const _Text = styled.Text<_TextStyledProps>`
  font-weight: ${({ theme: { font }, weight = 'medium' }) => font.weight[weight]};
  color: ${({ theme: { colors }, color = 'base' }) => getColor({ colors, color })};
  font-size: ${({ theme: { font }, size = 'sm' }) => font.size[size]}px;
`
