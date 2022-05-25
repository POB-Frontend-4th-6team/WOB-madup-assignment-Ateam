import { useAppSelector } from 'hooks'
import { useState, useCallback } from 'react'
import ContentsContainer from 'routes/_components/ContentsContainer'
import Dropdown from 'routes/_components/Dropdown'
import { getTimeListFormat } from 'states/time'
import AdChart from './adChart'
import styles from './totalAd.module.scss'

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

  const [DropDownList, setDropDownList] = useState(['ROAS', '광고비', '노출 수', '클릭 수', '전환 수', '매출'])
  const [DropDownList2, setDropDownList2] = useState(['매드업', '광고비', '노출 수', '클릭 수', '전환 수', '매출'])

  const [Selected, setSelected] = useState(DropDownList[0])
  const [Selected2, setSelected2] = useState(DropDownList2[0])

  const [val, setVal] = useState(true)
  const [dayOrWeek, setDayOrWeek] = useState('')

  const onClick1 = useCallback((e: string) => {
    setSelected(e)
    const data = defaultArr.filter((item) => item !== e)
    setDropDownList2(data)
    setVal(true)
  }, [])

  const onClick2 = useCallback((e: string) => {
    setSelected2(e)
    const data = defaultArr.filter((item) => item !== e)
    setDropDownList(data)
    setVal(false)
  }, [])

  const onDayOrWeek = useCallback(
    (e: string) => {
      if (timeList.length < 14 && e === '주간') alert('14일 이상 선택하세요!')
      else setDayOrWeek(e)
    },
    [timeList]
  )

  return (
    <>
      <div className={styles.titleBox}>
        <p className={styles.title}>통합 광고 현황</p>
      </div>
      <ContentsContainer>
        <div className={styles.mainContainer}>
          <div className={styles.mainCard} />
          <div className={styles.dropDownBox}>
            <div className={styles.dropDownLines}>
              <Dropdown items={DropDownList} onItemChange={onClick1} markColors={MARK_COLORS} />
              <Dropdown items={DropDownList2} onItemChange={onClick2} markColors={MARK_COLORS} />
            </div>
            <Dropdown items={['일간', '주간']} onItemChange={onDayOrWeek} size='normal' />
          </div>

          <AdChart Selected={Selected} Selected2={Selected2} val={val} dayOrWeek={dayOrWeek} />
        </div>
      </ContentsContainer>
    </>
  )
}

export default TotalAd
