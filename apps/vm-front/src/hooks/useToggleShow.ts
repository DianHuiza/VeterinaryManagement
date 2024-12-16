import { useCallback, useEffect, useRef, useState } from 'react';

export function useToggleShow<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [isActive, setIsActive] = useState<boolean>(false)
  
  const toggleIsActive = useCallback(() => {
    setIsActive(curr => !curr) 
  },[])
  
  useEffect(() => {
    const currentRef = ref 
    const callback = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setIsActive(false)
      }
    }
    if (currentRef.current && isActive) {
      document.addEventListener('mousedown', callback)
    }
    return () => {
      if (currentRef.current) {
        document.removeEventListener('mousedown',callback)
      }
    }
  },[ref, isActive])
  return {isActive, setIsActive, toggleIsActive, ref}
}