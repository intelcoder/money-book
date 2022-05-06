import styled from 'styled-components/native'
import { DotProps } from './types'

export const _Dot = styled.View<DotProps>`
  width: 8px;
  height: 8px;
  border-radius: 1000px;
  background-color: ${({ theme: { colors }, color = 'yellow' }) => colors[color]};
`
