import dayjs from 'dayjs'

import { useAppSelector } from 'hooks'
import { IMediaLabel } from 'types/media'
import { getTimeListFormat } from 'states/time'

import ContentsContainer from 'routes/_components/ContentsContainer'
import BarChart from './BarChart'
import MediaTable from './MediaTable'

const mediaLabelList: IMediaLabel[] = [
  { name: 'google', krName: '구글', color: '#AC8AF8' },
  { name: 'facebook', krName: '페이스북', color: '#85DA47' },
  { name: 'naver', krName: '네이버', color: '#4FADF7' },
  { name: 'kakao', krName: '카카오', color: '#FFEB00' },
]

const Media = () => {
  const timeList = useAppSelector(getTimeListFormat)
  const formatTimeList = timeList.map((time) => dayjs(time).format('YYYY-MM-DD'))

  return (
    <section>
      <h2>매체 현황</h2>
      <ContentsContainer>
        <BarChart mediaLabelList={mediaLabelList} TimeList={formatTimeList} />
        <MediaTable mediaLabelList={mediaLabelList} TimeList={formatTimeList} />
      </ContentsContainer>
    </section>
  )
}

export default Media
