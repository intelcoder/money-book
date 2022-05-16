import { GestureResponderEvent, StyleProp, ViewStyle, ViewProps } from 'react-native'

export interface BlockProps extends ViewProps {
  onPress?: (event: GestureResponderEvent) => void
  fluid?: boolean
  rounded?: boolean
  roundCorner?: boolean
  children: JSX.Element | JSX.Element[]
  bgColor?: 'primary' | 'yellowLight' | 'greyLight' | 'transparent' | 'yellow'
  size?: 'sm' | 'md' | 'lg'
  flex?: number
  justify?: 'center' | 'space-between' | 'flex-start' | 'flex-end' | 'flex'
  align?: 'center' | 'flex-start' | 'flex-end' | 'stretch'
  flexDirection?: 'column' | 'row'
  style?: StyleProp<ViewStyle>
}

export type BlockStyledProps = Omit<BlockProps, 'children'>
