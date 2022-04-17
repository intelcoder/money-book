import { Button as RnButton, GestureResponderEvent } from 'react-native';

type ButtonProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
};

function Button({ title, onPress }: ButtonProps) {
  return <RnButton title={title} onPress={onPress} />;
}


export default Button
