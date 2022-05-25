import { DownArrow, UpArrow } from 'assets/svgs/madup'
import styles from './item.module.scss'

interface Props {
  isIncreased: boolean
  name: string
  value: number
  diff: number
}

const Item = ({ isIncreased, name, value, diff }: Props): JSX.Element => {
  return (
    <li className={styles.gridItem}>
      <p>{name}</p>
      <div className={styles.details}>
        <strong>{value}</strong>
        <div>
          {isIncreased ? <UpArrow /> : <DownArrow />}
          <p>{diff}</p>
        </div>
      </div>
    </li>
  )
}

export default Item
