import styles from './card.module.scss'
import { useAppSelector } from 'hooks'

import { advertisementCardType } from 'types/ad.d'
import { getStatusOption } from 'states/ad'
import {
  fetchAllAd,
  fetchOnlyActiveAd,
  fetchOnlyEndedAd,
  englishToKorean,
  startDate,
  dayBudget,
  totalSales,
} from 'services/ad'

const Card = () => {
  const statusOption = useAppSelector(getStatusOption)

  console.log(statusOption)

  let fetchedAdData: advertisementCardType[]

  if (statusOption === 'All') fetchedAdData = fetchAllAd()
  if (statusOption === 'Active') fetchedAdData = fetchOnlyActiveAd()
  if (statusOption === 'Ended') fetchedAdData = fetchOnlyEndedAd()

  const ValidCardList: any = () => {
    const validCard = fetchedAdData.map((ad) => {
      return (
        <section className={styles.cardContainer} key={`advertisement_${ad.title}`}>
          <h1 className={styles.cardHeader}>{ad.title}</h1>
          <dl>
            <dt>상태</dt>
            <dd>{englishToKorean(ad.status)}</dd>
            <dt>광고 생성일</dt>
            <dd>{startDate(ad.startDate)}</dd>
            <dt>일 희망 예산</dt>
            <dd>{dayBudget(ad.budget)}만원</dd>
            <dt>광고 수익률</dt>
            <dd>{ad.report.roas}%</dd>
            <dt>매출</dt>
            <dd>{totalSales(ad.report.roas, ad.report.cost)}</dd>
            <dt>광고 비용</dt>
            <dd>{ad.report.cost}</dd>
          </dl>
          <button type='button' className={styles.editButton}>
            수정하기
          </button>
        </section>
      )
    })

    return validCard
  }

  return (
    <div className={styles.cardFlexbox}>
      <ValidCardList />
    </div>
  )
}

export default Card
