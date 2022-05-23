import styles from './card.module.scss'

import { adCardInfo } from 'types/ad.d'

const index = (props: adCardInfo) => {
  return (
    <section className={styles.cardContainer}>
      <h1 className={styles.cardHeader}>웹광고_20210601123030</h1>
      <dl>
        <dt>상태</dt>
        <dd>진행중</dd>
        <dt>광고 생성일</dt>
        <dd>2021-06-15</dd>
        <dt>일 희망 예산</dt>
        <dd>40만원</dd>
        <dt>광고 수익률</dt>
        <dd>694%</dd>
        <dt>매출</dt>
        <dd>26,071만원</dd>
        <dt>광고 비용</dt>
        <dd>3,759만원</dd>
      </dl>
      <button type='button' className={styles.editButton}>
        수정하기
      </button>
    </section>
  )
}

export default index
