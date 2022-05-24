import { ReactNode } from 'react'

import Portal from '../index'
import { useAppSelector, useAppDispatch } from 'hooks'
import { getModal, setModal } from 'states/modal'

import styles from './modal.module.scss'
import { Close } from 'assets/svgs/madup'

interface Props {
  children?: ReactNode
  width: string
  height: string
}

const ModalFrame = ({ children, width, height }: Props): JSX.Element => {
  const modal = useAppSelector(getModal)
  const dispatch = useAppDispatch()

  const handleModalClose = () => {
    console.log('handleModalClose')
    dispatch(setModal(false))
  }

  return (
    <Portal>
      {modal && (
        <div className={styles.modal}>
          <div className={styles.modalBox} style={{ width: `${width}`, height: `${height}` }}>
            {children}
            <button type='button' className={styles.btn} onClick={handleModalClose}>
              <Close />
            </button>
          </div>
        </div>
      )}
    </Portal>
  )
}

export default ModalFrame
