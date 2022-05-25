import styles from './cardList.module.scss'
import store from 'store'

import { useAppSelector, useMount } from 'hooks'
import { advertisementCardType } from 'types/ad.d'
import { getStatusOption } from 'states/ad'
import {
  fetchAllAd,
  fetchAllAdFromStorage,
  fetchOnlyActiveAdFromStorage,
  fetchOnlyEndedAdFromStorage,
} from 'services/ad'

import Card from './Card'

const CardList = () => {
  const statusOption = useAppSelector(getStatusOption)

  useMount(() => {
    const res = store.get('adList')
    if (!res) store.set('adList', fetchAllAd())
  })

  let fetchedAdData: advertisementCardType[]

  if (statusOption === 'All') fetchedAdData = fetchAllAdFromStorage()
  else if (statusOption === 'Active') fetchedAdData = fetchOnlyActiveAdFromStorage()
  else if (statusOption === 'Ended') fetchedAdData = fetchOnlyEndedAdFromStorage()
  else fetchedAdData = fetchAllAdFromStorage()

  const Cards: JSX.Element[] = fetchedAdData?.map((info) => <Card key={`Card_Info${info.title}`} info={info} />)

  return <div className={styles.cardFlexbox}>{Cards}</div>
}

export default CardList
