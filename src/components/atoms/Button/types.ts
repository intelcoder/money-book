import { GestureResponderEvent } from 'react-native'

export interface ButtonProps {
  onPress?: (event: GestureResponderEvent) => void
  fluid?: boolean
  rounded?: boolean
  roundCorner?: boolean
  children: JSX.Element | JSX.Element[]
  bgColor?: 'primary' | 'yellowLight' | 'greyLight' | 'transparent' | 'yellow'
  size?: 'sm' | 'md' | 'lg'
}

export interface _ButtonProps extends Omit<ButtonProps, 'onPress' | 'children'> {}
