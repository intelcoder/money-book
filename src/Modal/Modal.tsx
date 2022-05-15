import { ModalProps } from './types'
import { MODAL_TYPES } from './constant'
import ExpenseForm from '@modal/ExpenseForm/ExpenseForm'

const modalMap = {
  [MODAL_TYPES.EXPENSE_FORM]: ExpenseForm,
}

export default function Modal({ route }: ModalProps) {
  const params = route.params
  const ModalContent = modalMap[params?.type]
  if (!ModalContent) return null
  return <ModalContent />
}
