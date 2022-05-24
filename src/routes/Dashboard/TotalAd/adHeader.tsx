import { ko } from 'date-fns/esm/locale'
import { VectorImage } from 'assets/svgs'
import DatePicker from 'react-datepicker'
import { useState, useEffect } from 'react'
import styles from './totalAd.module.scss'

import 'react-datepicker/dist/react-datepicker.css'
import { useAppDispatch } from 'hooks'
import { setTickFormat } from 'states/totalAd'

const AdHeader = () => {
  const dispatch = useAppDispatch()

  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date(new Date().setDate(new Date().getDate() + 7))) // 오늘 날짜에서 +7

  const onChange = (dates: any) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }

  useEffect(() => {
    if (endDate === null || startDate === null) return
    // 몇일이 차이나는 지
    const dayDif = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
    let box = []
    // 해당 월의 마지막 날짜
    const lastDay = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0).getDate()
    let start = startDate.getDate()
    let month = startDate.getMonth() + 1
    const year = startDate.getFullYear()
    for (let i = 0; i <= dayDif; i += 1) {
      if (start > lastDay) {
        start = 1
        month += 1
      }
      box.push(`${year}-${month}-${start}`)
      start += 1
    }
    dispatch(setTickFormat(box))
    box = []
  }, [startDate, endDate, dispatch])

  return (
    <div className={styles.header}>
      <div className={styles.headerBox}>
        <p className={styles.headerTitle}>대시보드</p>
        <div className={styles.date}>
          <DatePicker
            selected={startDate}
            onChange={onChange}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            selectsRange
            locale={ko}
            dateFormat='yyyy년 MM월 dd일'
            className={styles.datePicker}
          />
          <VectorImage />
        </div>
      </div>
    </div>
  )
}

export default AdHeader
