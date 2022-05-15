import { GestureResponderEvent } from 'react-native'

export interface IButtonProps {
  onPress?: (event: GestureResponderEvent) => void
  fluid?: boolean
  rounded?: boolean
  roundCorner?: boolean
  children: JSX.Element | JSX.Element[]
  bgColor?: 'primary' | 'yellowLight' | 'greyLight' | 'transparent' | 'yellow'
  size?: 'sm' | 'md' | 'lg'
}

export interface _ButtonProps extends Omit<IButtonProps, 'onPress' | 'children'> {}
