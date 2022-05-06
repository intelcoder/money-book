import HomeSnapshotCard from './HomeSnapshotCard'

export interface HomeSnapshotCardProps {
  type?: 'EXPENSE' | 'INCOME',
  amount: number,
}
