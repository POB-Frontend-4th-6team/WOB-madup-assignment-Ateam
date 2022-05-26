import { useState } from 'react'
import { useAppDispatch, useAppSelector, useMount } from 'hooks'
import { setStatusOption, getStatusOption } from 'states/ad'

import ContentsContainer from 'routes/_components/ContentsContainer'
import Dropdown from 'routes/_components/Dropdown'
import Loading from 'routes/_components/Loading'

import styles from './adManage.module.scss'
import CardList from './CardList'

const DROPDOWN_ITEMS = ['전체보기', '진행중', '종료']

const AdManage = () => {
  const [isLoading, setIsLoading] = useState(false)

  const dispatch = useAppDispatch()
  const statusCategory = useAppSelector(getStatusOption)

  const dispatchCurrentAdState = (item: string) => {
    if (item === '전체보기') dispatch(setStatusOption('전체보기'))
    else if (item === '진행중') dispatch(setStatusOption('진행중'))
    else if (item === '종료') dispatch(setStatusOption('종료'))
    else dispatch(setStatusOption('전체보기'))
  }

  useMount(() => {
    setIsLoading(true)
    const timeout = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timeout)
  })

  if (isLoading) return <Loading size='80px' />

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>광고관리</h1>
      </div>
      <section className={styles.adContainer}>
        <ContentsContainer>
          <div className={styles.dropDownBox}>
            <Dropdown items={DROPDOWN_ITEMS} onItemChange={dispatchCurrentAdState} defaultItem={statusCategory} />
            <button type='button' className={styles.adButton}>
              광고 만들기
            </button>
          </div>
          <CardList />
        </ContentsContainer>
      </section>
    </div>
  )
}

export default AdManage
