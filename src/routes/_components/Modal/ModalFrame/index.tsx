import { ReactNode } from 'react'

import Portal from '../index'
import { useAppSelector, useAppDispatch } from 'hooks'
import { getModal, setModal } from 'states/modal'

import styles from './modal.module.scss'

interface Props {
  children?: ReactNode
  width: string
  height: string
  text?: string
}

const ModalFrame = ({ children, width, height, text }: Props): JSX.Element => {
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
            <p className={styles.modalTitle}>{text}</p>
            {children}
            <div className={styles.btnWrap}>
              <button type='button' className={styles.btn} onClick={handleModalClose}>
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </Portal>
  )
}

export default ModalFrame
