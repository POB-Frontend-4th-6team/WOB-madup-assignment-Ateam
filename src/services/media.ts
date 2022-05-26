import { cloneDeep } from 'lodash'

import CHANNEL_DATA from 'assets/jsons/wanted_FE-media-channel-data-set.json'
import { IMediaChart } from 'types/media'
import { getSales, getConv } from 'utils/math'

// const dateRange = ['2022-02-01', '2022-02-02', '2022-02-03', '2022-02-04', '2022-02-05']
const mediaNames = ['google', 'facebook', 'naver', 'kakao']

export const getMediaChartData = (TimeList: string[]) => {
  const dataInit = [
    { value: 0, perValue: 0, category: '광고비' },
    { value: 0, perValue: 0, category: '매출' },
    { value: 0, perValue: 0, category: '노출 수' },
    { value: 0, perValue: 0, category: '클릭 수' },
    { value: 0, perValue: 0, category: '전환 수' },
  ]

  const mediaData: Record<string, IMediaChart[]> = {
    google: [],
    facebook: [],
    naver: [],
    kakao: [],
  }

  mediaNames.forEach((name) => {
    mediaData[name] = cloneDeep(dataInit)
  })

  const totalData = cloneDeep(dataInit)

  const rangeData = CHANNEL_DATA.filter((item) => TimeList.includes(item.date))

  rangeData.forEach((d) => {
    mediaData[d.channel].find((item) => item.category === '광고비')!.value += d.cost
    mediaData[d.channel].find((item) => item.category === '매출')!.value += getSales(d.roas, d.cost)
    mediaData[d.channel].find((item) => item.category === '노출 수')!.value += d.imp
    mediaData[d.channel].find((item) => item.category === '클릭 수')!.value += d.click
    mediaData[d.channel].find((item) => item.category === '전환 수')!.value += getConv(d.cvr, d.click)
  })

  mediaNames.forEach((name) => {
    totalData.forEach((data) => {
      data.value += mediaData[name].find((item) => item.category === data.category)!.value
    })
  })

  mediaNames.forEach((name) => {
    mediaData[name].forEach((item, idx) => {
      item.perValue = (mediaData[name][idx].value / totalData[idx].value) * 100
    })
  })

  return { mediaData }
}

export const getMediaTableData = (TimeList: string[]) => {
  const dataInit = [
    { value: 0, category: '광고비' },
    { value: 0, category: '매출' },
    { value: 0, category: 'ROAS' },
    { value: 0, category: '노출 수' },
    { value: 0, category: '클릭 수' },
    { value: 0, category: '클릭률' },
    { value: 0, category: '클릭당 비용' },
  ]

  const mediaData: Record<string, IMediaChart[]> = {
    google: [],
    facebook: [],
    naver: [],
    kakao: [],
  }
  mediaNames.forEach((name) => {
    mediaData[name] = cloneDeep(dataInit)
  })

  const totalData = cloneDeep(dataInit)

  const rangeData = CHANNEL_DATA.filter((item) => TimeList.includes(item.date))

  rangeData.forEach((d) => {
    mediaData[d.channel].find((item) => item.category === '광고비')!.value += d.cost
    mediaData[d.channel].find((item) => item.category === '매출')!.value += getSales(d.roas, d.cost)
    mediaData[d.channel].find((item) => item.category === 'ROAS')!.value += d.roas
    mediaData[d.channel].find((item) => item.category === '노출 수')!.value += d.imp
    mediaData[d.channel].find((item) => item.category === '클릭 수')!.value += d.click
    mediaData[d.channel].find((item) => item.category === '클릭률')!.value += d.ctr
    mediaData[d.channel].find((item) => item.category === '클릭당 비용')!.value += d.cpc
  })

  mediaNames.forEach((name) => {
    totalData.forEach((data) => {
      data.value += mediaData[name].find((item) => item.category === data.category)!.value
    })
  })

  return { mediaData, totalData }
}
