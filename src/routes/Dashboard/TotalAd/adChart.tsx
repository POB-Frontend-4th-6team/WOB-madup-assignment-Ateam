import { useState, useEffect } from 'react'
import styles from './totalAd.module.scss'
import { VictoryChart, VictoryLine, VictoryAxis, VictoryVoronoiContainer } from 'victory'
import { dataType } from 'types/totalAd'
import trendData from 'assets/jsons/trend-data-set.json'
import dayjs from 'dayjs'
import { useAppSelector } from 'hooks'
import { getTickFormat } from 'states/totalAd'

const AdChart = () => {
  const tickFormat = useAppSelector(getTickFormat)

  const [selectedDayDate, setSelectedDayData] = useState<dataType[]>()

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
    <div className={styles.mainChart}>
      <VictoryChart width={1440} height={500} containerComponent={<VictoryVoronoiContainer labels={() => '123'} />}>
        <VictoryAxis
          tickFormat={tickFormat.map((date) => {
            const arr = date.split('-')
            return `${arr[1]}월${arr[2]}일`
          })}
        />
        <VictoryAxis dependentAxis style={{ grid: { stroke: 'lightGrey' } }} tickFormat={(y) => y} />
        <VictoryAxis
          dependentAxis
          style={{ grid: { stroke: 'lightGrey' } }}
          tickFormat={(y) => y}
          orientation='right'
        />
        <VictoryLine
          style={{
            data: {
              // 선 색상
              stroke: '#c43a31',
              strokeWidth: '5px',
            },
          }}
          data={selectedDayDate}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
        />
      </VictoryChart>
    </div>
  )
}

export default AdChart
