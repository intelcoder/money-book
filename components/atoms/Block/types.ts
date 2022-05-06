import { GestureResponderEvent } from 'react-native'

export interface BlockProps {
  onPress?: (event: GestureResponderEvent) => void
  fluid?: boolean
  rounded?: boolean
  roundCorner?: boolean
  children: JSX.Element | JSX.Element[]
  bgColor?: 'primary' | 'yellowLight' | 'greyLight' | 'transparent' | 'yellow'
  size?: 'sm' | 'md' | 'lg',
  flex?: number,
  justify?: 'center' | 'space-between' | 'flex-start' | 'flex-end' | 'flex',
  align?: 'center' | 'flex-start' | 'flex-end' | 'stretch'
}

export interface _BlockStyledProps extends Omit<BlockProps, 'onPress' | 'children'> {}
