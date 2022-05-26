import DATA from '../assets/svgs/jsons/admanagement.json'
import { advertisementCardType } from 'types/ad'

export const fetchAllAd = () => {
  return DATA.ads
}

export const fetchOnlyActiveAd = () => {
  return DATA.ads.filter((ad: advertisementCardType) => ad.status === 'active')
}

export const fetchOnlyEndedAd = () => {
  return DATA.ads.filter((ad: advertisementCardType) => ad.status === 'ended')
}

export const sortWebAndAppAd = (type: string, title: string) => {
  if (type === 'web') return `Web_${title}`

  return `App_${title}`
}

export const englishToKorean = (props: string) => {
  if (props === 'active') return '진행중'

  return '종료'
}

export const startDate = (start: string, end: string | null) => {
  const cleanYearMaker = (str: string) => {
    return str.substr(2)
  }

  const startDayAndTime = start.split('T')

  if (end === null) {
    return cleanYearMaker(startDayAndTime[0])
  }

  if (end !== null) {
    const EndDayAndTime = end.split('T')
    const cleanStartYear = cleanYearMaker(startDayAndTime[0])
    const cleanEndYear = cleanYearMaker(EndDayAndTime[0])
    return `${cleanStartYear} (${cleanEndYear})`
  }

  return startDayAndTime[0]
}

export const dayBudget = (props: number) => {
  const result = props.toLocaleString()

  return `${result}원`
}

export const totalSales = (roas: number, cost: number) => {
  const total = (roas * cost) / 100
  const noDecimal = Math.round(total)

  return `${noDecimal.toLocaleString()}원`
}
