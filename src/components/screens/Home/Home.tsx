import HomeSnapshotCard from '@components/modules/HomeSnapshotCard/HomeSnapshotCard'
import Block from '@atoms/Block/Block'
import Text from '@atoms/Text/Text'

export default function Home() {
  return (
    <Block>
      <Text>stess</Text>
      <HomeSnapshotCard amount={1000} />
      <HomeSnapshotCard type="INCOME" amount={400} />
    </Block>
  )
}
