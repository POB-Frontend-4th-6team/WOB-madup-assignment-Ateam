import styles from './totalAd.module.scss'
import { VictoryChart, VictoryLine, VictoryAxis, VictoryVoronoiContainer, VictoryTooltip } from 'victory'
import trendData from 'assets/jsons/trend-data-set.json'
import dayjs from 'dayjs'
import { useAppSelector } from 'hooks'
import { getTimeListFormat } from 'states/time'

import { dataType } from 'types/totalAd'
import { useState, useEffect, useRef, useCallback } from 'react'
import { getColor, getData } from './getData'

interface Props {
  Selected: string
  Selected2: string
  val: boolean
  dayOrWeek: string
}

const AdChart = ({ Selected, Selected2, val, dayOrWeek }: Props) => {
  const timeList = useAppSelector(getTimeListFormat)

  const [dataList, setDataList] = useState<dataType[]>([])
  const [dataList2, setDataList2] = useState<dataType[]>([])

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
        color.current = getColor(Selected)
        if (Selected === '매드업') box = []
        else box.push({ x: i + 1, y: getData(Selected, selectedDay) })
      } else {
        color2.current = getColor(Selected2)
        if (Selected2 === '매드업') box = []
        else box.push({ x: i + 1, y: getData(Selected2, selectedDay) })
      }
    }
    return box
  }, [Selected, Selected2, val, timeList])

  useEffect(() => {
    if (timeList.length === 0) return
    if (val) setDataList(VictioryLineData)
    else setDataList2(VictioryLineData)
  }, [timeList, val, VictioryLineData])

  const choiceWeek = useCallback(() => {
    if (dataList) {
      // let sum = 0
      // const arr = []
      // for (let i = 0; i < dataList.length; i += 1) {
      //   if (i % 7 === 0 && i !== 0) {
      //     arr.push(sum / 7)
      //     sum = 0
      //   }
      // }
      console.log(1)
    }
  }, [dataList])

  const choiceDay = useCallback(() => {}, [])

  useEffect(() => {
    if (dayOrWeek === '주간') choiceWeek()
    if (dayOrWeek === '일간') choiceDay()
  }, [dayOrWeek, choiceDay, choiceWeek])

  return (
    <div className={styles.mainChart}>
      <VictoryChart width={1440} height={500} containerComponent={<VictoryVoronoiContainer responsive={false} />}>
        <VictoryAxis
          tickFormat={timeList.map((date) => {
            const arr = date.split('-')
            return `${arr[1]}월${arr[2]}일`
          })}
          style={{ tickLabels: { fontSize: 14 } }}
        />

        {dataList?.length !== 0 &&
          (Selected === 'ROAS' ? (
            <VictoryAxis
              dependentAxis
              style={{ grid: { stroke: 'lightGrey' }, tickLabels: { fontSize: 14 } }}
              tickFormat={(y) => `${y}%`}
            />
          ) : (
            <VictoryAxis
              dependentAxis
              style={{ grid: { stroke: 'lightGrey' }, tickLabels: { fontSize: 14 } }}
              tickFormat={(y) => y}
            />
          ))}
        {dataList2?.length !== 0 &&
          (Selected2 === 'ROAS' ? (
            <VictoryAxis
              dependentAxis
              style={{ grid: { stroke: 'lightGrey' }, tickLabels: { fontSize: 14 } }}
              tickFormat={(y) => `${y}%`}
              orientation='right'
            />
          ) : (
            <VictoryAxis
              dependentAxis
              style={{ grid: { stroke: 'lightGrey' }, tickLabels: { fontSize: 14 } }}
              tickFormat={(y) => y / 100}
              orientation='right'
            />
          ))}

        <VictoryLine
          style={{
            data: {
              stroke: color.current,
              strokeWidth: '5px',
            },
          }}
          data={dataList}
          labels={({ datum }) => datum.y}
          labelComponent={<VictoryTooltip />}
        />
        {dataList2 && (
          <VictoryLine
            style={{
              data: {
                stroke: color2.current,
                strokeWidth: '5px',
              },
            }}
            data={dataList2}
            labels={({ datum }) => datum.y}
            labelComponent={<VictoryTooltip />}
          />
        )}
      </VictoryChart>
    </div>
  )
}

export default AdChart
