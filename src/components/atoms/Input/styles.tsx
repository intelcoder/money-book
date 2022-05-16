import styled from 'styled-components/native'
import { InputProps } from './types'

export const AppInput = styled.TextInput<InputProps>`
  ${({ underline }) =>
    underline &&
    `
    borderBottomWidth: 1px;
  `}
  height: 36px;
`
