import styles from './cardModalContents.module.scss'
import store from 'store'

import { setModal } from 'states/modal'
import { useAppDispatch, useState } from 'hooks'
import { ChangeEvent } from 'react'

const CardModalContents = () => {
  const [adTypeState, setAdTypeState] = useState('')
  const [titleState, setTitleState] = useState('web')
  const [budgetState, setBudgetState] = useState<number>(0)
  const [statusState, setStatusState] = useState('active')
  const [startDateState, setStartDateState] = useState('')
  const [endDateState, setEndDateState] = useState('')
  const [costState, setCostState] = useState<number>(0)
  const [convValueState, setConvValueState] = useState<number>(0)
  const [roasState, setRoasState] = useState<number>(0)

  const dispatch = useAppDispatch()

  const handleType = (e: ChangeEvent<HTMLSelectElement>) => {
    setAdTypeState(e.currentTarget.value)
  }

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitleState(e.currentTarget.value)
  }

  const handleBudgetValue = (e: ChangeEvent<HTMLInputElement>) => {
    setBudgetState(Number(e.currentTarget.value))
  }

  const handleStatus = (e: ChangeEvent<HTMLSelectElement>) => {
    setStatusState(e.currentTarget.value)
  }

  const handleStartDate = (e: ChangeEvent<HTMLInputElement>) => {
    setStartDateState(e.currentTarget.value)
  }

  const handleEndDate = (e: ChangeEvent<HTMLInputElement>) => {
    setEndDateState(e.currentTarget.value)
  }

  const handleCostValue = (e: ChangeEvent<HTMLInputElement>) => {
    setCostState(Number(e.currentTarget.value))
  }

  const handleConvValue = (e: ChangeEvent<HTMLInputElement>) => {
    setConvValueState(Number(e.currentTarget.value))
  }

  const handleRoasValue = (e: ChangeEvent<HTMLInputElement>) => {
    setRoasState(Number(e.currentTarget.value))
  }

  const handleAddNewCard = () => {
    const res = store.get('adList')
    const newItem = {
      id: undefined,
      adType: adTypeState,
      title: titleState,
      budget: budgetState,
      status: statusState,
      startDate: startDateState,
      endDate: endDateState,
      report: {
        cost: costState,
        convValue: convValueState,
        roas: roasState,
      },
    }

    const newItems = [...res, newItem]
    store.set('adList', newItems)

    dispatch(setModal(false))
  }

  return (
    <>
      <form className={styles.modalContainer} onSubmit={handleAddNewCard}>
        <select onChange={handleType}>
          <option value='web'>Web</option>
          <option value='app'>App</option>
        </select>
        <input onChange={handleTitle} type='text' placeholder='Title' />
        <input onChange={handleBudgetValue} type='number' placeholder='Budget' />
        <select onChange={handleStatus}>
          <option value='active'>진행중</option>
          <option value='ended'>종료</option>
        </select>
        <input onChange={handleStartDate} type='text' placeholder='Start Date : YYYY-MM-DD' />
        {statusState === 'ended' && <input onChange={handleEndDate} type='text' placeholder='End Date : YYYY-MM-DD' />}
        <input onChange={handleCostValue} type='number' placeholder='Cost' />
        <input onChange={handleConvValue} type='text' placeholder='ConValue' />
        <input onChange={handleRoasValue} type='text' placeholder='Roas' />
      </form>
      <button type='button' onClick={handleAddNewCard} className={styles.addNewButton}>
        생성
      </button>
    </>
  )
}

export default CardModalContents
