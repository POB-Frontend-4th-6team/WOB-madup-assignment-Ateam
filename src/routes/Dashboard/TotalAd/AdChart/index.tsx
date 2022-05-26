import { useState, useEffect, useRef, useCallback } from 'react'
import { VictoryChart, VictoryLine, VictoryAxis, VictoryVoronoiContainer, VictoryTooltip } from 'victory'
import dayjs from 'dayjs'

import styles from './adChart.module.scss'
import trendData from 'assets/jsons/trend-data-set.json'
import { useAppSelector } from 'hooks'
import { getTimeListFormat } from 'states/time'
import { dataType } from 'types/totalAd'
import { getColor, getData, getWeekData } from './getData'
import ResponsiveVictoryChart from '../../Media/BarChart/ResponsiveVictoryChart'
import { getSelected } from 'states/selcted'
import { getSelected2 } from 'states/selected2'

interface Props {
  val: boolean
  dayOrWeek: string
}

const AdChart = ({ val, dayOrWeek }: Props) => {
  const timeList = useAppSelector(getTimeListFormat)
  const selected = useAppSelector(getSelected)
  const selected2 = useAppSelector(getSelected2)

  const [dataList, setDataList] = useState<dataType[]>([])
  const [dataList2, setDataList2] = useState<dataType[]>([])

  const [weekDataList, setWeekDataList] = useState<dataType[]>([])
  const [weekDataList2, setWeekDataList2] = useState<dataType[]>([])

  const color = useRef<string | undefined>('')
  const color2 = useRef<string | undefined>('')

  const VictioryLineData = useCallback(() => {
    let box = []

    for (let i = 0; i < timeList.length; i += 1) {
      const selectedDay = trendData.report.daily.find((item) => {
        const now = dayjs(item.date)
        const FullDate = `${now.get('y')}-${now.get('M') + 1}-${now.get('D')}`
        return FullDate === timeList[i]
      })
      if (selectedDay === undefined) break
      if (val) {
        color.current = getColor(selected)
        if (selected === '매드업') box = []
        else box.push({ x: i + 1, y: getData(selected, selectedDay) })
      } else {
        color2.current = getColor(selected2)
        if (selected2 === '매드업') box = []
        else box.push({ x: i + 1, y: getData(selected2, selectedDay) })
      }
    }
    return box
  }, [selected, selected2, val, timeList])

  const choiceWeek = useCallback(() => {
    if (dataList.length !== 0) setWeekDataList(getWeekData(dataList, timeList))
    if (dataList2.length !== 0) setWeekDataList2(getWeekData(dataList2, timeList))
  }, [dataList, dataList2, timeList])

  useEffect(() => {
    if (timeList.length === 0) return
    if (val) setDataList(VictioryLineData)
    else setDataList2(VictioryLineData)
  }, [timeList, val, VictioryLineData])

  useEffect(() => {
    if (dayOrWeek === '주간') choiceWeek()
  }, [dayOrWeek, choiceWeek])

  return (
    <div className={styles.mainChart}>
      <ResponsiveVictoryChart>
        <VictoryChart width={1440} height={500} containerComponent={<VictoryVoronoiContainer responsive={false} />}>
          <VictoryAxis
            tickFormat={
              dayOrWeek === '주간'
                ? weekDataList.map((e) => `${e.x}`)
                : timeList.map((date) => {
                    const arr = date.split('-')
                    return `${arr[1]}월${arr[2]}일`
                  })
            }
            style={{ tickLabels: { fontSize: 14, fill: '#94a2ad' } }}
          />

          {dataList?.length !== 0 && (
            <VictoryAxis
              dependentAxis
              style={{ grid: { stroke: 'lightGrey' }, tickLabels: { fontSize: 14, fill: '#94a2ad' } }}
              tickFormat={(y) => (selected === 'ROAS' ? `${y}%` : y)}
            />
          )}
          {dataList2?.length !== 0 && (
            <VictoryAxis
              dependentAxis
              style={{ grid: { stroke: 'lightGrey' }, tickLabels: { fontSize: 14, fill: '#94a2ad' } }}
              tickFormat={(y) => (selected === 'ROAS' ? `${y}%` : y)}
              orientation='right'
            />
          )}

          <VictoryLine
            style={{
              data: {
                stroke: color.current,
                strokeWidth: '5px',
              },
            }}
            data={dayOrWeek === '주간' ? weekDataList : dataList}
            labels={({ datum }) => datum.y}
            labelComponent={
              <VictoryTooltip
                style={{ fill: 'white', fontSize: 14 }}
                flyoutStyle={{ fill: '#3a474e' }}
                flyoutHeight={40}
                flyoutPadding={20}
              />
            }
          />
          {dataList2 && (
            <VictoryLine
              style={{
                data: {
                  stroke: color2.current,
                  strokeWidth: '5px',
                },
              }}
              data={dayOrWeek === '주간' ? weekDataList2 : dataList2}
              labels={({ datum }) => datum.y}
              labelComponent={
                <VictoryTooltip
                  style={{ fill: 'white', fontSize: 14 }}
                  flyoutStyle={{ fill: '#3a474e' }}
                  flyoutHeight={40}
                  flyoutPadding={20}
                />
              }
            />
          )}
        </VictoryChart>
      </ResponsiveVictoryChart>
    </div>
  )
}

export default AdChart
