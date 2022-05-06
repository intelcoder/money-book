import { Colors } from '@theme/colors'

export type ColorType = 'white' | 'red' | 'grey' | 'base'
export type Sizetype = 'sm' | 'md' | 'lg'
export type WeightType = 'light' | 'medium' | 'bold'

export interface _TextProps {
  text: string
  weight?: WeightType
  size?: Sizetype
  color?: ColorType
}

export interface _TextStyledProps extends Pick<_TextProps, 'weight' | 'size' | 'color'> {}

export interface getColorProps {
  colors: Colors
  color: ColorType
}
