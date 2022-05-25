import { FormEvent, ChangeEvent, useEffect } from 'react'

import { useState } from 'hooks'
import styles from './sidebar.module.scss'

interface Props {
  handleAddItem: (itemValue: string) => void
}

const AddServiceField = ({ handleAddItem }: Props) => {
  const [serviceText, setServiceText] = useState('')
  const [isSubmit, setSubmit] = useState(false)

  const handleAddField = () => {
    setSubmit(true)
    if (serviceText.length > 0) handleAddItem(serviceText)
    setServiceText('')
    setSubmit(false)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e?.preventDefault()
    handleAddField()
  }

  const handleOnClick = () => handleAddField()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setServiceText(e.currentTarget.value)

  useEffect(() => {
    if (isSubmit) handleAddItem(serviceText)
  })

  return (
    <form className={styles.modal} onSubmit={handleSubmit}>
      <div className={styles.inputBox}>
        <input type='text' onChange={handleChange} value={serviceText} />
        <button className={styles.addBtn} type='button' onClick={handleOnClick}>
          추가
        </button>
      </div>
    </form>
  )
}
export default AddServiceField
