/**
 * cn — merge class names (lightweight clsx substitute)
 *
 * Usage: cn('base-class', condition && 'conditional-class', props.className)
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

/**
 * formatDate — format an ISO date string to a readable local date
 *
 * @param {string|Date} date
 * @param {Intl.DateTimeFormatOptions} options
 * @returns {string}
 */
export function formatDate(date, options = { dateStyle: 'medium' }) {
  return new Intl.DateTimeFormat(undefined, options).format(new Date(date))
}

/**
 * capitalize — capitalize the first letter of a string
 *
 * @param {string} str
 * @returns {string}
 */
export function capitalize(str) {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * truncate — truncate a string to a maximum length with an ellipsis
 *
 * @param {string} str
 * @param {number} maxLength
 * @returns {string}
 */
export function truncate(str, maxLength = 80) {
  if (!str || str.length <= maxLength) return str
  return str.slice(0, maxLength) + '…'
}

/**
 * sleep — promise-based delay (useful in tests / mock loaders)
 *
 * @param {number} ms
 * @returns {Promise<void>}
 */
export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
