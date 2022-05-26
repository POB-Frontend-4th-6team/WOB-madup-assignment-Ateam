import { useState, useCallback } from 'react'
import { useAppDispatch, useAppSelector } from 'hooks'
import ContentsContainer from 'routes/_components/ContentsContainer'
import Dropdown from 'routes/_components/Dropdown'
import { getTimeListFormat } from 'states/time'

import AdChart from './AdChart'
import styles from './totalAd.module.scss'

import TrendGrid from './TrendGrid'
import { getSelected, setSelected } from 'states/selcted'
import { getSelected2, setSelected2 } from 'states/selected2'
import Modal from 'routes/_components/Modal/ModalFrame'
import useToggle from 'hooks/useToggle'

const defaultArr = ['매드업', 'ROAS', '광고비', '노출 수', '클릭 수', '전환 수', '매출']
const MARK_COLORS = {
  매드업: '#111111',
  ROAS: '#4FADF7',
  광고비: '#525252',
  '노출 수': '#a5b5cc',
  '클릭 수': '#85DA47',
  '전환 수': '#deff84',
  매출: '#ff70c8',
}

const TotalAd = () => {
  const timeList = useAppSelector(getTimeListFormat)
  const selecteed = useAppSelector(getSelected)
  const selecteed2 = useAppSelector(getSelected2)

  const dispatch = useAppDispatch()

  const [isModalOpen, , openModal, closeModal] = useToggle()

  const [DropDownList, setDropDownList] = useState(['ROAS', '광고비', '노출 수', '클릭 수', '전환 수', '매출'])
  const [DropDownList2, setDropDownList2] = useState(['매드업', '광고비', '노출 수', '클릭 수', '전환 수', '매출'])

  const [val, setVal] = useState(true)
  const [dayOrWeek, setDayOrWeek] = useState('')

  const onClick1 = useCallback(
    (e: string) => {
      dispatch(setSelected(e))
      const data = defaultArr.filter((item) => item !== e)
      setDropDownList2(data)
      setVal(true)
    },
    [dispatch]
  )

  const onClick2 = useCallback(
    (e: string) => {
      dispatch(setSelected2(e))
      const data = defaultArr.filter((item) => item !== e)
      setDropDownList(data)
      setVal(false)
    },
    [dispatch]
  )

  const onDayOrWeek = useCallback(
    (e: string) => {
      if (timeList.length < 14 && e === '주간') openModal()
      else setDayOrWeek(e)
    },
    [openModal, timeList.length]
  )

  return (
    <section className={styles.totalAd}>
      <h2 className={styles.title}>통합 광고 현황</h2>
      <ContentsContainer>
        <div className={styles.mainCard}>
          <TrendGrid />
        </div>
        <div className={styles.dropDownBox}>
          <div className={styles.dropDowns}>
            <Dropdown items={DropDownList} onItemChange={onClick1} markColors={MARK_COLORS} defaultItem={selecteed} />
            <Dropdown items={DropDownList2} onItemChange={onClick2} markColors={MARK_COLORS} defaultItem={selecteed2} />
          </div>
          <Dropdown items={['일간', '주간']} onItemChange={onDayOrWeek} size='normal' unbordered />
        </div>
        <AdChart val={val} dayOrWeek={dayOrWeek} />
      </ContentsContainer>
      <Modal isOpen={isModalOpen} onClose={closeModal} width='200px' height='100px'>
        14일 이상 선택해주세요
      </Modal>
    </section>
  )
}

export default TotalAd
