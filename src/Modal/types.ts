import { MODAL_TYPES } from './constant'

type ModalTypeValues = keyof typeof MODAL_TYPES[keyof typeof MODAL_TYPES]
export interface ModalProps {
  type: ModalTypeValues
}
