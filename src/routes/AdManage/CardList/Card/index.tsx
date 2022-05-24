import styles from './card.module.scss'

import { advertisementCardType } from 'types/ad.d'
import { englishToKorean, startDate, dayBudget, totalSales } from 'services/ad'

interface Props {
  adInfo: advertisementCardType[]
}

const Card = ({ adInfo }: Props) => {
  const renderCardList = adInfo.map((ad) => (
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
  ))

  return <div className={styles.cardFlexbox}>{renderCardList}</div>
}

export default Card
