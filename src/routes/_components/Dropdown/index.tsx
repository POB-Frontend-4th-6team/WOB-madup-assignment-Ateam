import { DropdownMarker } from 'assets/svgs'
import { ChangeEvent, MouseEvent, useState } from 'react'
import styles from './dropdown.module.scss'
import { cx } from 'styles'

interface Props {
  size?: 'normal' | 'big'
}

const Dropdown = ({ size = 'normal' }: Props) => {
  const [items] = useState(['매드업', 'ROAS', '광고비', '노출 수', '클릭 수', '전환 수', '매출'])
  const [selected, setSelected] = useState(items[0])

  return (
    <details className={cx(styles.container, { [styles.big]: size === 'big' })}>
      <summary>
        <p>{selected}</p>
        <div className={styles.dropdownMarkerBox}>
          <DropdownMarker />
        </div>
      </summary>
      <ul>
        {items.map((item) => (
          <li key={`list-item-${item}`}>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </details>
  )
}

export default Dropdown
