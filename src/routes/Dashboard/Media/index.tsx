import { IMediaLabel } from 'types/media'
import ContentsContainer from 'routes/_components/ContentsContainer'
import BarChart from './BarChart'
import MediaTable from './MediaTable'

const Media = () => {
  const mediaInfo: IMediaLabel[] = [
    { name: 'google', krName: '구글', color: '#AC8AF8' },
    { name: 'facebook', krName: '페이스북', color: '#85DA47' },
    { name: 'naver', krName: '네이버', color: '#4FADF7' },
    { name: 'kakao', krName: '카카오', color: '#FFEB00' },
  ]

  return (
    <ContentsContainer>
      <BarChart mediaInfo={mediaInfo} />
      <MediaTable mediaInfo={mediaInfo} />
    </ContentsContainer>
  )
}

export default Media
