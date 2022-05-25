import trendData from 'assets/jsons/wanted_FE_trend-data-set.json'
import { IDailyItem, ITrendData } from 'types/totalAd'
import dayjs from 'dayjs'
import BigNumber from 'bignumber.js'

import { getSales } from 'utils/math'

// const subtractStringDate = (fromDate: string, subtractDate: string) => {
//   const fromDateTime = new Date(fromDate).getTime()
//   const subtractDateTime = new Date(subtractDate).getTime()
//   const result = new Date(fromDateTime - subtractDateTime).toLocaleDateString()
// }

const isBetweenStringDate = (target: string, startDate: string, endDate: string) => {
  const startDateTime = new Date(startDate).getTime()
  const targetDateTime = new Date(target).getTime()
  const endDateTime = new Date(endDate).getTime()
  return startDateTime <= targetDateTime && targetDateTime <= endDateTime
}

const addAll = (datas: IDailyItem[]) => {
  const initialState = {
    click: new BigNumber(0),
    conv: new BigNumber(0),
    convValue: new BigNumber(0),
    cost: new BigNumber(0),
    cpa: new BigNumber(0),
    cpc: new BigNumber(0),
    ctr: new BigNumber(0),
    cvr: new BigNumber(0),
    imp: new BigNumber(0),
    roas: new BigNumber(0),
  }
  const sum = datas.reduce((acc, data) => {
    acc.click = acc.click.plus(data.click)
    acc.conv = acc.conv.plus(data.conv)
    acc.convValue = acc.convValue.plus(data.convValue)
    acc.cost = acc.cost.plus(data.cost)
    acc.cpa = acc.cpa.plus(data.cpa)
    acc.cpc = acc.cpc.plus(data.cpc)
    acc.ctr = acc.ctr.plus(data.ctr)
    acc.cvr = acc.cvr.plus(data.cvr)
    acc.imp = acc.imp.plus(data.imp)
    acc.roas = acc.roas.plus(data.roas)
    return acc
  }, initialState)

  const result = {
    click: sum.click.toNumber(),
    conv: sum.conv.toNumber(),
    convValue: sum.convValue.toNumber(),
    cost: sum.cost.toNumber(),
    cpa: sum.cpa.toNumber(),
    cpc: sum.cpc.toNumber(),
    ctr: sum.ctr.toNumber(),
    cvr: sum.cvr.toNumber(),
    imp: sum.imp.toNumber(),
    roas: sum.roas.toNumber(),
    sales: 0,
  }
  result.sales = new BigNumber(getSales(result.roas, result.cost)).integerValue().toNumber()
  return result
}

const getTrendDatas = (startDate: string, endDate: string) => {
  const datas = (trendData as ITrendData).report.daily.filter((data) =>
    isBetweenStringDate(data.date, startDate, endDate)
  )
  return addAll(datas)
}

const getPrevTrendDatas = (startDate: string, endDate: string) => {
  const diff = new Date(endDate).getTime() - new Date(startDate).getTime()
  const startDay = dayjs(startDate)
  const oneDayBeforeStart = startDay.subtract(1, 'day')
  const oneDayBeforeStartString = oneDayBeforeStart.format('YYYY-MM-DD')

  if (diff === 0) return getTrendDatas(oneDayBeforeStartString, oneDayBeforeStartString)

  const prevStartDay = dayjs(oneDayBeforeStart.valueOf() - diff)
  return getTrendDatas(prevStartDay.format('YYYY-MM-DD'), oneDayBeforeStartString)
}

export { getTrendDatas, getPrevTrendDatas }
