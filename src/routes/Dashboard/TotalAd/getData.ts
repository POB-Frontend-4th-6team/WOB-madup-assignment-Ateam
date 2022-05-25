import { getConv, getSales } from 'utils/math'

export function getData(Selected: string, selectedDay: any) {
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

export function getColor(Selected: string) {
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
