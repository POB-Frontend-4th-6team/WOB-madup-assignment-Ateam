import { useState, useEffect } from 'react'
import styles from './dashboard.module.scss'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { ko } from 'date-fns/esm/locale'
import { VectorImage } from 'assets/svgs'
import { VictoryChart, VictoryLine, VictoryAxis } from 'victory'

// import trendData from 'assets/jsons/trend-data-set.json'

const dummyData = {
  report: {
    daily: [
      {
        imp: 51479,
        click: 559,
        cost: 371790,
        conv: 37,
        convValue: 3668610,
        ctr: 1.09,
        cvr: 6.62,
        cpc: 665.1,
        cpa: 10048.38,
        roas: 986.74,
        date: '2022-02-01',
      },
      {
        imp: 53385,
        click: 690,
        cost: 387181,
        conv: 34,
        convValue: 2870740,
        ctr: 1.29,
        cvr: 4.93,
        cpc: 561.13,
        cpa: 11387.68,
        roas: 741.45,
        date: '2022-02-02',
      },
      {
        imp: 71403,
        click: 693,
        cost: 407050,
        conv: 53,
        convValue: 3065225,
        ctr: 0.97,
        cvr: 7.65,
        cpc: 587.37,
        cpa: 7680.19,
        roas: 753.03,
        date: '2022-02-03',
      },
      {
        imp: 71010,
        click: 693,
        cost: 429057,
        conv: 50,
        convValue: 4190550,
        ctr: 0.98,
        cvr: 7.22,
        cpc: 619.13,
        cpa: 8581.14,
        roas: 976.69,
        date: '2022-02-04',
      },
      {
        imp: 55885,
        click: 654,
        cost: 428091,
        conv: 27,
        convValue: 1385169,
        ctr: 1.17,
        cvr: 4.13,
        cpc: 654.57,
        cpa: 15855.22,
        roas: 323.57,
        date: '2022-02-05',
      },
    ],
  },
}

const Dashboard = () => {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date(new Date().setDate(new Date().getDate() + 7))) // 오늘 날짜에서 +7
  const [dayDif, setDayDif] = useState(0) // 날짜 차이
  const [tickFormat, setTickFormat] = useState<string[]>([])

  const onChange = (dates: any) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }

  useEffect(() => {
    if (endDate === null || startDate === null) return
    setDayDif((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
  }, [startDate, endDate])

  useEffect(() => {
    if (endDate === null || startDate === null) return
    if (dayDif === 0) return
    let box = []
    // 해당 월의 마지막 날짜
    const lastDay = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0).getDate()
    let start = startDate.getDate()
    let month = startDate.getMonth() + 1
    for (let i = 0; i <= dayDif; i += 1) {
      if (start > lastDay) {
        start = 1
        month += 1
      }
      box.push(`${month}월${start}일`)
      // setTickFormat(prev=>[...prev,`${month}월${start}일`]) 이런식으로 만들고 싶었는데 실패..
      start += 1
    }
    setTickFormat(box)
    box = []
  }, [startDate, endDate, dayDif])

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
            <VictoryChart width={1440}>
              <VictoryAxis tickFormat={tickFormat} />
              <VictoryAxis dependentAxis tickFormat={['5백만', '1천만', '1.5천만', '2천만']} />
              <VictoryLine
                data={[
                  { x: 1, y: 2000 },
                  { x: 2, y: 1000 },
                  { x: 3, y: 4000 },
                  { x: 4, y: 4 },
                  { x: 5, y: 6 },
                ]}
              />
            </VictoryChart>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
