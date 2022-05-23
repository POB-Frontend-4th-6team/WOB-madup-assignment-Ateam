import { MouseEvent, useEffect, useRef, useState } from 'react'
import { DropdownMarker } from 'assets/svgs'
import { cx } from 'styles'
import { useClickAway } from 'react-use'
import useToggle from 'hooks/useToggle'
import styles from './dropdown.module.scss'

interface Props {
  items: string[]
  onItemChange: (itemValue: string) => void
  size?: 'normal' | 'big'
}

const Dropdown = ({ items, onItemChange, size = 'normal' }: Props) => {
  const [selectedItem, setSelectedItem] = useState(items[0])
  const [isSelected, setIsSelected] = useState(false)
  const [showList, toggleShowList, , closeList] = useToggle()
  const clickAwayRef = useRef(null)

  const handleItemClick = (e: MouseEvent<HTMLLIElement>) => {
    const {
      dataset: { value },
    } = e.currentTarget
    if (!value) return

    setIsSelected(true)
    setSelectedItem(value)
    closeList()
  }

  useClickAway(clickAwayRef, closeList)

  useEffect(() => {
    if (!isSelected) return
    onItemChange(selectedItem)
  }, [onItemChange, isSelected, selectedItem])

  return (
    <div className={cx(styles.container, { [styles.big]: size === 'big' })} ref={clickAwayRef}>
      <button type='button' onClick={toggleShowList}>
        <p>{selectedItem}</p>
        <div className={styles.dropdownMarkerBox}>
          <DropdownMarker />
        </div>
      </button>
      <ul className={cx({ [styles.show]: showList })}>
        {items.map((item) => (
          <li key={`list-item-${item}`} role='row' onClick={handleItemClick} data-value={item}>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown
