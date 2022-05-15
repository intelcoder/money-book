import { createStackNavigator } from '@react-navigation/stack'
import Home from '@components/screens/Home/Home'
import { RootTabScreenProps } from '../types'

const Stack = createStackNavigator()

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return <Home />
}
