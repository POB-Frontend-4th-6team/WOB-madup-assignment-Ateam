import styles from './adManage.module.scss'

import { useAppDispatch, useState, useMount } from 'hooks'
import { setStatusOption } from 'states/ad'

import ContentsContainer from 'routes/_components/ContentsContainer'
import Dropdown from 'routes/_components/Dropdown'
import CardList from './CardList'
import Loading from 'routes/_components/Loading'

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

  return (
    <>
      <h1 className={styles.pageHeader}>광고관리</h1>
      {isLoading && <Loading size={150} color='#3a474e' style={{ margin: '50px 0 0 50px' }} />}
      {!isLoading && (
        <ContentsContainer>
          <div className={styles.dropdownAndButtonContainer}>
            <Dropdown items={DROPDOWN_ITEMS} onItemChange={dispatchCurrentAdState} />
            <button type='button' className={styles.makeAdButton}>
              광고 만들기
            </button>
          </div>

          <CardList />
        </ContentsContainer>
      )}
    </>
  )
}

export default AdManage
