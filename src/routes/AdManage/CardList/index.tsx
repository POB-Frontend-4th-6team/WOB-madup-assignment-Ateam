import styles from './cardList.module.scss'

import { useAppSelector } from 'hooks'
import { advertisementCardType } from 'types/ad.d'
import { getStatusOption } from 'states/ad'
import { fetchAllAd, fetchOnlyActiveAd, fetchOnlyEndedAd } from 'services/ad'

import Card from './Card'

const CardList = () => {
  const statusOption = useAppSelector(getStatusOption)

  let fetchedAdData: advertisementCardType[]

  if (statusOption === '전체보기') fetchedAdData = fetchAllAd()
  else if (statusOption === '진행중') fetchedAdData = fetchOnlyActiveAd()
  else if (statusOption === '종료') fetchedAdData = fetchOnlyEndedAd()
  else fetchedAdData = fetchAllAd()

  const Cards: JSX.Element[] = fetchedAdData.map((info) => <Card key={`Card_Info${info.title}`} info={info} />)

  return <div className={styles.cardFlexbox}>{Cards}</div>
}

export default CardList
