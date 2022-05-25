import styles from './grid.module.scss'
import Item from './Item'

const Grid = (): JSX.Element => {
  return (
    <div className={styles.grid}>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Item isIncreased key={`grid-item-${item}`} />
      ))}
    </div>
  )
}

export default Grid
