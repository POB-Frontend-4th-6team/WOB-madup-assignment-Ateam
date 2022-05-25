import { useState } from 'react'

type UseToggleReturn = [boolean, () => void, () => void, () => void]

const useToggle = (initialState = false): UseToggleReturn => {
  const [value, setValue] = useState(initialState)
  const toggle = () => {
    setValue((prev) => !prev)
  }
  const setTrue = () => {
    setValue(true)
  }
  const setFalse = () => {
    setValue(false)
  }
  return [value, toggle, setTrue, setFalse]
}

export default useToggle
