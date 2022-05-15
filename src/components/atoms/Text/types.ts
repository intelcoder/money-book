import { TextProps } from 'react-native'
import { Colors } from '@theme/colors'

export type ColorType = 'white' | 'red' | 'grey' | 'base'
export type Sizetype = 'sm' | 'md' | 'lg'
export type WeightType = 'light' | 'medium' | 'bold'

export interface _TextProps extends TextProps {
  weight: WeightType
  size: Sizetype
  color: ColorType
  children: string
}

export type _TextStyledProps = Pick<_TextProps, 'weight' | 'size' | 'color'>

export interface getColorProps {
  colors: Colors
  color: ColorType
}
