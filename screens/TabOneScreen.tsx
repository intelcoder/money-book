import { StyleSheet } from 'react-native'

import EditScreenInfo from '../components/EditScreenInfo'
import { Text, View } from '../components/Themed'
import { RootTabScreenProps } from '../types'
import Button from '@components/atoms/Button/Button'
import AppText from '../components/atoms/Text/Text'
import Dot from '../components/atoms/Dot/Dot'
import HomeSnapshotCard from '@components/modules/HomeSnapshotCard/HomeSnapshotCard'

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab On 1e</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
      <HomeSnapshotCard amount={1000} />
      <HomeSnapshotCard type="INCOME" amount={400} />
      <Button>
        <AppText text="Test" />
      </Button>
      <Button fluid rounded>
        <AppText text="Test" />
      </Button>
      <View style={{ marginTop: '10%' }}>
        <Button rounded size="sm">
          <AppText text="Get $5" color="white" weight="bold" />
        </Button>
      </View>
      <AppText text="Test" color="red" />
      <View>
        <AppText text="111" />
        <Button
          roundCorner
          onPress={() => {
            console.log('onpress')
          }}>
          <View
            style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'transparent' }}>
            <Dot color="yellow" />
            <AppText text="Test1" />
          </View>
        </Button>
        <Dot color="yellow" />
        <Dot color="red" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
