import { useState, useCallback } from "react"

export const useBottomSheetModal = () => {
  const [isVisible, setIsVisible] = useState(false)

  const openModal = useCallback(() => setIsVisible(true), [])
  const closeModal = useCallback(() => setIsVisible(false), [])

  return { isVisible, openModal, closeModal }
}
