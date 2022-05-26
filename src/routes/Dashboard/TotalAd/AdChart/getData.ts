import { dataType } from 'types/totalAd'
import { getConv, getSales } from 'utils/math'
import { round } from 'lodash'

export const getData = (Selected: string, selectedDay: any) => {
  return {
    ROAS: selectedDay.roas,
    '클릭 수': selectedDay.click,
    광고비: selectedDay.cost,
    '노출 수': selectedDay.imp,
    '전환 수': getConv(selectedDay.cvr, selectedDay.click),
    매출: getSales(selectedDay.roas, selectedDay.cost),
    매드업: null,
  }[Selected]
}

export function getColor(Selected: string) {
  return (
    {
      ROAS: '#4FADF7',
      광고비: '#525252',
      '노출 수': '#a5b5cc',
      '클릭 수': '#85DA47',
      '전환 수': '#deff84',
      매출: '#ff70c8',
      매드업: '#111111',
    }[Selected] ?? undefined
  )
}

export function getWeekData(dataList: dataType[], timeList: string[]) {
  let sum = 0
  let cnt = 0
  const arr = []
  const per = round(dataList.length / 7)

  for (let i = 0; i < dataList.length; i += 1) {
    if (i % 7 === 0 && i !== 0) {
      const Date = timeList[i].split('-')
      const week = getWeek(Date)
      arr.push({ x: `${Date[1]}월 ${week}째 주`, y: sum })
      sum = 0
      cnt += 1
    }
    sum += dataList[i].y
    if (cnt === per && i === dataList.length - 1) {
      const Date = timeList[i].split('-')
      const week = getWeek(Date)
      arr.push({ x: `${Date[1]}월 ${week}째 주`, y: sum })
    }
  }
  return arr
}

function getWeek(Date: string[]) {
  let month = ''
  if (Number(Date[2]) <= 8) month = '첫'
  else if (Number(Date[2]) <= 15) month = '둘'
  else if (Number(Date[2]) <= 22) month = '셋'
  else month = '4'
  return month
}
