import DATA from '../assets/svgs/jsons/admanagement.json'

const ALL_DATA = DATA.ads

export const fetchAllAd = () => {
  return DATA.ads
}

export const fetchOnlyActiveAd = () => {
  return ALL_DATA.filter((ad) => ad.status === 'active')
}

export const fetchOnlyEndedAd = () => {
  return ALL_DATA.filter((ad) => ad.status === 'ended')
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
  const result = props.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  if (result.slice(-1) === ',') {
    return result.slice(0, -4)
  }
  return result.slice(0, -5)
}

export const totalSales = (roas: number, cost: number) => {
  return (roas * cost) / 100
}
