import { useNavigation } from '@react-navigation/native'

import HomeSnapshotCard from '@components/modules/HomeSnapshotCard/HomeSnapshotCard'
import Block from '@atoms/Block/Block'
import Text from '@atoms/Text/Text'
import Button from '@atoms/Button/Button'
import { colors } from '../../../theme/colors'

export default function Home() {
  const navigation = useNavigation()
  return (
    <Block>
      <Text>stess</Text>
      <HomeSnapshotCard amount={1000} />
      <HomeSnapshotCard type="INCOME" amount={400} />
      <Button
        bgColor="primary"
        size="md"
        onPress={() => {
          navigation.navigate('Modal', { type: 'expenseForm' })
        }}>
        <Text color="white">Open Modal</Text>
      </Button>
    </Block>
  )
}
