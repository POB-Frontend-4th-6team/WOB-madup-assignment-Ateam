import { DropdownMarker } from 'assets/svgs'
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react'
import styles from './dropdown.module.scss'
import { cx } from 'styles'

interface Props {
  items: string[]
  onItemChange: (itemValue: string) => void
  size?: 'normal' | 'big'
}

const Dropdown = ({ items, onItemChange, size = 'normal' }: Props) => {
  const [selectedItem, setSelectedItem] = useState(items[0])
  const [isSelected, setIsSelected] = useState(false)

  const handleItemClick = (e: MouseEvent<HTMLLIElement>) => {
    const {
      dataset: { value },
    } = e.currentTarget
    if (!value) return

    setIsSelected(true)
    setSelectedItem(value)
  }

  useEffect(() => {
    if (!isSelected) return
    onItemChange(selectedItem)
  }, [onItemChange, isSelected, selectedItem])
  return (
    <details className={cx(styles.container, { [styles.big]: size === 'big' })}>
      <summary>
        <p>{selectedItem}</p>
        <div className={styles.dropdownMarkerBox}>
          <DropdownMarker />
        </div>
      </summary>
      <ul>
        {items.map((item) => (
          <li key={`list-item-${item}`} role='row' onClick={handleItemClick} data-value={item}>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </details>
  )
}

export default Dropdown
