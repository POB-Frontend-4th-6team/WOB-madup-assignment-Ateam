import { useState, useEffect } from 'react'
import styles from './dashboard.module.scss'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { ko } from 'date-fns/esm/locale'
import { VectorImage } from 'assets/svgs'
import { VictoryChart, VictoryLine, VictoryAxis, VictoryVoronoiContainer } from 'victory'
import { dataType } from 'types/totalAd'
import trendData from 'assets/jsons/trend-data-set.json'
import dayjs from 'dayjs'

const Dashboard = () => {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date(new Date().setDate(new Date().getDate() + 7))) // 오늘 날짜에서 +7
  const [tickFormat, setTickFormat] = useState<string[]>([])
  const [selectedDayDate, setSelectedDayData] = useState<dataType[]>()

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
    setTickFormat(box)
    box = []
  }, [startDate, endDate])

  useEffect(() => {
    if (tickFormat.length === 0) return
    let box = []
    for (let i = 0; i < tickFormat.length; i += 1) {
      const selectedDay = trendData.report.daily.find((item) => {
        const now = dayjs(item.date)
        const FullDate = `${now.get('y')}-${now.get('M') + 1}-${now.get('D')}`
        return FullDate === tickFormat[i]
      })
      // y에 선택된 데이터
      if (selectedDay?.roas === undefined) break
      box.push({ x: i + 1, y: selectedDay?.roas })
    }
    setSelectedDayData(box)
    box = []
  }, [tickFormat])

  return (
    <div className={styles.container}>
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
      <div className={styles.main}>
        <p className={styles.mainTitle}>통합 광고 현황</p>
        <div className={styles.mainContainer}>
          <div className={styles.mainCard} />
          <div className={styles.mainChart}>
            <VictoryChart
              width={1440}
              height={500}
              containerComponent={<VictoryVoronoiContainer labels={() => '123'} />}
            >
              <VictoryAxis
                tickFormat={tickFormat.map((date) => {
                  const arr = date.split('-')
                  return `${arr[1]}월${arr[2]}일`
                })}
              />
              <VictoryAxis dependentAxis style={{ grid: { stroke: 'lightGrey' } }} tickFormat={(y) => y} />
              <VictoryLine
                style={{
                  data: {
                    // 선 색상
                    stroke: '#c43a31',
                    strokeWidth: '5px',
                  },
                }}
                data={selectedDayDate}
              />
            </VictoryChart>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
