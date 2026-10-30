/**
 * useLocalStorage — sync a state value with localStorage
 *
 * @param {string} key   – localStorage key
 * @param {*}      initialValue
 * @returns {[value, setter]}
 */
import { useState, useEffect } from 'react'

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue))
    } catch {
      // ignore write errors
    }
  }, [key, storedValue])

  return [storedValue, setStoredValue]
}
