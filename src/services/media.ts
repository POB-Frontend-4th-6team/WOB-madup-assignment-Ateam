import CHANNEL_DATA from 'assets/jsons/wanted_FE-media-channel-data-set.json'
import { IMediaChart } from 'types/media'
import { getSales, getConv } from 'utils/math'

export const getMediaFilter = () => {
  const mediaName = ['google', 'facebook', 'naver', 'kakao']

  const media: Record<string, IMediaChart[]> = {
    google: [],
    facebook: [],
    naver: [],
    kakao: [],
  }

  mediaName.forEach((name) => {
    media[name].push(
      { value: 0, category: '광고비' },
      { value: 0, category: '매출' },
      { value: 0, category: '노출 수' },
      { value: 0, category: '클릭 수' },
      { value: 0, category: '전환 수' }
    )
  })

  CHANNEL_DATA.forEach((d) => {
    media[d.channel].find((item) => item.category === '광고비')!.value += d.cost
    media[d.channel].find((item) => item.category === '매출')!.value += getSales(d.roas, d.cost)
    media[d.channel].find((item) => item.category === '노출 수')!.value += d.imp
    media[d.channel].find((item) => item.category === '클릭 수')!.value += d.click
    media[d.channel].find((item) => item.category === '전환 수')!.value += getConv(d.cvr, d.click)
  })

  return media
}
