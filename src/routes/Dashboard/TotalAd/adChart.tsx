import styles from './totalAd.module.scss'
import { VictoryChart, VictoryLine, VictoryAxis, VictoryVoronoiContainer } from 'victory'
import trendData from 'assets/jsons/trend-data-set.json'
import dayjs from 'dayjs'
import { useAppSelector } from 'hooks'
import { getTimeListFormat } from 'states/time'

import { dataType } from 'types/totalAd'
import { useState, useEffect, useRef, useCallback } from 'react'
import { getConv, getSales } from 'utils/math'

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

  const choiceWeek = useCallback(() => {}, [])

  const choiceDay = useCallback(() => {}, [])

  useEffect(() => {
    if (dayOrWeek === '주간') choiceWeek()
    if (dayOrWeek === '일간') choiceDay()
  }, [dayOrWeek, choiceDay, choiceWeek])

  return (
    <div className={styles.mainChart}>
      <VictoryChart
        width={1440}
        height={500}
        containerComponent={<VictoryVoronoiContainer labels={(d) => `${d.x}, ${d.y}`} />}
      >
        <VictoryAxis
          tickFormat={timeList.map((date) => {
            const arr = date.split('-')
            return `${arr[1]}월${arr[2]}일`
          })}
          style={{ tickLabels: { fontSize: 18 } }}
        />
        {dataList?.length !== 0 &&
          (Selected === 'ROAS' ? (
            <VictoryAxis
              dependentAxis
              style={{ grid: { stroke: 'lightGrey' }, tickLabels: { fontSize: 18 } }}
              tickFormat={(y) => `${y}%`}
            />
          ) : (
            <VictoryAxis
              dependentAxis
              style={{ grid: { stroke: 'lightGrey' }, tickLabels: { fontSize: 18 } }}
              tickFormat={(y) => y}
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
          />
        )}
        {dataList2?.length !== 0 &&
          (Selected2 === 'ROAS' ? (
            <VictoryAxis
              dependentAxis
              style={{ grid: { stroke: 'lightGrey' }, tickLabels: { fontSize: 18 } }}
              tickFormat={(y) => `${y}%`}
              orientation='right'
            />
          ) : (
            <VictoryAxis
              dependentAxis
              style={{ grid: { stroke: 'lightGrey' }, tickLabels: { fontSize: 18 } }}
              tickFormat={(y) => y}
              orientation='right'
            />
          ))}
      </VictoryChart>
    </div>
  )
}

export default AdChart

function getData(Selected: string, selectedDay: any) {
  switch (Selected) {
    case 'ROAS':
      return selectedDay.roas
    case '클릭 수':
      return selectedDay.click
    case '광고비': // 1
      return selectedDay.cost
    case '노출 수':
      return selectedDay.imp
    case '전환 수':
      return getConv(selectedDay.cvr, selectedDay.click)
    case '매출':
      return getSales(selectedDay.roas, selectedDay.cost)
    case '매드업':
      return null
    default:
      return undefined
  }
}

function getColor(Selected: string) {
  switch (Selected) {
    case 'ROAS':
      return '#4FADF7'
    case '광고비':
      return '#525252'
    case '노출 수':
      return '#a5b5cc'
    case '클릭 수':
      return '#85DA47'
    case '전환 수':
      return '#deff84'
    case '매출':
      return '#ff70c8'
    case '매드업':
      return '#111111'

    default:
      return undefined
  }
}

//   console.log(box)

//   let sum = 0
//   const arr = []
//   const MaxCnt = box.length % 7

//   let nowCnt = 1
//   for (let i = 0; i < box.length; i += 1) {
//     if (nowCnt === MaxCnt && i === box.length - 1) console.log(sum)
//     if (i % 7 === 0 && i !== 0) {
//       arr.push(sum / 7)
//       sum = 0
//       nowCnt += 1
//     }
//     sum += box[i].y
//   }
//   console.log(arr)
