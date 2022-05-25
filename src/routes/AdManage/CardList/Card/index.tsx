import styles from './card.module.scss'

import { advertisementCardType } from 'types/ad.d'
import { englishToKorean, startDate, dayBudget, totalSales } from 'services/ad'

interface Props {
  info: advertisementCardType
}

const Card = ({ info }: Props) => {
  return (
    <section className={styles.cardContainer}>
      <h1 className={styles.cardHeader}>{info.title}</h1>
      <dl>
        <dt>상태</dt>
        <dd>{englishToKorean(info.status)}</dd>
        <dt>광고 생성일</dt>
        <dd>{startDate(info.startDate)}</dd>
        <dt>일 희망 예산</dt>
        <dd>{dayBudget(info.budget)}만원</dd>
        <dt>광고 수익률</dt>
        <dd>{info.report.roas}%</dd>
        <dt>매출</dt>
        <dd>{totalSales(info.report.roas, info.report.cost)}</dd>
        <dt>광고 비용</dt>
        <dd>{info.report.cost}</dd>
      </dl>
      <button type='button' className={styles.editButton}>
        수정하기
      </button>
    </section>
  )
}

export default Card
