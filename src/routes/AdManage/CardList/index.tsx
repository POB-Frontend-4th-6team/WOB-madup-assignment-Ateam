import { useAppSelector } from 'hooks'

import { advertisementCardType } from 'types/ad.d'
import { getStatusOption } from 'states/ad'
import { fetchAllAd, fetchOnlyActiveAd, fetchOnlyEndedAd } from 'services/ad'

import Card from './Card'

const CardList = () => {
  const statusOption = useAppSelector(getStatusOption)

  let fetchedAdData: advertisementCardType[]

  if (statusOption === 'All') fetchedAdData = fetchAllAd()
  else if (statusOption === 'Active') fetchedAdData = fetchOnlyActiveAd()
  else if (statusOption === 'Ended') fetchedAdData = fetchOnlyEndedAd()
  else fetchedAdData = fetchAllAd()

  return <Card adInfo={fetchedAdData} />
}

export default CardList
