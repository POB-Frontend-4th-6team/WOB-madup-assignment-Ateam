import { getConv, getSales } from 'utils/math'

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
