import { DownArrow, UpArrow } from 'assets/svgs/madup'
import styles from './item.module.scss'

interface Props {
  isIncreased: boolean
}

const Item = ({ isIncreased }: Props): JSX.Element => {
  return (
    <li className={styles.gridItem}>
      <p>111</p>
      <div className={styles.details}>
        <strong>1,000만 원</strong>
        <div>
          {isIncreased ? <UpArrow /> : <DownArrow />}
          <p>1,000만 회</p>
        </div>
      </div>
    </li>
  )
}

export default Item
