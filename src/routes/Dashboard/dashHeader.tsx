import { FocusEvent, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import { ko } from 'date-fns/esm/locale'

import { VectorImage } from 'assets/svgs'
import styles from './dashboard.module.scss'
import 'react-datepicker/dist/react-datepicker.css'
import { useAppDispatch, useAppSelector } from 'hooks'

import { setTimeListFormat } from 'states/time'
import { getStartDate, setStartDate } from 'states/startDate'
import { getEndDate, setEndDate } from 'states/endDate'

const DashHeader = () => {
  const dispatch = useAppDispatch()

  const startDate = useAppSelector(getStartDate)
  const endDate = useAppSelector(getEndDate)

  const handleChange = (dates: any) => {
    const [start, end] = dates
    dispatch(setStartDate(start))
    dispatch(setEndDate(end))
  }

  const handleChangeRaw = (e: FocusEvent<HTMLInputElement>) => {
    e.preventDefault()
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
    dispatch(setTimeListFormat(box))
    box = []
  }, [startDate, endDate, dispatch])

  return (
    <div className={styles.header}>
      <h1 className={styles.headerTitle}>대시보드</h1>
      <div className={styles.date}>
        <DatePicker
          selected={startDate}
          onChange={handleChange}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          selectsRange
          locale={ko}
          dateFormat='yyyy년 MM월 dd일'
          className={styles.datePicker}
          onChangeRaw={handleChangeRaw}
          minDate={new Date('2022-02-01')}
          maxDate={new Date('2022-04-20')}
        />
        <VectorImage />
      </div>
    </div>
  )
}

export default DashHeader
