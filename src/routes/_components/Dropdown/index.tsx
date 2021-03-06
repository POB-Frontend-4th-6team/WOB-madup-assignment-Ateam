import { MouseEvent, ReactNode, useEffect, useRef, useState } from 'react'
import { DropdownIcon } from 'assets/svgs/madup'
import { cx } from 'styles'
import { useClickAway } from 'react-use'
import useToggle from 'hooks/useToggle'
import styles from './dropdown.module.scss'

interface IMarkColors {
  [item: string]: string
}
interface Props {
  items: string[]
  defaultItem?: string
  onItemChange: (itemValue: string) => void
  size?: 'normal' | 'big'
  unbordered?: boolean
  markColors?: IMarkColors
  children?: ReactNode
}

const Dropdown = ({
  children,
  items,
  defaultItem,
  onItemChange,
  size = 'normal',
  unbordered = false,
  markColors = {},
}: Props) => {
  const [selectedItem, setSelectedItem] = useState(defaultItem ?? items[0])
  const [isSelected, setIsSelected] = useState(false)
  const [showList, toggleShowList, , closeList] = useToggle()
  const clickAwayRef = useRef(null)
  const isMarked = Object.keys(markColors).length > 0
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
      <button type='button' onClick={toggleShowList} className={cx({ [styles.unbordered]: unbordered })}>
        {isMarked && (
          <div className={cx(styles.marker)} style={{ backgroundColor: markColors[selectedItem] ?? 'transparent' }} />
        )}
        <p>{selectedItem}</p>
        <div className={styles.dropdownIconBox}>
          <DropdownIcon />
        </div>
      </button>

      <ul className={cx({ [styles.show]: showList })}>
        {items.map((item) => (
          <li key={`list-item-${item}`} role='row' onClick={handleItemClick} data-value={item}>
            {isMarked && (
              <div className={styles.marker} style={{ backgroundColor: markColors[item] ?? 'transparent' }} />
            )}
            <p>{item}</p>
          </li>
        ))}
        {children && (
          <li role='row' className={styles.addService}>
            {children}
          </li>
        )}
      </ul>
    </div>
  )
}

export default Dropdown
