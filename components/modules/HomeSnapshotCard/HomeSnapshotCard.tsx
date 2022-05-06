import Block from '@atoms/Block/Block'
import Text from '@atoms/Text/Text'
import { _Container } from './styled'
import { HomeSnapshotCardProps } from './types'

const SPENDING_TYPE = {
  EXPENSE: '지출',
  INCOME: '수입',
}

const HomeSnapshotCard = ({ type = 'EXPENSE', amount }: HomeSnapshotCardProps) => {
  return (
    <_Container fluid bgColor="yellow" roundCorner justify="space-between">
      <Text text={SPENDING_TYPE[type]} size="sm" />
      <Text text={`$${amount}`} size="md" />
    </_Container>
  )
}

export default HomeSnapshotCard
