import styles from './card.module.scss'

import { advertisementCardType } from 'types/ad.d'
import { sortWebAndAppAd, englishToKorean, startDate, dayBudget, totalSales } from 'services/ad'

interface Props {
  info: advertisementCardType
}

const Card = ({ info }: Props) => {
  return (
    <article className={styles.cardContainer}>
      <h2 className={styles.cardHeader}>{info.title}</h2>
      <dl>
        <dt>상태</dt>
        <dd>{englishToKorean(info.status)}</dd>
        <dt>광고 생성일</dt>
        <dd>{startDate(info.startDate, info.endDate)}</dd>
        <dt>일 희망 예산</dt>
        <dd>{dayBudget(info.budget)}</dd>
        <dt>광고 수익률</dt>
        <dd>{info.report.roas}%</dd>
        <dt>매출</dt>
        <dd>{totalSales(info.report.roas, info.report.cost)}</dd>
        <dt>광고 비용</dt>
        <dd>{dayBudget(info.report.cost)}</dd>
      </dl>
      <button type='button' className={styles.editButton}>
        수정하기
      </button>
    </article>
  )
}

export default Card
