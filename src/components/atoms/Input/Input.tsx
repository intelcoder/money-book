import { AppInput } from './styles'
import { InputProps } from './types'

export default function Input({ underline = false, ...props }: InputProps) {
  return <AppInput {...props} underline={underline} />
}
