import Block from '@atoms/Block/Block'
import Text from '@atoms/Text/Text'
import { Container } from './styled'
import { HomeSnapshotCardProps } from './types'

const SPENDING_TYPE = {
  EXPENSE: '지출',
  INCOME: '수입',
}

export default function HomeSnapshotCard({ type = 'EXPENSE', amount }: HomeSnapshotCardProps) {
  return (
    <Container fluid bgColor="yellow" roundCorner justify="space-between">
      <Text size="sm">{SPENDING_TYPE[type]}</Text>
      <Text size="md">{`$${amount}`}</Text>
    </Container>
  )
}
