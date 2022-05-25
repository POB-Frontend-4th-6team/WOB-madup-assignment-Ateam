import styles from './adManage.module.scss'

import { useAppDispatch, useState, useMount } from 'hooks'
import { setStatusOption } from 'states/ad'

import { setModal } from 'states/modal'

import ContentsContainer from 'routes/_components/ContentsContainer'
import Dropdown from 'routes/_components/Dropdown'
import CardList from './CardList'
import Loading from 'routes/_components/Loading'
import Modal from 'routes/_components/Modal/ModalFrame'
import CardModalContents from './CardModalContents'

const DROPDOWN_ITEMS = ['전체보기', '진행중', '종료']

const AdManage = () => {
  const [isLoading, setIsLoading] = useState(true)

  useMount(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  })

  const dispatch = useAppDispatch()

  const dispatchCurrentAdState = (item: string) => {
    if (item === '전체보기') dispatch(setStatusOption('All'))
    else if (item === '진행중') dispatch(setStatusOption('Active'))
    else if (item === '종료') dispatch(setStatusOption('Ended'))
    else dispatch(setStatusOption('All'))
  }

  const handleModalOpen = () => dispatch(setModal(true))

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>광고관리</h1>
      </div>

      {isLoading && <Loading size='200' color='#D1D8DC' />}
      {!isLoading && (
        <section className={styles.adContainer}>
          <ContentsContainer>
            <div className={styles.dropDownBox}>
              <Dropdown items={DROPDOWN_ITEMS} onItemChange={dispatchCurrentAdState} />
              <button type='button' className={styles.adButton} onClick={handleModalOpen}>
                광고 만들기
              </button>
            </div>
            <CardList />
          </ContentsContainer>
        </section>
      )}

      <Modal width='500px' height='500px' text='광고 카드 생성'>
        <CardModalContents />
      </Modal>
    </div>
  )
}

export default AdManage
